module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
    },
    after: browser => {
        browser.end()
    },
    'Your test here': browser => {
        browser
            .setValue('input[name="q"]', ['ironman', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .pause(5000)
            .clearValue('input[name="q"]')
            .setValue('input[name="q"]', ['batman', browser.Keys.ENTER])
            .pause(5000)
    }
}

module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
    },
    after: browser => {
        browser.end()
    },
    'Your test here': browser => {
        browser
            .setValue('input[name="q"]', ['ironman', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .pause(5000)
            .clearValue('input[name="q"]')
            .setValue('input[name="q"]', ['batman', browser.Keys.ENTER])
            .pause(5000)
    }
}