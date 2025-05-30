module.exports = async (container, browser) => {
    const modalConsent = await browser.$('div.cookies-content')

    // Wait for modalConsent to be displayed with a loop
    const timeout = 60000; // 20 seconds timeout
    const interval = 1500; // check every 500ms
    let isDisplayed = false;
    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {
        isDisplayed = await modalConsent.isDisplayed();
        if (isDisplayed) {
            break; // Element is displayed, exit the loop
        }
        await browser.pause(interval);
    }

    if (isDisplayed) {
      // Click on the cookie consent button
      const nantiBtn = await browser.$('button.button-secondary-global')
      await nantiBtn.waitForClickable({ timeout: 20000 })
      await nantiBtn.click()
    }

    // open chat bot
    await browser.pause(3000)
    while (Date.now() - startTime < timeout) {
        const chatBotIcon = await browser.$('#va-ui-show')
        isDisplayed = await chatBotIcon.isDisplayed();
        if (isDisplayed) {
            await chatBotIcon.waitForClickable({ timeout: 20000 })
            await chatBotIcon.click()
            break; // Element is displayed, exit the loop
        }
        await browser.pause(interval);
    }
   
    // type customer name
    const nameInput = await browser.$('input#va-ui-username')
    await nameInput.waitForDisplayed({ timeout: 20000 })
    await nameInput.setValue('Danu Setyaputra')

    // click submit button
    const submitButton = await browser.$('button#va-ui-submit-username')
    await submitButton.waitForClickable({ timeout: 20000 })
    await submitButton.click()
  } 