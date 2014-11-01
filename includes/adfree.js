// ==UserScript==
// @name GMail Notfier - GMail-CSS-Manipulation
// @include	https://mail.google.com/mail/*
// @copyright	codebit
// @version	1.0.0
// ==/UserScript==

//Check for preferences
if(!widget || !widget.preferences['gmailAdfree'])
  opera.postError("GMNEx,is,error : Could'nt get widget-prefernces");

// add the event-listener (just do it once) 
if(document.head)
  window.addEventListener('load', ManipulateCSS, false); 

// Hide Ads from Gmail-Webinterface
function ManipulateCSS()
{    
    // Setup custom-css
    var css = "";
    
    // remove adds
    if(widget.preferences['gmailAdfree'] === "on")
    {  
      css += ".Bu.yM {display:none !important;}";
      css += ".Bu.y3 {display:none !important;}";
      css += ".nH.PS .Zs {display:none !important;}";
      css += ".if {margin: 3px 8px 8px 8px !important;}";
    }
    
    // Apply custom-css
    if(css != "")
    {
      var node = document.createElement("style");
      node.type = "text/css";
      node.appendChild(document.createTextNode(css));
      document.head.appendChild(node);
    }   
}


