class NewTabPage {
    get hereLink() {
        return $('.example a')
    }

    clickHereLink() {
        this.hereLink.waitForDisplayed()
        this.hereLink.click()
    }
}

module.exports = new NewTabPage()