class MainPage {
    get pageHeader() {
        return $('.heading')
    }

    get subHeading() {
        return $('h2')
    }

    get pageFooter() {
        return $("//*[@id='page-footer']")
    }

    get parent() {
        return $('ul')
    }

    get childElements() {
        return this.parent.$$('li')
    }

    get firstLink() {
        return $('#content > ul > li:nth-child(1) > a')
    }

    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText())
        })
    }

    clickFirstLink() {
        if(this.firstLink.isDisplayed() === true) {
            this.firstLink.click()
        }
        browser.pause(5000)
    }
}
module.exports = new MainPage()