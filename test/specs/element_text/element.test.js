const MainPage = require('../../pageobjects/main.page')
const FirsLinkPage = require('../../pageobjects/validation.first.page')


describe("Element interaction", function () {
    it("Element element text css H2 console log", () => {
        browser.url('/')
        let text = MainPage.subHeading.getText()
        console.log('Here must be a text:')
        console.log(text);
    })

    it("Element element text css HEADING console log", () => {
        browser.url('/')
        let text = MainPage.pageHeader.getText()
        console.log('Here must be a text:')
        console.log(text);
    })

    it("Element element text Xpath FOOTER console log", () => {
        browser.url('/')
        expect(MainPage.pageFooter).toHaveText('Hello!')
    })

    it("Element element text Li console log", () => {
        browser.url('/')
        MainPage.getLiText()
    })

    it.only("Click 1st link", () => {
        browser.url('/')
        MainPage.clickFirstLink()
        console.log(FirsLinkPage.firstLinkName.getText())
        expect(FirsLinkPage.firstLinkName).toBeExisting  
        expect(FirsLinkPage.firstLinkName).toHaveTextContaining('A/B Test Variation 1')
    })
})