var isFF = window.navigator.userAgent.indexOf("Firefox/") > 0;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.action == 'show') {
		!isFF && chrome.pageAction.show(sender.tab.id);
	}
});