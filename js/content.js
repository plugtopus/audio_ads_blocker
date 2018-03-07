document.addEventListener('DOMContentLoaded', function (event) {
    var scriptUrl = chrome.extension.getURL("../js/script.js");
    injectScript(scriptUrl);
});

function injectScript(scriptUrl) {
    var scriptt = document.createElement("script");
    scriptt.src = scriptUrl;
    document.head.appendChild(scriptt);
}

chrome.runtime.sendMessage({
    action: 'show'
});