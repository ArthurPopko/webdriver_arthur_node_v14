const IframePage = require("../../pageobjects/iframe.page")

describe('iFrame interaction', () => {
    let text = 'My name is Arthur!'

    it('iFrame edit', function () {
        console.log('WHEN USER opens the iFrame page')
        browser.url('/iframe')
        console.log('THEN the iFrame page opens')
        expect(browser).toHaveUrl(`${browser.options.baseUrl}/iframe`)
        console.log('AND the page contains iFrame name')
        expect(IframePage.pageName).toHaveTextContaining('An iFrame')

        console.log('WHEN USER input text in iFrame filed')
        IframePage.iframe.waitForDisplayed()
        browser.switchToFrame(IframePage.iframe)
        IframePage.sendTextToBody(text)
        console.log('THEN the text is in the iFrame filed')
        expect(IframePage.iframeBody).toHaveText(text)
        browser.pause(2000)


    });
})