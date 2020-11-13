module.exports = {
    "discord": browser => {
        browser.url('https://discord.com/channels/@me')
        browser.pause(9 * 1000)
    },
    'say hi Sam,': browser => {
        browser
            .setValue('input[name="email"]', 'cesbustamante@gmail.com')
            .setValue('input[name="password"]', 'Augusto1005')
            .click('button[type="submit"]')
            .pause(5000)
            .click('#private-channels-1 > div')
            .pause(5000)
            .setValue('#app-mount > div.app-1q1i1E > div > div.layers-3iHuyZ.layers-3q14ss > div > div > div > div.content-98HsJk > div.chat-3bRxxu > div > main > form > div > div > div > div.textArea-12jD-V.textAreaSlate-1ZzRVj.slateContainer-3Qkn2x > div.markup-2BOw-j.slateTextArea-1Mkdgw.fontSize16Padding-3Wk7zP', ['Hola Sam', browser.Keys.ENTER])

    }
}