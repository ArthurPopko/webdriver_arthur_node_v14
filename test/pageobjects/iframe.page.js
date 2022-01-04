class IframePage {
    get pageName() {
        return $('h3')
    }

    get iframeBody() {
        return $('#tinymce')
    }

    get iframe() {
        return $('#mce_0_ifr')
    }

    sendTextToBody(text) {
        this.iframeBody.waitForDisplayed()
        this.iframeBody.clearValue()
        this.iframeBody.click()
        this.iframeBody.keys(text)
    }
}

module.exports = new IframePage()