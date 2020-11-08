var rubic = {}
module.exports = {
    beforeEach: browser => {
        rubic = browser.page.rubricPage()
        rubic
            .navigate()
    },
    after: browser => {
        rubic
            .end()
    },
    'Odds and Evens': browser => {
        rubic
        var myValues = {
            evens: '22',
            odds: '123'
        }
        rubic
        //input numbers
            .setValue('@inputEvens', myValues.evens)
            // click slit button
            .click('@splitButton')
            //check even output
            .expect.element('@resultEven').text.to.contain(myValues.evens)
        rubic
        //input numbers
            .setValue('@inputEvens', myValues.odds)
            // click slit button
            .click('@splitButton')
            //check odd output
            .expect.element('@resultOdds').text.to.contain(myValues.odds)
    },
    'Filter Object': browser => {
        var object = 'name'
        var noObject = 'Hack0r'

        rubic
        //input object
            .setValue('@inputFilterObject', object)
            //click Filter Object button
            .click('@filterObjectButton')
            //check if output filter the objecs 
            //Only objects with that property in this case the list may contain name
            .expect.element('@resultObject').text.to.contain(object)
            //input a not object
            .setValue('@inputFilterObject', noObject)
            //click Filter Object button
            .click('@filterObjectButton')
            //check if output filter the  not objecs 
            //expect to has a empty field "[]"
            .expect.element('@resultObject').text.to.contain('Filtered: []')
    },
    'Filter String': browser => {
        var myString = 'Tyler'
        var myNoString = 'Megan'

        rubic
        //input string contain on the list 
            .setValue('@inputFilterString', myString)
            //click Filter String button
            .click('@filterStringButton')
            //check if output the correct string
            .expect.element('@resultString').text.to.equal(myString)
            //input a not object
            .setValue('@inputFilterObject', myNoString)
            //click Filter String button
            .click('@filterStringButton')
            //check if output filter the  no string 
            //expect to has a empty field "[]"
            .expect.element('@resultString').text.to.equal('Filtered: []')
    },

    'Palindrome': browser => {
        rubic
        var myPalindrome = 'ana'
        var myNonPalindrome = 'nada'

        rubic
        //input palindrome 
            .setValue('@inputPalindrome', myPalindrome)
            // click check button
            .click('@plindromeButton')
            //check palindrome output
            .expect.element('@resultPalindrome').text.to.contain('true')
        rubic
        //input numbers
            .setValue('@inputPalindrome', myNonPalindrome)
            // click check button
            .click('@plindromeButton')
            //check no-palindrome output
            .expect.element('@resultPalindrome').text.to.contain('false')
    },
    'Sum': browser => {
        rubic
        var mySume1 = 'ana'
        var mySume2 = 'nada'

        rubic
        //sume 
            .setValue('@inputSum1', mySume1)
            .setValue('@inputSum2', mySume2)
            // click Sum button
            .click('@resultSum')
            //check palindrome output
            .expect.element('@resultSum').text.to.equal('350')
    }
}