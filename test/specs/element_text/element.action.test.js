const { default: pause } = require('webdriverio/build/commands/browser/pause');
const AddRemoveElementsPage = require('../../pageobjects/add.remove.elements.page');
const { getSpecificChildElementText } = require('../../pageobjects/main.page');
const MainPage = require('../../pageobjects/main.page')
const FirsLinkPage = require('../../pageobjects/validation.first.page')

describe('Element action', () => {
    it("Click 1st link", () => {
        browser.url('/')
        MainPage.clickFirstLink()
        expect(browser.getUrl()).toEqual('http://the-internet.herokuapp.com/abtest')
        console.log(FirsLinkPage.firstLinkName.getText())
        expect(FirsLinkPage.firstLinkName).toBeExisting  
        expect(FirsLinkPage.firstLinkName).toHaveTextContaining('A/B Test')
    })

    it.only("Click specific link", () => {
        browser.url('/')
        expect(MainPage.specificChildElement(2)).toBeDisplayed()
        MainPage.getSpecificChildElementText(2)
        expect(MainPage.specificChildElement(2)).toHaveText('Add/Remove Elements')
        MainPage.specificChildElement(2).click()
        browser.pause(5000)
        expect(AddRemoveElementsPage.pageName).toHaveText('Add/Remove Elements')
    })
});