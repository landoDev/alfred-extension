// response to sendMessage in the background.js
    // toggles the dash
chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "toggle"){
        toggle()
    }
})

// style dash to be injected 
let iframe = document.createElement('iframe');
iframe.style.backgroundColor = "#36454f";
iframe.style.color = "white";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed"
iframe.style.display = "hidden";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.src = chrome.extension.getURL("popup.html")

console.log(iframe)

document.body.appendChild(iframe);

function toggle(){
    if(iframe.style.width == "0px"){
        iframe.style.width = "400px";
    } else {
        iframe.style.width= "0px";
    }
}
