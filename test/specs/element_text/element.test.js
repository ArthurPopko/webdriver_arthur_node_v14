describe("Element interaction", function () {
    it("Element element text console log", () => {
        browser.url('/')
        let text = $("h2")
        console.log('Here must be text:')
        console.log(text);
    })
})