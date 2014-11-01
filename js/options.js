///
// Codebit "Opera Google Mail Extension"
// Option-Page-Handler
// 
// @author  Tom Schreiber (tom.schreiber@codebit.de)
// @version SVN: $Id: options.js 237 2012-10-12 09:11:56Z tom.schreiber@tomhost.de $
//
///

var Accounts;
var AccountsCount = 0;
var UniqueAccountString = "";
var AudioPreview;

// Themes-Array (internal name : display name)
var Themes = {
    "standard":"Standard",
    "gmail":"Google Mail"
};

// Sound-Array (filename : display name)
var Sounds = {
    "notification1.ogg":"Standard",
    "dont_panic.ogg":"Don't Panic",
    "on_the_hunt.ogg":"On the Hunt",
    "pixiedust.ogg":"Pixiedust",
    "sonar.ogg":"Sonar",
    "tinkerbell.ogg":"Tinkerbell"
};

// Intialize the option page
$(document).ready(function() 
{
    // Listen for script messages from background-process
    opera.extension.onmessage = HandleMessages;    
      
    // Refresh feed now
    opera.extension.postMessage({
        cmd:"Refresh"
    });
    
    // Init Settings
    $('#range_update_intervall').val(widget.preferences['updateIntervall']);
    
    // Set language-strings
    $('#range_update_intervall_label').html(lang.options_update);
    $('#update_intervall_unit').html(lang.options_update_unit);
    $('#enable_sound_label').html(lang.options_sound);
    $('#mailto_links_label').html(lang.options_mailto);
    $('#debug_mode_label').html(lang.options_debugmode);
    $('#html_mode_label').html(lang.options_htmlmode);
    $('#gmail_adfree_label').html(lang.options_adfree);
    $('#enable_messageactions_label').html(lang.options_enable_messageactions);
    $('#enable_tooltips_label').html(lang.options_tooltip);
    $('#theme_label').html(lang.options_choose_theme);
    $('#close').html(lang.options_close);  
    $('#refresh').html(lang.options_refresh);  
    $('#description').html(lang.options_description);  
    $('#account_descripton').html("<p>" + lang.options_description_accounts + "</p>"
        + "<p><strong>" + lang.options_dectected_accounts + "</strong></p>");
    $('#accounts_header').html(lang.options_accounts_header);
    $('#appearance_header').html(lang.options_appearance_header);
    $('#other_header').html(lang.options_other_header);    
    $('#link_operapage').html(lang.options_link_operapage);
    $('#link_feedback').html(lang.options_link_feedback);
    $('#link_projectpage').html(lang.options_link_projectpage);
    
    // Set localized links
    $('#ma_link').attr("href", lang.link_multisession_help);
    $('#ma_link').addClass("strong_link");    
    
    // Set Themes
    $.each(Themes, function(key, value)
    {   
        $('#theme').
        append($("<option></option>").
            attr("value",key).
            text(value)); 
    });
    
    // Set Sound
    $.each(Sounds, function(key, value)
    {   
        $('#sounds').
        append($("<option></option>").
            attr("value",key).
            text(value)); 
    });
    ToogleSoundChooser();
    
    // Show Range-Secounds on change
    $('#range_update_intervall').change(function() {
        $('#box_update_intervall').val($('#range_update_intervall').val());
        widget.preferences['updateIntervall'] = $('#box_update_intervall').val();
    });
    $('#box_update_intervall').keyup(function() {
        $('#range_update_intervall').val($('#box_update_intervall').val());
    });
   
    // Set close function (refresh feed & close window)
    $("#close").click(function(){
        opera.extension.postMessage({
            cmd:"Refresh_NoCallback"            
        });
        window.close();
    });
    
    // Fresh Accounts
    $('#refresh').click(function() {
        $('#account_list').html("");
        UniqueAccountString = "";
        $('#wait').show();
        opera.extension.postMessage({
            cmd:"Refresh"
        });
    })
});

// Handle messages from background-process
function HandleMessages(event)
{
    DebugMessage("Option-Page get command '" + event.data.cmd + "'");
    switch(event.data.cmd)
    {            
        // Get Info-Message, thats means there are no active connection :(
        case "info" :
            AccountsCount = 0;
            ShowAccounts();
            break;
    
        // Messages
        case "messages":
            Accounts = event.data.accounts;
            AccountsCount = Accounts.length;
            
            // Create unique string so we see if there are changes
            var newUniqueAccountString = "";            
            for (var i = 0; i < Accounts.length; i++)
                newUniqueAccountString  += Accounts[i].UniqueId;      
            
            //Refresh Account_list if there are changes
            if(newUniqueAccountString != UniqueAccountString) 
                ShowAccounts();
            UniqueAccountString = newUniqueAccountString;

            break;            
    }
}

