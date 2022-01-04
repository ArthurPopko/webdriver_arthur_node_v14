class KeyPressesPage {
    get inputField() {
        return $('.example #target')
    }

    get result() {
        return $('.example #result')
    }

    clickInputField() {
        this.inputField.waitForDisplayed()
        this.inputField.click()
    }

    setKeysToTarget(text) {
        this.inputField.waitForDisplayed()
        this.inputField.keys(text)
    }

    getResultText() {
        this.result.waitForDisplayed()
        return this.result.getText()
    }
}

module.exports = new KeyPressesPage()