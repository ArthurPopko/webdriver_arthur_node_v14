class Forms {
    get usernameField() {
        return $('#username')
    }

    get passwordField() {
        return $('#password')
    }

    get loginBtn() {
        return $('#login > button')
    }

    get flashAlert() {
        return $('#flash')
    }

    enterUsername(text) {
        this.usernameField.waitForDisplayed()
        this.usernameField.setValue(text)
    }

    enterPassword(text) {
        this.passwordField.waitForDisplayed()
        this.passwordField.setValue(text)
    }
}
module.exports = new Forms