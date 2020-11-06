

var allData = {
    bgURL : null,
    wrapURL: null,
    bgColor: null,
    wrapColor: null,
    headColor: null,
    textColor: null,
    textM: null,
    clear: false
}

document.getElementById('bgURL').oninput=function(){
    allData.bgURL = document.getElementById('bgURL').value;
    allData.bgColor = null;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if(tabs.length == 0){ 
            console.log("could not send mesage to current tab");
        }else{
            chrome.tabs.sendMessage(tabs[0].id, allData, function(response) {
                console.log("received message from content script: "+response.farewell);
            });
        }
    });
}

document.getElementById('wrapURL').oninput=function(){
    allData.wrapURL = document.getElementById('wrapURL').value;
    allData.wrapColor = null;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if(tabs.length == 0){ 
            console.log("could not send mesage to current tab");
        }else{
            chrome.tabs.sendMessage(tabs[0].id, allData, function(response) {
                console.log("received message from content script: "+response.farewell);
            });
        }
    });
}

document.getElementById('bgColor').onchange=function(){
    allData.bgColor = document.getElementById('bgColor').value;
    allData.bgURL = null;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if(tabs.length == 0){ 
            console.log("could not send mesage to current tab");
        }else{
            chrome.tabs.sendMessage(tabs[0].id, allData, function(response) {
                console.log("received message from content script: "+response.farewell);
            });
        }
    });
}

document.getElementById('wrapColor').onchange=function(){
    allData.wrapColor = document.getElementById('wrapColor').value;
    allData.wrapURL = null;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if(tabs.length == 0){ 
            console.log("could not send mesage to current tab");
        }else{
            chrome.tabs.sendMessage(tabs[0].id, allData, function(response) {
                console.log("received message from content script: "+response.farewell);
            });
        }
    });
}

document.getElementById('headColor').onchange=function(){
    allData.headColor = document.getElementById('headColor').value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if(tabs.length == 0){ 
            console.log("could not send mesage to current tab");
        }else{
            chrome.tabs.sendMessage(tabs[0].id, allData, function(response) {
                console.log("received message from content script: "+response.farewell);
            });
        }
    });
}

document.getElementById('textColor').onchange=function(){
    allData.textColor = document.getElementById('textColor').value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if(tabs.length == 0){ 
            console.log("could not send mesage to current tab");
        }else{
            chrome.tabs.sendMessage(tabs[0].id, allData, function(response) {
                console.log("received message from content script: "+response.farewell);
            });
        }
    });
}

document.getElementById('textM').onchange=function(){
    allData.textM = document.getElementById('textM').value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if(tabs.length == 0){ 
            console.log("could not send mesage to current tab");
        }else{
            chrome.tabs.sendMessage(tabs[0].id, allData, function(response) {
                console.log("received message from content script: "+response.farewell);
            });
        }
    });
}

document.getElementById('def').onclick=function(){
    allData.clear = true;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if(tabs.length == 0){ 
            console.log("could not send mesage to current tab");
        }else{
            chrome.tabs.sendMessage(tabs[0].id, allData, function(response) {
                console.log("received message from content script: "+response.farewell);
            });
        }
    });
}
