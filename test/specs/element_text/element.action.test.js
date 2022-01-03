const MainPage = require('../../pageobjects/main.page')
const FirsLinkPage = require('../../pageobjects/validation.first.page')

describe('Element action', () => {
    it("Click 1st link", () => {
        browser.url('/')
        MainPage.clickFirstLink()
        console.log(FirsLinkPage.firstLinkName.getText())
        expect(FirsLinkPage.firstLinkName).toBeExisting  
        expect(FirsLinkPage.firstLinkName).toHaveTextContaining('A/B Test')
    })
});