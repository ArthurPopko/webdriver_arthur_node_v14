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

    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText())
        })
    }
}
module.exports = new MainPage()