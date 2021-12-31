describe("Element interaction", function () {
    it("Element element text css H2 console log", () => {
        browser.url('/')
        let text = $("h2").getText()
        console.log('Here must be a text:')
        console.log(text);
    })

    it("Element element text css HEADING console log", () => {
        browser.url('/')
        let text = $(".heading").getText()
        console.log('Here must be a text:')
        console.log(text);
    })

    it("Element element text Xpath FOOTER console log", () => {
        browser.url('/')
        let text = $("//*[@id='page-footer']").getText()
        console.log('Here must be a text:')
        console.log(text);
    })

})