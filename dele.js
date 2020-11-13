module.exports = {
        beforeEach: browser =>
            browser.url('')
    },
    after: browser => {
        browser.end()

    }