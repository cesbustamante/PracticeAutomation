var searchWeather = (browser, search, results) => {
    browser
        .setValue('input[type="text"]', search)
        .click('button[class="enter-location__submit"]')
        .verify.containsText('.current-weather__weather', results)
        .click('button[class="current-weather__search-again"]')
}
module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/weatherman/build/index.html')

    },
    after: browser => {
        browser.end()
    },
    'weather test': browser => {
        searchWeather(browser, '84043', 'Lehi')
    }

}