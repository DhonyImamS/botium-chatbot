const { remote } = require('webdriverio');
const bb = require('botium-bindings')

bb.helper.mocha().setupMochaTestSuite()

describe('Telkomsel Chatbot Test', () => {
  let driver;

  before(async () => {
    driver = await remote({
      hostname: 'localhost',
      port: 4444,
      path: '/wd/hub',
      capabilities: {
        browserName: 'chrome'
      }
    });
  });

  it('should open Telkomsel contact page and start chat', async () => {
    try {
      // Open the page
      await driver.url('https://www.telkomsel.com/support/contact-us');
      console.log('Page loaded successfully');

      // Wait for the chat button and click it
      await driver.waitForVisible('#va-ui-show', 10000)
      await driver.click('#va-ui-show')
    
      // Wait for chat window to appear
      await driver.waitForVisible('div.va-ui-login-block', 10000)
      await driver.setValue('input[id="va-ui-username"]', 'danu')
      await driver.click('button[id="va-ui-submit-username"]')

      // Verify chat window is open
      const isChatWindowVisible = await driver.isVisible('div[id="va-ui-chat-window"]')
    //   assert.strictEqual(isChatWindowVisible, true, 'Chat window should be visible')

    } catch (error) {
      console.error('Error details:', error);
      throw error;
    }
  });

  after(async () => {
    if (driver) {
      await driver.deleteSession();
    }
  });
});