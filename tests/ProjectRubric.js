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
        rubuc
        var myObject = {
            object: 'name',
            noObject2: 'Hack0r'
        }
        rubic
        //input object
            .setValue('@inputFilterObject', 'name')
            //click Filter Object button
            .click('@filterObjectButton')
            //check if output filter the objecs 
            //Only objects with that property in this case the list may contain name
            .expect.element('@resultObject').text.to.contain('name')
            //input a not object
            .setValue('@inputFilterObject', 'Hack0r')
            //click Filter Object button
            .click('@filterObjectButton')
            //check if output filter the  not objecs 
            //expect to has a empty field "[]"
            .expect.element('@resultObject').text.to.contain('Filtered: []')
    },
    'Filter String': browser => {
        rubuc
        var myString = {
            string: 'Tyler',
            noString: 'Megan',
        }
        rubic
        //input string contain on the list 
            .setValue('@inputFilterString', myString.string)
            //click Filter String button
            .click('@filterStringButton')
            //check if output the correct string
            .expect.element('@resultString').text.to.equal(myString.string)
            //input a not object
            .setValue('@inputFilterObject', 'Hack0r')
            //click Filter String button
            .click('@filterStringButton')
            //check if output filter the  no string 
            //expect to has a empty field "[]"
            .expect.element('@resultString').text.to.equal('Filtered: []')
    },

    'Palindrome': browser => {
        rubuc
        var myPalindrome = {
            palindrome: 'radar',
            nopalindrome: 'nada'
        }
        rubic
        //input palindrome 
            .setValue('@inputPalindrome', myPalindrome.palindrome)
            // click check button
            .click('@plindromeButton')
            //check palindrome output
            .expect.element('@resultPalindrome').text.to.contain('true')
        rubic
        //input numbers
            .setValue('@inputPalindrome', myPalindrome.nopalindrome)
            // click check button
            .click('@plindromeButton')
            //check no-palindrome output
            .expect.element('@resultPalindrome').text.to.contain('false')
    },
    'Sum': browser => {
        rubuc
        var mySume = {
            sume1: '150',
            sume2: '200'
        }
        rubic
        //sume 
            .setValue('@inputSum1', mySume.sume1)
            .setValue('@inputSum2', mySume.sume2)
            // click Sum button
            .click('@resultSum')
            //check palindrome output
            .expect.element('@resultSum').text.to.equal('350')
    }
}