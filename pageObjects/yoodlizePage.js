module.exports = {
    url: 'https://www.yoodlize.com/',
    elements: {
        category: {
            selector: '//*[@id="rebass-provider"]/div/div[2]/div/div[1]/div[1]/div/div[2]/div',
            locateStrategy: 'xpath'
        },

        wait: {
            selector: '//*[@id="rebass-provider"]/div/div[1]/div/div[1]/div[1]/div/nav/div',
            locateStrategy: 'xpath'
        },
        seeAll1: {
            selector: '//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[1]/div[1]/a/div',
            locateStrategy: 'xpath'
        },
        seeAll2: {
            selector: '//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[1]/div[5]/a/div',
            locateStrategy: 'xpath'
        },
        seeAll3: {
            selector: '//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[1]/div[8]/a/div',
            locateStrategy: 'xpath'
        },
        seeAll4: {
            selector: '//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[5]/div[1]/a/div',
            locateStrategy: 'xpath'
        },
        seeAll5: {
            selector: '//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[5]/div[4]/a/div',
            locateStrategy: 'xpath'
        },
        seeAll6: {
            selector: '//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[5]/div[7]/a/div',
            locateStrategy: 'xpath'
        },
        seeAll7: {
            selector: '//*[@id="rebass-provider"]/div/div[1]/div/div[3]/div[5]/div[10]/a/div',
            locateStrategy: 'xpath'
        },
        back: {
            selector: '//*[@id="rebass-provider"]/div/div[1]/div/nav/div/div[1]/a',
            locateStrategy: 'xpath'
        },


    },
}