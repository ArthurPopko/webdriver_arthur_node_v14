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

    it.only('Wait Until the button text changes', function () {
        console.log('WHEN USER opens the Dynamic Controls page')
        browser.url('/dynamic_controls')
        console.log('THEN the JDynamicControlsPage opens')
        expect(browser).toHaveUrl(`${browser.options.baseUrl}/dynamic_controls`)
        console.log('AND the page contains Dynamic Controls name')
        expect(DynamicControlsPage.pageName).toHaveText('Dynamic Controls')

        DynamicControlsPage.clickAddButton()
        browser.waitUntil(() => {
            return DynamicControlsPage.addButton.getText() === 'Add'
        }, 6000, 'Expect button text to be changed')
        expect(DynamicControlsPage.addButton).toHaveText('Add')

        browser.pause(3000)
    })

    it.only('should wait until the button text changes to Remove', () => {
        DynamicControlsPage.clickAddButton()
        browser.waitUntil(() => {
            return DynamicControlsPage.addButton.getText() === 'Remove'
        }, 6000, 'Expect button text to change')
        expect(DynamicControlsPage.addButton).toHaveText('Remove')

        browser.pause(3000)
    })
})