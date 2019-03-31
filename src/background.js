const DOG_API_ENDPOINT = 'https://dog.ceo/api';

const { tabs, alarms } = browser;

let activeTabId;

tabs.onActivated.addListener(tabInfo => ({id: activeTabId} = tabInfo));

alarms.create('test', {
  periodInMinutes: 1.0,
});

alarms.onAlarm.addListener((alarmInfo) => {
  tabs.executeScript(activeTabId, {
    file: 'scripts/inject.js',
  });
});
