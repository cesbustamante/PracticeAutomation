var wantedFields = (browser, header, MKE, OriginatingAgencyIdentifier, name,
    sex, race, height, Weigh, hair, offense, dateofWarrant) => {
    browser
        .waitForElementVisible('#pageWrap')
        .click('.bm-burger-button')
        .waitForElementVisible('.bm-item-list')
    browser
        .click('@EnterWantedB')
        .pause(1000)
        .click('#react-burger-cross-btn')
        .setValue('@inputHeader', header)
        .setValue('@inpuMKE', MKE)
        .setValue('@inpuOriginatingAgencyIdentifier', OriginatingAgencyIdentifier)
        .setValue('@inpuName', name)
        .click(sex)
        .click(race)
        .click('@inpuHeight', height)
        .click('@inpuWeight', Weigh)
        .click('@inpuHair', hair)
        .click('@inpuOffense', offense)
        .click('@inpuDateofWarrant', dateofWarrant)
        .click('@submitB')
        // .verify.containsText('@errorlist', 'The "Header" field should be between 9 and 19 characters long')
        // .verify.containsText('@errorlist', 'The "MKE" field shold between 2 and 4 chracters long')
        // .verify.containsText('@errorlist', 'The "Originating Agency Identifier" field should be 9 charcaters long')
        // .verify.containsText('@errorlist', 'The "Name" field should be between 3 to 30 characters long')
        // .verify.containsText('@errorlist', 'The "Sex" field should be inlcude')
        // .verify.containsText('@errorlist', 'The "Race" field must be include')
        // .verify.containsText('@errorlist', 'The "Height" field should be 3 chracaters long')
        // .verify.containsText('@errorlist', 'The "Weight" field should be 1 to 3 chracaters long')
        // .verify.containsText('@errorlist', 'The "Hair" field should be 3 to 10 characters long')
        // .verify.containsText('@errorlist', 'The "Offense" field should be between 5 to 15 characters long')
        // .verify.containsText('@errorlist', 'The "Date of Warrant" 10 characters in length, numeric in MM/DD/YYYY format (allows dates from 1900 to today +1 day, to account for time zone differences)')
        //let errorChecker = function(wantedPage, warrantInfo, expectedErrors){}

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
    },
    'boundary max': browser => {
        //Header 19 any allowed, MKE, 4 alpga, Origination 9alpha, Name 30 any allowed
        //Sex Unknown, Race Unknown, Heigh 3, Weaight 3, Hair 10 alpha, Offense 15 any allowed
        //Date to today +1 day, to account for time zone differences
        wantedFields(wanted, 'ABDOMINOHYSTEROTOMY', 'ABCD', 'Something',
            'pseudopseudohypoparathyroidism', '@unknown', '@runknown',
            '578', '230', 'Skateboard', 'Prognostication', '13092020')
    },
    'boundary min': browser => {
        //Header 9 any allowed, MKE, 2 alpga, Origination 9alpha, Name 3 any allowed
        //Sex Femele, Race asian, Heigh 3, Weaight 1, Hair 3 alpha, Offense 5 any allowed
        //allows dates from 1900
        wantedFields(wanted, 'Elizabeth', 'AB', 'Something',
            'cdf', '@female', '@asian',
            '578', '2', 'bla', 'Abate', '01011900')
    },
    'boundary before max': browser => {
        //Header 18 any allowed, MKE, 3 alpga, Origination 9alpha, Name 29 any allowed
        //Sex Unknown, Race Unknown, Heigh 3, Weaight 2, Hair 9 alpha, Offense 15 any allowed
        //Date to today +1 day, to account for time zone differences
        wantedFields(wanted, 'ABDOMINOHYSTEROTOM', 'ABC', 'Somethin',
            'pseudopseudohypoparathyroidis', '@unknown', '@runknown',
            '578', '23', 'Skateboar', 'Prognosticatio', '12092020')
    },
    'boundary before min': browser => {
        //Header 10 any allowed, MKE 3 alpga, Origination 9alpha, Name 4 any allowed
        //Sex Unknown, Race Unknown, Heigh 3, Weaight 2, Hair 4 alpha, Offense 6 any allowed
        //Date to today +1 day, to account for time zone differences
        wantedFields(wanted, 'Elizabethh', 'ABCD', 'Something',
            'pseu', '@unknown', '@runknown',
            '578', '23', 'Skat', 'Progno', '02011900')
    },
}