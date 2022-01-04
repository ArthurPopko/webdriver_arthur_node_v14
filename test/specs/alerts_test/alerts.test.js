const AlertPage = require("../../pageobjects/alerts.page")

describe('JavaScript Alerts', () => {

    let text = 'My name is Arthur!'

    it('JavaScript Alerts test', function () {
        console.log('WHEN USER opens the JavaScript Alerts page')
        browser.url('/javascript_alerts')
        console.log('THEN the JavaScript Alerts page opens')
        expect(browser).toHaveUrl(`${browser.options.baseUrl}/javascript_alerts`)
        console.log('AND the page contains JavaScript Alerts name')
        expect(AlertPage.pageName).toHaveTextContaining('JavaScript Alerts')

        AlertPage.clickAlertButton(1)
        expect(browser.getAlertText()).toContain('I am a JS Alert')
        browser.acceptAlert()
        expect(AlertPage.result).toHaveText('You successfully clicked an alert')
    })

    it('Dismiss alert ', function () {
        console.log('WHEN USER opens the JavaScript Alerts page')
        browser.url('/javascript_alerts')
        console.log('THEN the JavaScript Alerts page opens')
        expect(browser).toHaveUrl(`${browser.options.baseUrl}/javascript_alerts`)
        console.log('AND the page contains JavaScript Alerts name')
        expect(AlertPage.pageName).toHaveTextContaining('JavaScript Alerts')

        AlertPage.clickAlertButton(2)
        browser.dismissAlert()
        expect(AlertPage.result).toHaveText('You clicked: Cancel')
    });

    it('Prompt text ', function () {
        console.log('WHEN USER opens the JavaScript Alerts page')
        browser.url('/javascript_alerts')
        console.log('THEN the JavaScript Alerts page opens')
        expect(browser).toHaveUrl(`${browser.options.baseUrl}/javascript_alerts`)
        console.log('AND the page contains JavaScript Alerts name')
        expect(AlertPage.pageName).toHaveTextContaining('JavaScript Alerts')

        AlertPage.clickAlertButton(3)
        browser.sendAlertText(text)
        browser.acceptAlert()
        expect(AlertPage.result).toHaveText(`You entered: ${text}`)
    });

})