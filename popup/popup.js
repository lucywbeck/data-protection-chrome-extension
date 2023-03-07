console.log("This is a popup!");

const trackers = document.getElementById('trackers');
const recommendation = document.getElementById('recommendation');
let recommendationTextContent = "We have found normal levels of trackers on this particular website.\n\nTherefore, it is safe to proceed further.";
let blockedUrlCounter = 0;


setInterval(() => {
    chrome.runtime.sendMessage({ data: document.title }, function (response) {
        blockedUrlCounter = response;
        console.log(`Number of trackers blocked: ${blockedUrlCounter}`);
    });
    
    trackers.textContent = `Number of trackers blocked: ${blockedUrlCounter}`;
    trackers.hidden = false;

    if (blockedUrlCounter > 20) {
        recommendationTextContent = "We have found alarming levels of trackers on this particular website.\n\nTherefore, we strongly advise against proceeding further."
    }
    
    recommendation.textContent = recommendationTextContent;
    recommendation.hidden = false;
}, 1000);




