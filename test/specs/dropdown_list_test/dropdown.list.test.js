const DropdownListPage = require("../../pageobjects/dropdown.list.page")

describe('Dropdown List', () => {

    it('Dropdown menu option on selected', function () {
        console.log('WHEN USER opens the Dropdown list page')
        browser.url('/dropdown')
        console.log('THEN the Dropdown list page opens')
        expect(browser).toHaveUrl(`${browser.options.baseUrl}/dropdown`)
        console.log('AND the page contains Dropdown list name')
        expect(DropdownListPage.pageName).toHaveTextContaining('Dropdown List')

        DropdownListPage.clickDropdownMenu()
        DropdownListPage.clickDropdownMenuOptionOne()
        browser.pause(5000)
        expect(DropdownListPage.dropdownMenuOptionOne).toBeSelected()


    })
})