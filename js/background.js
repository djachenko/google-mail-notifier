/**
 * ~~~ Codebit ~~~
 * Opera Google Mail Extension - Background-Process
 * --------------------------------------------------
 * http://codebit.de/oex/google-mail
 * 
 * @author  Tom Schreiber (tom.schreiber@codebit.de)
 * @version SVN: $Id: background.js 237 2012-10-12 09:11:56Z tom.schreiber@tomhost.de $
 *  
 */

// ***** CONSTANT SETTINGS ***/

// Menu-Height
var StandardHeight=135; // Standard-Height of Menu
var Grake; // Grake-Interface
var AudioObject; // Object for playing notification-sound
var UpdateTimer; // Timer for intervall-update
var MyButton;

// ToolbarButton-Properties
var ToolbarUIItemProperties =
{
    title: "Google Mail Notifier",
    icon: "img/toolbar-icon-18px.png",
    badge:
    {
        display: "block",
        textContent: "x",
        color: "white",
        backgroundColor: "#dd0000"
    },
    popup:
    {
        href: "popup.html",
        width: 325,
        height: StandardHeight
    }
}
// ***************************/

// Create/Add ToolbarIcon on Extension-Start
window.addEventListener("load", function()
{
    DebugMessage("Background-Process is initializing, Debug Mode is ready");
       
    // WORKAROUND for Audio-Bug, Background-Process needs
    // to load all sounds, so we can preview it at the option-page
    AudioObject1 = new Audio;
    AudioObject1.src = "/sound/notification1.ogg";
    AudioObject2 = new Audio;
    AudioObject2.src = "/sound/dont_panic.ogg";    
    AudioObject3 = new Audio;
    AudioObject3.src = "/sound/on_the_hunt.ogg";    
    AudioObject4 = new Audio;
    AudioObject4.src = "/sound/pixiedust.ogg";    
    AudioObject5 = new Audio;
    AudioObject5.src = "/sound/sonar.ogg";    
    AudioObject6 = new Audio;
    AudioObject6.src = "/sound/tinkerbell.ogg";

    // Listen for script messages
    opera.extension.onmessage = HandleMessages;
    
    // Sets alternate icon
    if(widget.preferences['theme'] && widget.preferences['theme'] != 'standard')
        ToolbarUIItemProperties.icon = "css/" + widget.preferences['theme'] + "/img/toolbar-icon-18px.png";
 
    // Create and Add the Button
    MyButton = opera.contexts.toolbar.createItem(this.ToolbarUIItemProperties);
    opera.contexts.toolbar.addItem(this.MyButton);
  
    // listen to storage events
    addEventListener('storage', storageHandler, false );
    
    // Init Grake
    Grake = new Grake();
  
    // Update Mails now
    Update();
  
}, false);

// Some Options maybe have changed
function storageHandler(e)
{
    // Check if the storage effected is the widget.preferences
    if(e.storageArea != widget.preferences) return;

    // If the Update-Intervall was changed -> set the new intervall
    if(e.key == 'update_intervall')
    {
        // Reset the Update-Timer and set it with the new time
        window.clearTimeout(UpdateTimer);
        UpdateTimer = window.setTimeout(Update, widget.preferences['updateIntervall'] * 1000);
    }
}

// Update Message-Count
function Update(source)
{
    DebugMessage("Update() is called");
    
    // Tells Grake to Update all Accounts
    Grake.UpdateAccounts(
        function()
        {
            Update_callback(source);
        });
}

// Update-Callback after Grake has completed
function Update_callback(source)
{
    // Get Accounts
    var accounts = Grake.GetAccounts();
    var num = Grake.GetAccountsCount();
    DebugMessage("Update_callback() is called");
    
    // Check if we have Accounts
    if(accounts == null || num == 0)
    {
        // set button / menu
        MyButton.badge.display="block";
        MyButton.badge.textContent = "x";
        DebugMessage("No active accounts are found");
        
        // We check twice, because it is possible that
        // an account is not initialized yet (if a user logged in in other
        // google-service, but hasn't open mail yet) but Grake tries open
        // gmail directly in background
        if(Grake.GetTimeoutProblem())
        {
            DebugMessage("Try again, because there was a timeout-problem");
            window.setTimeout(function() {
                Update(source);
            }, 500); 
            return;
        }
    }
    else
    {
        // Check if we have new mails (really new) and get total count of messages
        var unreadCount = Grake.GetTotalUnreadCount();
        var newMail = Grake.GetRealNewMessageBool();
        DebugMessage(num + " Accounts with " + unreadCount + " Messages");
    
        // Show total number of unread messages in button
        // (if zero hide)
        if(unreadCount > 0)
            MyButton.badge.textContent = unreadCount;
        else
            MyButton.badge.textContent = "";
    
        // Play sound for new Mail
        if(newMail) PlaySoundNotification();    
    }
    
    // Should we send the messages to a source ?
    if(source) SendMessagesToSource(source)

    // Set new timeout
    UpdateTimer = window.setTimeout(Update, widget.preferences['updateIntervall'] * 1000);
}

// Sends current messages to a event source (the menu)
function SendMessagesToSource(source)
{
    DebugMessage("Send messages to source");
    
    // Set Info Text
    var eventMessage;
    var count = Grake.GetAccountsCount();
    if(count == 0)
    {
        eventMessage = {
            cmd: "info",
            msg: lang.error_noActiveAccount
        };
    }
    else
    {
        // Count new messages and Status-Text
        var messageCount = Grake.GetTotalUnreadCount();
        var countText="";
        if(messageCount > 0)
        {
            if(messageCount > 1)
                countText = lang.popup_msg_before + messageCount + lang.popup_msg_after;
            else
                countText = lang.popup_onemsg;
        }
        else
            countText = lang.popup_nomsg;
    
        // Send Accounts to Popup-menu
        eventMessage = {
            cmd: "messages",
            accounts: Grake.GetAccounts(), 
            accounts_count: count,
            status: countText,
            timestring: Grake.GetLastUpdateTimestring(),
            showAccountSorted: false
        };
    }   

    // Send to source
    SendMsg(source, eventMessage)
}

