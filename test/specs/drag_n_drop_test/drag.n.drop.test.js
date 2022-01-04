const DragNDropPage = require("../../pageobjects/drag.n.drop.page")

describe('Drag and Drop interaction', () => {
    let text = 'My name is Arthur!'

    it('Drag and Drop fail', function () {
        console.log('WHEN USER opens the Drag and Drop page')
        browser.url('/drag_and_drop')
        console.log('THEN the Drag and Drop page opens')
        expect(browser).toHaveUrl(`${browser.options.baseUrl}/drag_and_drop`)
        console.log('AND the page contains Drag and Drop name')
        expect(DragNDropPage.pageName).toHaveTextContaining('Drag and Drop')

        console.log('WHEN USER drag A to B')
        DragNDropPage.dragColumnAToColumnB()
        console.log('THEN A exchanges the position with B')
        expect(DragNDropPage.columnBHeader).toHaveText(DragNDropPage.columnAHeader.getText())
        browser.pause(2000)

    });

    it.skip('Drag and Drop passed ', function () {
        browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        DragNDropPage.dragDraggableToDroppable()
        expect(DragNDropPage.droppable).toHaveText('Dropped!')
    });
})