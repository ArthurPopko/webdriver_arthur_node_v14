const MainPage = require('../../pageobjects/main.page')

describe("Element text", function () {
    it("H2 to Be Displayed", () => {
        browser.url('/')
        let text = MainPage.subHeading.getText()
        expect(MainPage.subHeading).toBeDisplayed()
        console.log('Here must be a text:')
        console.log(text);
    })

    it("HEADING to Be Existing", () => {
        browser.url('/')
        let text = MainPage.pageHeader.getText()
        expect(MainPage.pageHeader).toBeExisting()
        console.log('Here must be a text:')
        console.log(text);
    })

    it("FOOTER to Be Displayed In Viewport", () => {
        browser.url('/')
        expect(MainPage.pageFooter).toHaveText('Powered by Elemental Selenium')
        browser.pause(2000)
        MainPage.pageFooter.scrollIntoView()
        browser.pause(2000)
        expect(MainPage.pageFooter).toBeDisplayedInViewport()
    })

    it("Number of elements", () => {
        browser.url('/')
        MainPage.getLiText()
        expect(MainPage.childElements).toBeElementsArrayOfSize(44)
    })
})