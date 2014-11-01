// ==UserScript==
// @name	GMail Notfier - Mailto-Links
// @include	http://*
// @include	https://*
// @exclude https://mail.google.com/*
// @exclude http://mail.google.com/*
// @copyright	codebit
// @version	1.2.0
// ==/UserScript==

//Check for preferences
if(!widget || !widget.preferences['mailtoLinks'])
  opera.postError("GMNEx,is,error : Couldn't get widget-prefernces");

// Check if we should inject this script
if(widget.preferences['mailtoLinks'] === "on")
{
  var EnableLink = false;
  var Accounts;
  var AccountsCount = 0;

  // Set listener for Messages from background-process
  opera.extension.onmessage = HandleMessages;    

  // Get current Accounts
  opera.extension.postMessage({
      cmd:"GetCurrentMessages"
  }); 

  // Look at mailto-links
  window.addEventListener('DOMContentLoaded', ManipulateLinks, false);

  // Handle messages from background-process
  function HandleMessages(event)
  {
      switch(event.data.cmd)
      {                        
          // Get Info-Message, thats means there are no active connection :(
          case "info" :
              AccountsCount = 0;
              ManipulateLinks();
              break;
  
          // Messages
          case "messages":
              Accounts = event.data.accounts;
              AccountsCount = event.data.accounts_count;
              if(AccountsCount > 0) ManipulateLinks();
              break;            
      }
  }
  
  // Manipulate Links
  function ManipulateLinks()
  {
    if(document.body)
    {
        var links = document.body.getElementsByTagName("a");
        for(var i in links)
        {
            if(links[i].href && links[i].href.substr(0,7) == "mailto:")
            {
                // One Account 
                if(AccountsCount == 1 || AccountsCount == 0)
                {                         
                    links[i].href = links[i].href.replace("mailto:", "https://mail.google.com/mail/?extsrc=mailto&url=mailto:");
                    links[i].setAttribute("target", "_blank");
                }
                // Multiple Accounts
                else
                    ChooseAccountBox(links[i], "gmn_mailto" + i);
            }
        }      
      }
  }
  
  // Dialogbox for choosing Account
  function ChooseAccountBox(element, id)
  {
      if(AccountsCount > 0)
      {
          // Create Box for choosing Account
          var box = document.createElement('div');
          box.setAttribute('id', id);
          box.style.position = "absolute"; 
          box.style.display = "none !important";
          box.style.border = "1px solid #DDD";
          box.style.borderRadius = "2px";
          box.style.padding = "5px";
          box.style.background = "rgba(255,255,255,0.8)";            
          box.style.fontFamily = element.currentStyle['fontFamily'];
          box.style.fontSize = "0.8em";
          
          var header = document.createElement('p');
          header.innerHTML = "Send From:";
          header.fontSize = "0.8em";
          header.style.fontWeight = "bold";
          box.appendChild(header);            
          
          // Create entrys
          for (var i = 0; i < Accounts.length; i++)
          {
              var entry = document.createElement('a');
              entry.style.display = "block"
              entry.style.marginLeft = "8px";
              entry.innerHTML = Accounts[i].Name;
              entry.href = element.href.replace("mailto:", Accounts[i].AccountLink + "/?extsrc=mailto&url=mailto:");
              box.appendChild(entry);
          }              
                      
          // Append box
          document.body.appendChild(box);
          
          // Set function to show/hide box
          element.onclick = function(e) {
              var box = document.getElementById(id);         
              box.style.left = (e.pageX - 20) + "px";
              box.style.top = (e.pageY - 10) + "px";
              box.style.display = "block";
              box.onmouseleave = function(){
                  this.style.display = "none";
              }
              return false;
          }  
      }
  }
}
