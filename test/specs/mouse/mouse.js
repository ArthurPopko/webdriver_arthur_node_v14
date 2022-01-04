const MainPage = require('../../pageobjects/main.page')
const HoverPage = require('../../pageobjects/hover.page')

describe('Mouse', () => {
    it('Hovers', () => {
        browser.url('/')
        MainPage.specificChildElement('25').click()
        expect(browser).toHaveUrl('http://the-internet.herokuapp.com/hovers')
        let i = 3
        while (i < 6) {
            HoverPage.hoverOnFigure(i)
            expect(HoverPage.getFigureDetailsText(i)).toEqual(`name: user${i - 2}`)
            browser.pause(2000)
            i++
        }
    })
})