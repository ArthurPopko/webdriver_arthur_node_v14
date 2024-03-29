class HoverPage {
    figures(index) {
        return $(`.example .figure:nth-child(${index}) img`)
    }

    figureDetails(index) {
        return $(`.example .figure:nth-child(${index}) h5`)
    }

    hoverOnFigure(index) {
        this.figures(index).waitForDisplayed()
        this.figures(index).moveTo(1, 1)
    }

    getFigureDetailsText(index) {
        this.figureDetails(index).waitForDisplayed()
        return this.figureDetails(index).getText()
    }
}

module.exports = new HoverPage()