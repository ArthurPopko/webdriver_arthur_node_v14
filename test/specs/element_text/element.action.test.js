const AddRemoveElementsPage = require('../../pageobjects/add.remove.elements.page');
const CheckboxesPage = require('../../pageobjects/checkboxes.page');
const MainPage = require('../../pageobjects/main.page')
const FirsLinkPage = require('../../pageobjects/validation.first.page')

describe('Element action', () => {
    it("Click 1st link", () => {
        browser.url('/')
        MainPage.clickFirstLink()
        expect(browser).toHaveUrl('http://the-internet.herokuapp.com/abtest')
        console.log(FirsLinkPage.firstLinkName.getText())
        expect(FirsLinkPage.firstLinkName).toBeExisting  
        expect(FirsLinkPage.firstLinkName).toHaveTextContaining('A/B Test')
    })

    it("Click specific link", () => {
        browser.url('/')
        expect(MainPage.specificChildElement(2)).toBeDisplayed()
        MainPage.getSpecificChildElementText(2)
        expect(MainPage.specificChildElement(2)).toHaveText('Add/Remove Elements')
        MainPage.specificChildElement(2).click()
        expect(AddRemoveElementsPage.pageName).toHaveText('Add/Remove Elements')
    })

    it.only("Checkboxes", () => {
        browser.url('/')
        MainPage.clickElement(6)
        expect(browser).toHaveUrl('http://the-internet.herokuapp.com/checkboxes')
        expect(CheckboxesPage.pageName).toHaveText('Checkboxes')
        CheckboxesPage.clickCheckbox(1)
        expect(CheckboxesPage.checkboxes(1).isSelected()).toEqual(true)
        CheckboxesPage.clickCheckbox(1)
        expect(CheckboxesPage.checkboxes(1).isSelected()).toEqual(false)
    })
});