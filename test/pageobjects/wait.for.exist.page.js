class WaitForExistPage {
    get pageName() {
        return $('h3')
    }

    get AddElementButton() {
        return $('.example button')
    }

    deleteButton(index) {
        return $(`#elements button:nth-child(${index})`)
    }

    clickAddElementButton() {
        this.AddElementButton.waitForDisplayed()
        this.AddElementButton.click()
    }

    clickDeleteButton(index) {
        this.deleteButton(index).waitForDisplayed()
        this.deleteButton(index).click()
    }
}

module.exports = new WaitForExistPage()