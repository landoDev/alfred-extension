// response to sendMessage in the background.js
    // toggles the dash
chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "toggle"){
        toggle()
    }
})

let iframe = document.createElement('iframe');
iframe.style.backgroundColor = "#36454f";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.display = "hidden";

