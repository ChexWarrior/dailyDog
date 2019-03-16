
const { notifications } = browser;
notifications.create('test-notification', {
  type: "basic",
  title: "henlo",
  message: "test test test"
});

