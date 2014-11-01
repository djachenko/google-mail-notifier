///
// Codebit Grake  \_(°-°)_/[\/]
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// GMail Javascript Handler
// 
// part of the  project "Opera Google Mail Extension"
// (see http://codebit.de/oex/google-mail for more info)
//
// @author  Tom Schreiber (tom.schreiber@codebit.de)
// @version SVN: $Id: grake.js 263 2013-11-01 13:04:04Z tom.schreiber@tomhost.de $
//
///

// ~~~ STRUCTURES ~~~
function Gmail_Account() {
    this.UniqueID = "";
    this.Name = "";
    this.FeedLabel = "";
    this.UnreadCount = 0;
    this.HasNewMessages = false;
    this.AccountLink = "";
    this.UnreadMessages = []; // Message-Array
}
function Gmail_Message() {
    this.Id = "";
    this.UrlID = "";
    this.Accountname = "";
    this.AccountNumber = 0;
    this.Sendername = "";
    this.Sendermail = "";
    this.Subject = "";
    this.Content = "";
    this.Modified = new Date();
    this.MessageLink = "";
    this.Timestring = "";
}

/*
 * Grake() - Class for interact with Gmail in Javascript
 */
function Grake()
{
    // Internal Vars
    var GmailURL = "https://mail.google.com/mail/";
    var GmailAccountsURL = "https://accounts.google.com/AccountChooser";
    var RequestTimeout = 5000; // Timeout (in ms) for Ajax-Requests
    var EmailPattern = /([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4})/ig;
    var Accounts = new Array();
    var AccountsNew = new Array();
    var AccountsCompleted = 0;
    var LastUpdate = ""; 
    var RequestIsRunning = false;  
    var TimeoutProblem = false;
    var RequestTimer;
    var AtValue = null;
    
    // Set global JQuery-AJAX-Error-Function
    $.ajaxSetup({
        error: function(xhr, status, error) {
            DebugMessage("AJAX-Error (" + status + "/" + xhr.status + "), State " + xhr.readyState + ", Text " + xhr.responseText, "error");
        }
    });
    
    // Allow JQuery to make Cross-Domain-Requests (important!)
    jQuery.support.cors = true;
    
    // Return Accounts
    this.GetAccounts = function()
    {
        return Accounts;
    }  
    
    // Number of Accounts (because .length wont work)
    this.GetAccountsCount = function()
    {
        return Accounts.length;
    }
    
    // Returns if there was a timeout-problem
    this.GetTimeoutProblem  = function()
    {
        return TimeoutProblem;
    }
    
    // Returns total number of new messages
    this.GetTotalUnreadCount = function()
    {
        var unreadCount = 0;
        for (var i = 0; i < Accounts.length; i++)
            unreadCount += Number(Accounts[i].UnreadCount);
        return unreadCount;
    }
    
    // Returns if there new Messages 
    this.GetRealNewMessageBool = function()
    {
        for (var i = 0; i < Accounts.length; i++)
            if(Accounts[i].HasNewMessages) return true;
        return false;
    }
    
    // Returns LastUpdate
    this.GetLastUpdateTimestring = function()
    {
        return LastUpdate;
    }
    
    // Return Request-Status
    this.GetRequestProgress = function()
    {
        return RequestProgress;
    }

    // Update Account-Infos
    this.UpdateAccounts = function(callback)
    {
        // Check if Reuest is Running
        if(RequestIsRunning)
        {
            DebugMessage("Update-Request is already running, abort now");
            return;
        }
        RequestIsRunning = true;
        TimeoutProblem = false;
        
        // Set timer for Request to avoid deadlock
        RequestTimer = window.setTimeout(function(){RequestIsRunning=false;}, 
            RequestTimeout * 3);
    
        // At first check if we have multiple Accounts
        $.ajax({
            url: GmailAccountsURL, 
            timeout: this.RequestTimeout,
            success: function (data)
            {
                // Catch Accounts
                var accounts = data.match(EmailPattern);
                if(accounts && accounts.length)
                {
                    DebugMessage("Found " + accounts.length + " active Accounts (fetch feed-links now)");
                
                    // Resets global var for watching the requests
                    var detectedAccounts = new Array();
                    var accountDetectionCompleted = 0;
                    
                    // Check feeds
                    for (var i=0; i < accounts.length; i++)
                    {
                        $.ajax({
                            url: GmailURL + "u/" + i + "/feed/atom/", 
                            timeout: RequestTimeout,
                            success: function(xmlFeed) 
                            {
                                // Get Mail of this Account
                                var mail = "" + xmlFeed.documentElement.getElementsByTagName("title")[0].childNodes[0].nodeValue.match(EmailPattern);
                
                                // Get Link-Adress of this Account
                                var link = this.url;
                                link = link.replace(/http:/g,'https:');
                                link = link.replace(/\/feed\/atom\//g,'');
                                
                                // Add Account
                                detectedAccounts.push({
                                    name: mail, 
                                    url: link
                                });
                            },
                            error: function(jqXHR, textStatus, errorThrown)
                            {
                              // If there is a timeout, try to open gmail
                              // (because some cookies are missing)
                              if(textStatus == "timeout")
                              {
                                 TimeoutProblem = true;
                                 var gmUrl = this.url.replace(/feed\/atom\//g,'');
                                 DebugMessage("Timeout-Problem, check now " + gmUrl  , "error");    
                                 $.ajax({
                                    url: gmUrl,
                                    timeout: RequestTimeout});
                              }
                              // other error
                              else
                                DebugMessage("Ajax-Error " + textStatus + "/" + errorThrown, "error");    
                            },
                            complete: function()
                            { 
                                // Count the complete Accounts and get Feeds 
                                // if all request get back
                                accountDetectionCompleted++;  
                                if(accountDetectionCompleted == accounts.length)
                                  if(detectedAccounts.length > 0)
                                    GetFeeds(detectedAccounts, callback);
                                  else
                                  {
                                    Accounts = new Array();
                    
                                    // Call now
                                    RequestIsRunning = false;
                                    clearTimeout(RequestTimer);
                                    DebugMessage("No active Account found");
                                    if(callback != null) callback();
                                  }
                            }
                        });
                    }
            }
            // Delete Account-Object, if we found none Account and callback
            else
            {
                Accounts = new Array();
                    
                // Call now
                RequestIsRunning = false;
                clearTimeout(RequestTimer);
                DebugMessage("No active Account found");
                if(callback != null) callback();
            }
    
        }
        });   
  }
    
  // Feeds abrufen
  function GetFeeds(detectedAccounts, callback)
  {
      DebugMessage("Get " + detectedAccounts.length + " Message-Feeds now");
          
      // Resets global var for watching the requests
      FeedsCompleted = 0;
          
      // Clear List
      AccountsNew = new Array();
                  
      // Check feeds
      for (var i=0; i < detectedAccounts.length; i++)
      {
          // Get Label
          var unique = detectedAccounts[i].name.replace(/[^a-zA-Z 0-9]+/g,''); 
          var feedLabel = "inbox";
          if(widget.preferences[unique + 'Label'] && widget.preferences[unique + 'Label'] != "")
              feedLabel = widget.preferences[unique + 'Label'];
              
          // WORKAROUND: Use label '' for 'inbox'  (becuase of counter) -> Issue 75
          // -> http://code.google.com/p/google-mail-oex/issues/detail?id=75
          if(feedLabel == "inbox") feedLabel = '';
          
          // Prepare feed-url                  
          var feed = detectedAccounts[i].url + "/feed/atom/" + feedLabel;
              
          // Get Feed now
          DebugMessage("Get Feed for " + detectedAccounts[i].name + " : " + feed );
          $.ajax({
              url: feed, 
              timeout: RequestTimeout,
              success: function(xmlFeed) 
              {
                  // Get Mail-Adress of this Account (id)
                  var mail = xmlFeed.documentElement.getElementsByTagName("title")[0].childNodes[0].nodeValue.match(EmailPattern);
                  
                  // Get Basic-Link
                  var link = this.url;
                  link = link.replace(/http:/g,'https:')
                  link = link.replace(/\/feed\/atom\/.*/g,'')
                  var mailLink = link;
                  
                  // Set current Account-Number
                  var currentAccountNumber = 0;
                  var numMatches = this.url.match(/\/u\/([^\/]*)\//);
                  if (numMatches != null && numMatches.length > 0) 
                       currentAccountNumber = numMatches[1];
                  
                  // Create new Account-Object
                  var currentAccount = new Gmail_Account();
                  currentAccount.Name = "" + mail;
                  currentAccount.UniqueId = currentAccount.Name.replace(/[^a-zA-Z 0-9]+/g,'').toLowerCase();
                  
                  // Set Feed-Label for this Account
                  currentAccount.FeedLabel = "inbox";
                  if(widget.preferences[currentAccount.UniqueId + 'Label'] && widget.preferences[currentAccount.UniqueId + 'Label'] != "")
                      currentAccount.FeedLabel  = widget.preferences[currentAccount.UniqueId + 'Label'];
  
                  // Check if this Account should be ignored
                  var messages = new Array()
                  if(!widget.preferences[unique + 'Label'] || widget.preferences[unique + 'Label'] != "ignore")
                  {
                    // Get Message-Array from Feed
                    var nodes = xmlFeed.documentElement.getElementsByTagName("entry");
                    for(var i=0; i < nodes.length; i++)
                    {
                        // Set new message-object
                        var msg = new Gmail_Message();
                        msg.Id = nodes[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
                        msg.Accountname = mail;
                        msg.AccountNumber =  currentAccountNumber;     
                        msg.Sendername = nodes[i].getElementsByTagName("author")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                        msg.Sendermail = nodes[i].getElementsByTagName("author")[0].getElementsByTagName("email")[0].childNodes[0].nodeValue;
                           
                        // Get ID for URLs
                        var rxGetID = /message_id=([0-9a-f]+)&/g;
                        var match = rxGetID.exec(nodes[i].getElementsByTagName("link")[0].getAttribute("href"));    
                        msg.UrlId = match[1];    
                            
                        // Check on empty element at title and summary
                        if(nodes[i].getElementsByTagName("title")[0].childNodes[0])
                            msg.Subject = nodes[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                        if (nodes[i].getElementsByTagName("summary")[0] && nodes[i].getElementsByTagName("summary")[0].childNodes[0])
                            msg.Content = nodes[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                            
                        // Message-Link                     
                        if(currentAccount.FeedLabel == "inbox")     
                          msg.MessageLink = mailLink + "/?fs=1&source=atom&shva=1#inbox/" + msg.UrlId;
                        else if (currentAccount.FeedLabel == "important")
                          msg.MessageLink = mailLink + "/?fs=1&source=atom&shva=1#imp/" + msg.UrlId;
                        else
                          msg.MessageLink = mailLink + "/?fs=1&source=atom&shva=1#search/is%3a" + feedLabel + "/" + msg.UrlId;
                             
                        // TODO: Whats the difference beetween issued and modified
                        msg.Modified = new Date(nodes[i].getElementsByTagName("modified")[0].childNodes[0].nodeValue);
                        messages.push(msg);
                    }
                  }
                  // Search if this Account already exist
                  var currentIndex = -1;
                  for (var x = 0; x < Accounts.length; x++)
                  {
                      if(Accounts[x].Name == currentAccount.Name)
                      {
                          currentIndex = x;
                          DebugMessage("Account " + mail + " is found at index " + currentIndex);
                          break;
                      }
                  }
                      
                  // Set if we have new messages
                  if(currentIndex == -1)
                  {                       
                      // If there a more than zero messages for a new account
                      // they must be new
                      if(messages.length > 0) currentAccount.HasNewMessages = true;
                  }
                  // If we know this Accouns already, we will check for new Messages
                  else
                  {                        
                      // If the number of message is increased, there must be a new message,
                      // if the new number is zero there a no new messages,
                      // in all other situations we have to check every mail
                      if(messages.length > Accounts[currentIndex].UnreadMessages.length)
                          currentAccount.HasNewMessages = true;
                      else if (messages.length == 0)
                          currentAccount.HasNewMessages = false;
                      else
                      {
                          // Every Message-Id of ne feed is compared to all 
                          // existing Messages-Ids in the Account, if we found a unique ID
                          // we found a new message and will be break here
                          for(var j=0; j < messages.length; j++)
                          {
                              var isUnique = true;
                              for(var ii=0; ii < Accounts[currentIndex].UnreadMessages.length; ii++)
                                  if(Accounts[currentIndex].UnreadMessages[ii].Id.localeCompare(messages[j].Id) == 0)
                                  {
                                      isUnique = false;
                                      break;
                                  }
                                      
                              // This Message is unique, we can break here
                              if(isUnique)
                              {
                                  currentAccount.HasNewMessages = true;
                                  break;
                              }
                          }
                      }
                  }
                      
                  // Sort messages by date
                  messages.sort(function(a, b){
                      var t1 = new Date(a.modified);
                      var t2 = new Date(b.modified);
                      return t2.getTime()-t1.getTime();
                  });
                      
                  // Set Messages
                  currentAccount.UnreadMessages = messages;
                      
                  // Set Account-Link
                  currentAccount.AccountLink = mailLink;
                                         
                  // Set Unread-Count
                  // Note: the fullcount field can be bigger than the number of
                  // the messages in the feed, because only up to 20 will be here
                  currentAccount.UnreadCount = xmlFeed.documentElement.getElementsByTagName("fullcount")[0].childNodes[0].nodeValue; 
                      
                  // WORKAROUND: Sometimes the fullcount shows zero, but there
                  // are messages (dont know why)
                  if(messages.length > currentAccount.UnreadCount) 
                      currentAccount.UnreadCount = messages.length;
                      
                  // Add Account to List
                  AccountsNew.push(currentAccount);
                      
                  DebugMessage("Get  " + currentAccount.UnreadCount + " unreads mails for " + mail);
              },
              complete: function()
              { 
                  // Count the complete Accounts
                  // Note: This function is called every time (error or success),
                  // so there wont be a deadlock
                  FeedsCompleted++;
                  if(FeedsCompleted == detectedAccounts.length)
                  {
                      // Sets LastUpdate-Timestring
                      var now = new Date();
                      var h0 = "", m0 = "", s0 = "";
                      if(now.getHours() < 10) h0 = "0"
                      if(now.getMinutes() < 10) m0 = "0"
                      if(now.getSeconds() < 10) s0 = "0"
                      LastUpdate= lang.popup_lastupdate + h0 + now.getHours() + ":" +
                      m0 + now.getMinutes() + ":" + s0 +  now.getSeconds();
                          
                      // Sort Array
                      AccountsNew.sort(function(a, b)
                      {
                          if (a.UniqueId < b.UniqueId) 
                              return -1 
                          if (a.UniqueId > b.UniqueId)
                              return 1
                          return 0 
                      });
                      
                      // Replace List
                      Accounts = AccountsNew;
                          
                      // Call now
                      RequestIsRunning = false;
                      clearTimeout(RequestTimer);
                      DebugMessage("Every Request is returned, now calling the Callback-Function");
                      if(callback != null) callback();
                  }
              }
          });   
      }
  }
  
     // Send a POST action to Gmail
   this.MessageAction = function (actionObj)
   {
      // At first check if qe have a valid At-Value
      if (AtValue == null) 
      {
         GetAtValue(this.MessageAction, actionObj);
      } 
      // With valid At-Value send the Action to Gmail
      else 
      {  
        // Set Url
        var url = GmailURL + "u/" + actionObj.accountnum + "/h/" + Math.ceil(1000000 * Math.random()) + "/";      
        var postdata = {t: actionObj.urlid, at: AtValue, act: actionObj.action};     
        DebugMessage("Send Action '" + actionObj.action + "' to " + url );
        
        // Send action now
        $.ajax({
          type: 'POST',
          url: url,
          data: postdata, 
          timeout: this.RequestTimeout,
          success: function ()
          {
              // On Success -> Debug-Message
              DebugMessage("Command '" + actionObj.action + "' for " + actionObj.urlid + " sucessfully send"); 
              
              // Callback
              if (actionObj.callback != null) 
                actionObj.callback();                
          }
          });
        }
   }

   // Retrieve fresh At-Value (needed for MessageActions)
   function GetAtValue(callback, actionObj) 
   {
      // Set Url
      var url = GmailURL + "u/" + actionObj.accountnum + "/h/" + Math.ceil(1000000 * Math.random()) + "/?ui=html&zy=c";           
      DebugMessage("Get At-Value now from: " + url);
      
      // Get AT-Value
      $.ajax({
        url: url, 
        timeout: this.RequestTimeout,
        success: function (data)
        {
          // Parse Value
          var matches = data.match(/\at=([^"]+)/);
          if (matches != null && matches.length > 0) 
          {
             AtValue = matches[1];
             DebugMessage("At-Value retrieved: " + AtValue );  
             // Callback
             if (callback != null) callback(actionObj); 
          }
        }
        });
   }
  
  // Write Debug-Message
  function DebugMessage(message, type)
  {
      if(!type) type = "info";
      if(widget.preferences['debugMode'] && widget.preferences['debugMode'] === "on") 
          opera.postError("Grake," + type + " : " + message);
  }
}