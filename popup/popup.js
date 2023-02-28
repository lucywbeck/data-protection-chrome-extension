console.log("This is a popup!");

const trackers = document.getElementById('trackers');
const recommendation = document.getElementById('recommendation');
let recommendationTextContent = "Based on our research, we believe that it is safe to continue viewing this website";
let blockedUrlCounter = 0;


setInterval(() => {
    chrome.runtime.sendMessage({ data: document.title }, function (response) {
        blockedUrlCounter = response;
        console.log(`Number of blocked URLs: ${blockedUrlCounter}`);
    });
    
    trackers.textContent = `Number of blocked URLs: ${blockedUrlCounter}`;
    trackers.hidden = false;

    if (blockedUrlCounter > 5) {
        recommendationTextContent = "Based on our research, we believe that it is not safe to continue viewing this website"
    }
    
    recommendation.textContent = recommendationTextContent;
    recommendation.hidden = false;
}, 1000);




