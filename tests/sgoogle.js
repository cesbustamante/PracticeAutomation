module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
    },
    after: browser => {
        browser.end()
    },
    'search for dogs': browser => {
        browser
            .clearValue('input[name="q"]')
            .setValue('input[name="q"]', ['dogs', browser.Keys.ENTER])
            .waitForElementPresent('#res')
    }
}