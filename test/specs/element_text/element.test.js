const MainPage = require('../../pageobjects/main.page')

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

    it("Click 1st link", () => {
        browser.url('/')
        browser.pause(5000)
        console.log('Clicking the 1st link')
        console.log(MainPage.firstLink.getText())
        MainPage.clickFirstLink()
    })

})