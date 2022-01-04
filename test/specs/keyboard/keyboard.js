const MainPage = require('../../pageobjects/main.page')

describe('Keyboard interaction', () => {
    it('keys press ', () => {
        browser.url('/')
        MainPage.specificChildElement(31).click()
    });
})