chrome.extension.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

function init() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    if (chrome.extension.lastError) {
      message.innerText = '無法載入這個網頁： \n' + chrome.extension.lastError.message;
    }
  });

}

window.onload = init;