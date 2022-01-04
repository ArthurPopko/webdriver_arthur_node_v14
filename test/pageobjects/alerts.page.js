class AlertsPage {
    get pageName() {
        return $('h3')
    }

    get result() {
        return $('.example #result')
    }

    alertButton(index) {
        return $(`.example li:nth-child(${index}) button`)
    }

    clickAlertButton(index) {
        this.alertButton(index).waitForDisplayed()
        this.alertButton(index).click()
    }

    getResultText() {
        this.result.waitForDisplayed()
        return this.result.getText()
    }
}

module.exports = new AlertsPage()