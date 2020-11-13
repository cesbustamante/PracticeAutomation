var weather = [{
        search: 'Miami',
        result: 'Miami'
    },
    {
        search: '84061',
        result: 'Provo'
    },
    {
        search: 'Madison',
        result: 'Madison'
    },
]
var searchWeather = (browser, data) => {
    browser
        .setValue('input[class="enter-location__input"]', data.search)
        .click('button[class="enter-location__submit"]')
        .verify.containsText('div[class="current-weather__weather"]', data.result)
        .click('button[class="current-weather__search-again"]')

}

module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/weatherman/build/index.html')
    },
    after: browser => {
        browser
            .end()
    },

    'delete test': browser => {
        weather.forEach(test => {
            funky(browser, test)
        })

    }


}