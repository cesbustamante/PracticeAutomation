module.exports = {
    "Donate to black lives matter": browser => {
        browser.url('https://blacklivesmatter.com/')
        browser.pause(9 * 1000)
    },
    'check if donate buttom works': browser => {
        browser
            .click('#menu-primary-menu > li.menu-highlight.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-2813.nav-item > a')
            .pause(3 * 1000)
    }
}