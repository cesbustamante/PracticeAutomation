const { constants } = require("buffer")
const { waitForDebugger } = require("inspector")

module.exports = {
    beforeEach: browser => {
        browser
            .url('https://www.yoodlize.com/')
    },
    after: browser => {
        browser
            .end()
    },
    'Test the (see all) on home page of yoodlize': browser => {
        //see all @ RECREATIONAL VEHICLES
        browser.useXpath()
            .waitForElementVisible('//div["container-fluid"]')
        browser.useXpath()
            .click('//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[1]/div[1]/a/div')
            .pause(2 * 1000)
            .verify.containsText('//div["sc-jKVCRD jSqgxr"]', 'Recreational Vehicles')
            //click to go back main page 
        browser.useXpath()
            .click('//@div[class="navbar-header"')




    }
}