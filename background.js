chrome.runtime.onInstalled.addListener(() => {
  console.log('Focus Bubble extension installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'start-timer') {
    chrome.alarms.create('focusAlarm', { delayInMinutes: 25 });

    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon.png',
      title: 'Focus started',
      message: '25 minutes of focus time! 💪'
    });
  }
});

//  this part can throw the "undefined" error if alarms permission is missing
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'focusAlarm') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon.png',
      title: "Time's up!",
      message: 'Take a break! ⏳'
    });
  }
});
