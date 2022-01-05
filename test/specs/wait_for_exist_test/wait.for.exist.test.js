const WaitForExistPage = require("../../pageobjects/wait.for.exist.page")

describe('WaitForExist', () => {

    it('Wait for exist element', function () {
        console.log('WHEN USER opens the add_remove_elements page')
        browser.url('/add_remove_elements/')
        console.log('THEN the JDynamicControlsPage opens')
        expect(browser).toHaveUrl(`${browser.options.baseUrl}/add_remove_elements/`)
        console.log('AND the page contains add/remove elements name')
        expect(WaitForExistPage.pageName).toHaveText('Add/Remove Elements')

        WaitForExistPage.clickAddElementButton()
        WaitForExistPage.deleteButton(1).waitForExist()

        WaitForExistPage.clickDeleteButton(1)
        WaitForExistPage.deleteButton(1).waitForExist({reverse: true})
        expect(WaitForExistPage.deleteButton(1).isExisting()).toEqual(false)
    })


})