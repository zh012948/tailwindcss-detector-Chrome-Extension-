chrome.action.onClicked.addListener((tab) => {

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: detectTailwind,
  }, (results) => {
    if (results && results[0] && results[0].result) {

      chrome.action.setIcon({
        path: {
          "16": "icon-color.png",
          "48": "icon-color.png",
          "128": "icon-color.png"
        },
        tabId: tab.id
      });
    } else {

      chrome.action.setIcon({
        path: {
          "16": "icon-gray.png",
          "48": "icon-gray.png",
          "128": "icon-gray.png"
        },
        tabId: tab.id
      });
    }
  });
});

function detectTailwind() {

  const hasTailwindCDN = Array.from(document.querySelectorAll('link, script')).some((element) => {
    return element.href && element.href.includes('tailwindcss') || element.src && element.src.includes('tailwindcss');
  });


  const hasTailwindClasses = Array.from(document.querySelectorAll('*')).some((element) => {
    return element.classList.value.split(' ').some(className => className.startsWith('tw-'));
  });


  return hasTailwindCDN || hasTailwindClasses;
}
