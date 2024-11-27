const link = document.createElement('link');

link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = chrome.extension.getURL('css_dark.css');

document.head.appendChild(link);

const observer = new MutationObserver(() => link.parentNode == null && document.head.appendChild(link));

observer.observe(document, { childList: true, subtree: true });