// Show Accounts
function ShowAccounts()
{
    // Hide Wait-Animation and clear Account-List
    $('#wait').hide();
    $('#account_list').html("");
    
    // Show Message, if there are no accounts
    if(AccountsCount === 0)
    {
        var msg = $("<div class='noAccount'></div>").html(lang.error_noActiveAccount);
        $('#account_list').append(msg);
    }
    // Fill AccountList
    else
    {         
        for (var i = 0; i < Accounts.length; i++)
        {
            // Get UniqueID
            var uid = Accounts[i].UniqueId;
                
            // Get current selected Label
            var currentLabel = {
                inbox: "", 
                important: "", 
                unread: "",
                ignore: ""
            };                
            currentLabel.inbox = "selected='selected'";
            if(widget.preferences[uid + 'Label'])
                if(widget.preferences[uid + 'Label'] === 'important')
                    currentLabel.important = "selected='selected'";
                else if  (widget.preferences[uid + 'Label'] === 'unread')
                    currentLabel.unread = "selected='selected'";
                else if  (widget.preferences[uid + 'Label'] === 'ignore')
                    currentLabel.ignore = "selected='selected'";

            // Create Label-Box
            var labelBox =  '<select id="' + uid + 'SelectLabel" name="' + uid + 'Label" title="' + lang.options_label_tooltip + '">' +
            '<option value="inbox" ' + currentLabel.inbox + '>' + lang.options_label_inbox + '</option>' + 
            '<option value="important"' + currentLabel.important + '>' + lang.options_label_important + '</option>' +
            '<option value="unread"' + currentLabel.unread + '>' + lang.options_label_unread + '</option>' +
            '<option style="color: #777" value="ignore"' + currentLabel.ignore + '>' + lang.options_label_ignore + '</option>' +
            '</select>';   
            
            // Set Entry
            var entry = $("<div></div>").addClass("account_entry")
            .append($("<div></div>").addClass('text').html("" + Accounts[i].Name))
            .append($("<div></div>").addClass('options').html(labelBox));
            $('#account_list').append(entry); 
            
            // Set Function for Check/Uncheck
            $('#' + uid + 'SelectLabel').live( 'change', 
                function() {
                    widget.preferences[$(this).attr('name')] = $(this).attr('value');
                });
        }
    }
}

// Toogle Soundchooser
function ToogleSoundChooser()
{
  if(widget.preferences['enableSound'] === "on")
    $('#sound_container').show();
  else
    $('#sound_container').hide();
}

// Preview Sound
function PreviewSound()
{  
  // Init new Audio-Object and play
  var AudioPreview = document.getElementById('sound_preview');
  AudioPreview.src = '/sound/' + $('#sounds').val();
  AudioPreview.play();        
  DebugMessage(AudioPreview.src + " is played");
}

// Write Debug-Message
function DebugMessage(message, type)
{
    if(!type) type = "info";
    if(widget.preferences['debugMode'] && widget.preferences['debugMode'] === "on") 
        opera.postError("GMNEx,opt," + type + " : " + message);
}

// general options behavior (from dev.opera.com)
addEventListener
    (
        'DOMContentLoaded',
        function()
        {

            // storage
            var storage = widget.preferences;

            // glue for multiple values ( checkbox, select-multiple )
            var glue    = '\n';

            // get the FORM elements
            var formElements = document.querySelectorAll( 'input,select' );

            // list of FORM elements
            var skip            = hash( 'hidden,submit,image,reset,button' );
            var multipleValues  = hash( 'checkbox,select-multiple' );
            var checkable       = hash( 'checkbox,radio' );

            // string to hash
            function hash( str, glue )
            {
                var obj = {};
                var tmp = str.split(glue||',');

                while( tmp.length )
                    obj[ tmp.pop() ] = true;

                return obj;
            }

            // walk the elements and apply a callback method to them
            function walkElements( callback )
            {
                var obj = [];
                for( var i=0,element=null; element=formElements[i++]; )
                {
                    // skip the element if it has no name or is of a type with no useful value
                    var type = element.type.toLowerCase();
                    var name = element.name||'';
                    if( skip[type]===true || name=='') continue;

                    var tmp = callback( element, name, type );
                    if( tmp!=null )
                        obj.push( tmp );
                }
                return obj;
            }


            // listener for element changes
            function changedElement( e )
            {
                var element = e.currentTarget||e;
                var type    = element.type.toLowerCase();
                var name    = element.name||'';

                var value   = multipleValues[type]!==true?element.value:walkElements
                (
                    function( e, n, t )
                    {
                        if( n==name && e.options )
                        {
                            var tmp = [];
                            for( var j=0,option=null; option=e.options[j++]; )
                            {
                                if( option.selected )
                                {
                                    tmp.push( option.value );
                                }
                            }
                            return tmp.join( glue );
                        }
                        else if( n==name && checkable[t]===true && e.checked )
                        {
                            return e.value;
                        }
                    }
                    ).join( glue );

                // set value                 
                storage.setItem( name, value );
                
                // Toogle Elements
                if(name === "enableSound" ) ToogleSoundChooser();
            }



            // set the textContent of an element
            function setText( id, txt )
            {
                var e = document.getElementById(id);
                if( e )
                {
                    e.textContent = txt;
                }
            }




            // populate the title, name, author, ...
            setText( 'widget-title', widget.name );
            setText( 'widget-name', widget.name );
            setText( 'widget-author', widget.author );


            // walk and set the elements accordingly to the storage
            walkElements
            (
                function( element, name, type )
                {
                    var value       = storage[name]!==undefined?storage.getItem( name ):element.value;
                    var valueHash   = hash( value, glue );

                    if( element.selectedOptions )
                    {
                        // 'select' element
                        for( var j=0,option=null; option=element.options[j++]; )
                        {
                            option.selected = valueHash[option.value]===true;
                        }
                    }
                    else if( checkable[type]===true )
                    {
                        // 'checkable' element
                        element.checked = valueHash[element.value]===true;
                    }
                    else
                    {
                        // any other kind of element
                        element.value = value;
                    }


                    // set the widget.preferences to the value of the element if it was undefined
                    // YOU MAY NOT WANT TO DO THIS
                    if( storage[name]==undefined )
                    {
                        changedElement( element );
                    }

                    // listen to changes
                    element.addEventListener( 'change', changedElement, true );
                }
                );
        
            // Listen for script messages from background-process
            opera.extension.onmessage = HandleMessages;
        },
        false
        );
