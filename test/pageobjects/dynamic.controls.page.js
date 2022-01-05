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
}

module.exports = new DynamicControlsPage()