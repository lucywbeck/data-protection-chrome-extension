chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
    sendResponse('Hi from background Script file');
})