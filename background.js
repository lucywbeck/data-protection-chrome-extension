const defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
]

let blockedUrlCounter = 0;

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        blockedUrlCounter++;
        return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)


setInterval(() => {
    // send to background console
    console.log(`Number of blocked URLs: ${blockedUrlCounter}`);

    // send to normal console
    chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
        sendResponse(blockedUrlCounter);
    });
}, 1000);

console.log(`ERR_BLOCKED_BY_CLIENT has occurred ${errBlockedByClientCounter} times.`);
