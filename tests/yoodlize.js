var pageObject = {}
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.yoodlizePage()
        pageObject
            .navigate()
    },
    after: browser => {
        pageObject
            .end()
    },
    'Test the (see all) on home page of yoodlize': browser => {
        var pause = (1 * 5)
        var category

        //see all RECREATIONAL VEHICLES
        pageObject
            .waitForElementVisible('@wait')
            .click('@seeAll1')
            .pause(pause)
            .verify.containsText('@category', 'Recreational Vehicles')
            //click to go back main page
            // pageObject
            .click('@back')
            // see all OUTDOOR GEAR
            .waitForElementVisible('@wait')
            .click('@seeAll2')
            .pause(pause)
            .verify.containsText('@category', 'Outdoor Gear')
            // click to go back main page pageObject
            .click('@back')
            // see all ELECTRONICSS
            .waitForElementVisible('@wait')
            .click('@seeAll3')
            .pause(pause)
            .verify.containsText('@category', 'Electronics')
            //click to go back main page
        pageObject
            .click('@back')
            // see all PARTY & WEDDING EQUIPMENT
            .waitForElementVisible('@wait')
            .click('@seeAll4')
            .pause(pause)
            .verify.containsText('@category', ' Party & Wedding Equipment')
            //click to go back main page
        pageObject
            .click('@back')
            // see all TOOLS
            .waitForElementVisible('@wait')
            .click('@seeAll5')
            .pause(pause)
            .verify.containsText('@category', 'Tools')
            //click to go back main page
        pageObject
            .click('@back')
            // see CLOTHING
            .waitForElementVisible('@wait')
            .click('@seeAll6')
            .pause(pause)
            .verify.containsText('@category', 'Clothing')
            //click to go back main page
        pageObject
            .click('@back')
            // see all HOME & KITCHEN
            .waitForElementVisible('@wait')
            .click('@seeAll7')
            .pause(pause)
            .verify.containsText('@category', 'Home and Kitchen')
            //click to go back main page
        pageObject
            .click('@back')



    }
}