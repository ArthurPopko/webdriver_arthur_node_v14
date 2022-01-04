const MainPage = require('../../pageobjects/main.page')
const FormPage = require('../../pageobjects/form.page')

describe('Forms interaction', () => {
    it('Login form fill', () => {
        browser.url('/')
        MainPage.specificChildElement(21).click()

        FormPage.enterUsername('tomsmith')
        FormPage.enterPassword('SuperSecretPassword!')
        FormPage.loginBtn.click()
        FormPage.flashAlert.waitForDisplayed()
        expect(FormPage.flashAlert.getText()).toEqual('You logged into a secure area!\n×')
        browser.pause(2000)

    })
});