// Handle messages from popup-menu
function HandleMessages(event)
{
    DebugMessage("Background-Process get command '" + event.data.cmd + "'");
    switch(event.data.cmd)
    {      
        // Load Preferences
        case 'Preferences':
            if( opera.extension.tabs.create )
                opera.extension.tabs.create({
                    url:"./options.html",
                    focused:true
                });
            break;
      
        // Load Message-Link in new Tab
        case 'LoadLink':
        
            // Always use https
            var link = event.data.lnk.replace(/^http:\/\//i, 'https://');
            
            // Use HTML-Mode if option is set
            if(widget.preferences['basicMode'] && widget.preferences['basicMode'] === "on")
                link = link.replace(/\/u\//i, '/h/');
              
            DebugMessage("Open link: " + link);
        
            // Open now in new tab
            if( opera.extension.tabs.create )
                opera.extension.tabs.create({
                    url:link,
                    focused:true
                });
            break;
            
        // Refresh now (without callback)
        case 'Refresh_NoCallback':
        
            // Reset timer
            window.clearTimeout(UpdateTimer);            
                
            // Sets alternate icon
            // (we do this here, because this Message comes from Option-Page)
            if(widget.preferences['theme'] != 'standard')
                MyButton.icon = "css/" + widget.preferences['theme'] + "/img/toolbar-icon-18px.png";
            else
                MyButton.icon = "img/toolbar-icon-18px.png";
            
            // then update the Accounts
            Update();
           
        // Refresh now (with callback)
        case 'Refresh':
            // reset timer
            window.clearTimeout(UpdateTimer);

            // At first send the current state to the source
            // (quicker)
            SendMessagesToSource(event.source);

            // then update the Accounts
            Update(event.source);

            break;
        
        // Only return currrent messages to source (No Refresh)    
        case 'GetCurrentMessages':
            SendMessagesToSource(event.source);
            break; 
      
        // Compose Mail
        case 'ComposeMail':
            if( opera.extension.tabs.create )
                opera.extension.tabs.create({
                    url:"https://mail.google.com/mail/?#compose",
                    focused:true
                });
            break;
            
        // Sets new Popup-Height
        case 'SetPopupSize':
            // Only change size if it is different to avoid flicker
            if(Number(MyButton.popup.height) != Number(event.data.height))
                MyButton.popup.height = event.data.height;
            break;
            
        // MessageAction (mark as read, achive, delete, ...)
        case 'MessageAction':
            MessageAction(event.data.uid, event.data.anum, event.data.action, event.source);
            break;
            
        // Debug-Message
        case 'DebugMessage':
            if(widget.preferences['debugMode'] && widget.preferences['debugMode'] === "on") 
                opera.postError(event.data.msg);
            break;

        // Do nothing
        default:
            DebugMessage("Unknown Command from Menu -> " + event.data.cmd, "error");
    }
}

// Sent to an event-source
function SendMsg(source, message)
{
    if(source && (typeof source != 'undefined'))
    {
        try
        {
            source.postMessage(message);
        }
        catch(err)
        {
            DebugMessage("Sending message to source fails (" + err.description + ")", "error");
        }
    }    
}

// Performs a Message-Action
function MessageAction(uid, anum, action, source)
{ 
    switch(action)
    {
        // Mark as read ("rd")
        case "mark":
            Grake.MessageAction({
                urlid: uid, 
                accountnum: anum, 
                action: "rd",
                callback: function(){
                    Update(source);
                }
            }); 
        break;
    
    // Archive thread ("arch" then "rd")
    case "archive":
        Grake.MessageAction({
            urlid: uid, 
            accountnum: anum, 
            action: "arch",
            callback: function(){
                Grake.MessageAction({
                    urlid: uid, 
                    accountnum: anum, 
                    action: "rd",
                    callback: function(){
                        Update(source);
                    }
                });
        }
        }
    );
break;
    
// Delete thread ("tr" then "rd")
case "delete":
    Grake.MessageAction({
        urlid: uid, 
        accountnum: anum, 
        action: "tr",
        callback: function(){
            Grake.MessageAction({
                urlid: uid, 
                accountnum: anum, 
                action: "rd",
                callback: function(){
                    Update(source);
                }
            });
    }
    }
);
break;
    
// Mark as Spam ("sp")   
case "spam":
    Grake.MessageAction({
        urlid: uid, 
        accountnum: anum, 
        action: "sp",
        callback: function(){
            Update(source);
        }
    }); 
break;
    
// Unknown
default:
    DebugMessage("Unknown MessageAction: " + action, "error"); 
}
}

// Play Sound-Notification (if enabled)
function PlaySoundNotification()
{
    if(widget.preferences['enableSound'] == 'on')
    {
        // Init Audio-Object if necessary
        if(!AudioObject) AudioObject = new Audio;
    
        // Set Source and play
        AudioObject.src = "/sound/" + widget.preferences['soundfile'];
        AudioObject.play();
        
        DebugMessage("Notification '" + widget.preferences['soundfile'] + "' is played");
    }
}

// Write Debug-Message
function DebugMessage(message, type)
{
    if(!type) type = "info";
    if(widget.preferences['debugMode'] && widget.preferences['debugMode'] === "on") 
        opera.postError("GMNEx,bg," + type + " : " + message);
}
