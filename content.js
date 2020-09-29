alert("Hello from your Chrome extension!")

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if( request.message === "toggle" ) {
//           // replace this with iframe code??
//         var firstHref = $("a[href^='http']").eq(0).attr("href");
//         console.log(firstHref);

//         chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
//       }
//     }
//   );
  chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "toggle"){
        alert("Hey I got this")
        toggle();
    }
})

var iframe = document.createElement('iframe'); 
iframe.style.background = "#36454f";
iframe.style.color = "white";
iframe.style.borderLeft = "2px solid black";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";

iframe.src = chrome.extension.getURL("popup.html")

document.body.appendChild(iframe);

function toggle(){
    if(iframe.style.width == "0px"){
        iframe.style.width="400px";
    }
    else{
        iframe.style.width="0px";
    }
}