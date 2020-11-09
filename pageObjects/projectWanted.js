var wantedFields = (header, MKE, OriginatingAgencyIdentifier, name,
    sex, race, height, hair, offemse, dateofWarrant) => {
    browser
}
var wanted = {}
module.exports = {
    beforeEach: browser => {
        wanted = browser.page.wantedPage()
        wanted
            .navigate()
    },
    after: browser => {
        wanted
            .end()
    }
}