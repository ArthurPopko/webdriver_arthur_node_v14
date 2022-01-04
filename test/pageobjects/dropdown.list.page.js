class DropdownListPage {
    get pageName() {
        return $('h3')
    }

    get dropdownMenu() {
        return $('#dropdown')
    }

    get dropdownMenuOptionOne() {
        return $('#dropdown option:nth-child(2)')
    }

    clickDropdownMenu() {
        this.dropdownMenu.waitForDisplayed()
        this.dropdownMenu.click()
    }

    clickDropdownMenuOptionOne() {
        this.dropdownMenuOptionOne.waitForDisplayed()
        this.dropdownMenuOptionOne.click()
    }
}

module.exports = new DropdownListPage()