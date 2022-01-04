const MainPage = require('../../pageobjects/main.page')
const HoverPage = require('../../pageobjects/hover.page')

describe('Mouse', () => {
    it('Hovers', () => {
        console.log('WHEN USER opens the main page')
        browser.url('/')
        console.log('AND USER clicks on the Hovers link')
        MainPage.specificChildElement('25').click()
        console.log('THEN the Hovers page opens')
        expect(browser).toHaveUrl('http://the-internet.herokuapp.com/hovers')

        let i = 3
        while (i < 6) {
            console.log(`WHEN USER hovers on the picture ${i-2}`)
            HoverPage.hoverOnFigure(i)
            console.log(`THEN the figure ${i-2} details text is displayed`)
            expect(HoverPage.getFigureDetailsText(i)).toEqual(`name: user${i - 2}`)
            browser.pause(2000)
            i++
        }
    })
})