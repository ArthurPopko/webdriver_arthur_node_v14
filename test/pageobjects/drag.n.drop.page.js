class DragNDropPage {
    get pageName() {
        return $('h3')
    }

    get columnA() {
        return $('#column-a')
    }

    get columnB() {
        return $('#column-b')
    }

    get columnAHeader() {
        return $('#column-a')
    }

    get columnBHeader() {
        return $('#column-b')
    }

    get draggable() { return $('#draggable') }
    get droppable() { return $('#droppable') }
    get droppableParagraph() { return $('#droppable p') }

    dragColumnAToColumnB() {
        this.columnA.waitForDisplayed()
        this.columnA.dragAndDrop(this.columnB)
    }

    dragDraggableToDroppable() {
        this.draggable.waitForDisplayed()
        this.draggable.dragAndDrop(this.droppable)

    }
}

module.exports = new DragNDropPage()