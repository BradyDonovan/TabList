function getCurrentWindowTabs() {
    return chrome.tabs.query({ currentWindow: true });
}

function listTabs() {
    getCurrentWindowTabs().then((tabs) => {
        const tabsListElement = document.getElementById('tabs-list-popup');
        let tabList = [];

        for (const tab of tabs) {
            tabList.push(tab.url)
        }

        tabsListElement.textContent = tabList.join('\n');
    })
}

function addToClipboard() {
    var text = document.getElementById('tabs-list-popup').textContent;
    navigator.clipboard.writeText(text).then(function () {
        console.log('Text copied to clipboard from TabList.');
    }).catch(function (error) {
        console.error('Error copying text: ', error);
    });
}

document.getElementById('copy-button').addEventListener('click', addToClipboard);
document.addEventListener("DOMContentLoaded", listTabs);