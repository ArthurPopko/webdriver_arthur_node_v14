const MainPage = require("../../pageobjects/main.page");
const NewTabPage = require("../../pageobjects/new.tab.page")

describe('Tabs and iFrames', () => {
    it('New tab', function () {
        console.log('WHEN USER opens the main page')
        browser.url('/')
        console.log('AND USER clicks on the Key Presses link')
        MainPage.specificChildElement(33).click()
        console.log('THEN the New page opens')
        expect(browser).toHaveUrl(`${browser.options.baseUrl}/windows`)
        browser.pause(2000)

        console.log('WHEN User clicks click here link')
        NewTabPage.clickHereLink()
        console.log('THEN the new Tab opens')
        browser.switchWindow(`${browser.options.baseUrl}/windows/new`)
        expect(browser).toHaveUrl(`${browser.options.baseUrl}/windows/new`)
        console.log('AND the new Tab has title New Window')
        expect(browser).toHaveTitle('New Window')

    });
})