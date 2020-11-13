module.exports = {
    'Open in a new window': browser => {
        browser.url('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target')
            .waitForElementPresent('#tryhome')
            .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'On original window')
            .frame('iframeResult')
            .click('a')
            .windowHandles(results => {
                browser.switchWindow(HANDLE)
                    //...
                    .verify.urlEquals('https://www.w3schools.com/', 'In new one')
                    //...
                    .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'Back to old')
                    //...
                    . /*...*/ (results => {
                        var handles = results.value
                        browser.verify.ok(handles.length === 1, "there is only one window open.")
                            //...
                            .verify.urlEquals('https://www.w3schools.com/', 'And it is the new one')
                    })
                    .end()
            })
    }
}