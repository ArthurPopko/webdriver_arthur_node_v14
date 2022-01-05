const DynamicControlsPage = require("../../pageobjects/dynamic.controls.page")

describe('Dynamic Controls', () => {

    it('Wait for enabled', function () {
        console.log('WHEN USER opens the Dynamic Controls page')
        browser.url('/dynamic_controls')
        console.log('THEN the JDynamicControlsPage opens')
        expect(browser).toHaveUrl(`${browser.options.baseUrl}/dynamic_controls`)
        console.log('AND the page contains Dynamic Controls name')
        expect(DynamicControlsPage.pageName).toHaveText('Dynamic Controls')

        DynamicControlsPage.clickEnableButton()
        DynamicControlsPage.inputEnabledField.waitForEnabled(4000)
        expect(DynamicControlsPage.inputEnabledField.isEnabled()).toEqual(true)
        browser.pause(3000)
    })

    it('Wait for Disabled', function () {
        console.log('WHEN USER opens the Dynamic Controls page')
        browser.url('/dynamic_controls')
        console.log('THEN the JDynamicControlsPage opens')
        expect(browser).toHaveUrl(`${browser.options.baseUrl}/dynamic_controls`)
        console.log('AND the page contains Dynamic Controls name')
        expect(DynamicControlsPage.pageName).toHaveText('Dynamic Controls')

        DynamicControlsPage.clickEnableButton()
        DynamicControlsPage.inputEnabledField.waitForEnabled(4000)
        expect(DynamicControlsPage.inputEnabledField.isEnabled()).toEqual(true)

        DynamicControlsPage.clickEnableButton()
        DynamicControlsPage.inputEnabledField.waitForEnabled({timeout:4000, reverse:true})
        expect(DynamicControlsPage.inputEnabledField.isEnabled()).toEqual(false)
    })
})