class DynamicControlsPage {
    get pageName() {
        return $('h4')
    }

    get enableButton() {
        return $('#input-example button')
    }

    get inputEnabledField() {
        return $('#input-example input')
    }

    clickEnableButton() {
        this.enableButton.waitForDisplayed()
        this.enableButton.click()
    }

    get addButton() {
        return $('#checkbox-example button')
    }

    clickAddButton() {
        this.addButton.waitForDisplayed()
        this.addButton.click()
    }
}

module.exports = new DynamicControlsPage()