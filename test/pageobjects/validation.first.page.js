class FirsLinkPage {

    get firstLinkName() {
        return $('div[class="example"] h3')
    }

}
module.exports = new FirsLinkPage()