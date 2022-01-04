const MainPage = require('../../pageobjects/main.page')
const KeyPressPage = require('../../pageobjects/key.presses.page')

describe('Keyboard interaction', () => {
    it('keys press ', () => {
        console.log('WHEN USER opens the main page')
        browser.url('/')
        console.log('AND USER clicks on the Key Presses link')
        MainPage.specificChildElement(31).click()
        console.log('THEN the Hovers page opens')
        expect(browser).toHaveUrl('http://the-internet.herokuapp.com/key_presses')

        console.log('WHEN USER clicks the input field')
        KeyPressPage.clickInputField()
        console.log('AND presses the [backspace]')
        KeyPressPage.setKeysToTarget('Backspace')
        console.log('THEN the BACK_SPACE text appears in the result string')
        expect(KeyPressPage.getResultText()).toContain('BACK_SPACE')
        browser.pause(2000)
    });
})