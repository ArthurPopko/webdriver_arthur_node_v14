class CheckboxesPage {
    get pageName() {
        return $('h3')
    }

    checkboxes(index){
        return $(`#checkboxes input:nth-child(${index})`)
    }

    clickCheckbox(index) {
        this.checkboxes(index).waitForDisplayed()
        this.checkboxes(index).click()
        browser.pause(5000)
    }
}
module.exports = new CheckboxesPage