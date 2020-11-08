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
            evens1: '-66',
            evens2: '120000',
            odds: '123',
            odds1: '-123',
            odds2: '-1524363635',
        }
        rubic
        //input even numbers
            .setValue('@inputEvens', myValues.evens)
            // click slit button
            .click('@splitButton')
            //check even output
            .expect.element('@resultEven').text.to.contain(myValues.evens)
        rubic
        //clear previous value
            .clearValue('@inputEvens')
            //input evens numbers
            .setValue('@inputEvens', myValues.evens1)
            // click slit button
            .click('@splitButton')
            //check even output
            .expect.element('@resultEven').text.to.contain(myValues.evens1)
        rubic
        //clear previous value
            .clearValue('@inputEvens')
            //input even numbers
            .setValue('@inputEvens', myValues.evens2)
            // click slit button
            .click('@splitButton')
            //check even output
            .expect.element('@resultEven').text.to.contain(myValues.evens2)
        rubic
        //clear previous value
            .clearValue('@inputEvens')
            //input odd numbers
            .setValue('@inputEvens', myValues.odds)
            // click slit button
            .click('@splitButton')
            //check odd output
            .expect.element('@resultOdds').text.to.contain(myValues.odds)
        rubic
        //clear previous value
            .clearValue('@inputEvens')
            //input odd numbers
            .setValue('@inputEvens', myValues.odds1)
            // click slit button
            .click('@splitButton')
            //check odd output
            .expect.element('@resultOdds').text.to.contain(myValues.odds1)
        rubic
        //clear previous value
            .clearValue('@inputEvens')
            //input odd numbers
            .setValue('@inputEvens', myValues.odds2)
            // click slit button
            .click('@splitButton')
            //check odd output
            .expect.element('@resultOdds').text.to.contain(myValues.odds2)
    },
    'Filter Object': browser => {
        rubic
        var myObject = {
            Object1: 'name',
            Object2: 'title',
            Object3: 'age',
            Object4: 'hairColor',

        }
        var myNoObjec = 'Phone'
        var mySpecialCharacters = '!@#$$%%^&&*())'
        rubic
        //input object
            .setValue('@inputFilterObject', myObject.Object1)
            //click Filter Object button
            .click('@filterObjectButton')
            //check if output filter the objecs 
            //Only objects with that property in this case the list may contain name
            .expect.element('@resultObject').text.to.contain(myObject.Object1)
        rubic
        //clear previous value
            .clearValue('@inputFilterObject')
            //input object
            .setValue('@inputFilterObject', myObject.Object2)
            //click Filter Object button
            .click('@filterObjectButton')
            //check if output filter the objecs 
            //Only objects with that property in this case the list may contain name
            .expect.element('@resultObject').text.to.contain(myObject.Object2)
        rubic
        //clear previous value
            .clearValue('@inputFilterObject')
            //input object
            .setValue('@inputFilterObject', myObject.Object3)
            //click Filter Object button
            .click('@filterObjectButton')
            //check if output filter the objecs 
            //Only objects with that property in this case the list may contain name
            .expect.element('@resultObject').text.to.contain(myObject.Object3)
        rubic
        //clear previous value
            .clearValue('@inputFilterObject')
            //input object
            .setValue('@inputFilterObject', myObject.Object4)
            //click Filter Object button
            .click('@filterObjectButton')
            //check if output filter the objecs 
            //Only objects with that property in this case the list may contain name
            .expect.element('@resultObject').text.to.contain(myObject.Object4)
        rubic
        //clear previous value
            .clearValue('@inputFilterObject')
            //input a not object
            .setValue('@inputFilterObject', myNoObjec)
            //click Filter Object button
            .click('@filterObjectButton', myNoObjec)
            //check if output filter the  not objecs 
            //expect to has a empty field "[]"
            .expect.element('@resultObject').text.to.contain('Filtered: []')
        rubic
        //clear previous value
            .clearValue('@inputFilterObject')
            //input a special characters 
            .setValue('@inputFilterObject', mySpecialCharacters)
            //click Filter Object button
            .click('@filterObjectButton', myNoObjec)
            //check if output filter the  not objecs 
            //expect to has a empty field "[]"
            .expect.element('@resultObject').text.to.contain('Filtered: []')
    },
    'Filter String': browser => {
        //"James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"
        var myString = {
            string1: 'James',
            string2: 'Jessica',
            string3: 'Melody',
            string4: 'Tyler',
            string5: 'Blake',
            string6: 'Jennifer',
            string7: 'Mark',
            string8: 'Maddy',

        }

        var myNoString = 'megan'
        var mySpecialCharacters = '!@#$$%%^&&*())'

        rubic
        // input string contain on the list
            .setValue('@inputFilterString', myString.string1)
            //click Filter String button
            .click('@filterStringButton')
            //check if output the correct string
            .expect.element('@resultString').text.to.contain(myString.string1)
        rubic
        //clear previous value
            .clearValue('#nameFilterInput')
            .pause(5000)
            // input string contain on the list
            .setValue('@inputFilterString', myString.string2)
            //click Filter String button
            .click('@filterStringButton')
            //check if output the correct string
            .expect.element('@resultString').text.to.contain(myString.string2)
        rubic
        //clear previous value
            .clearValue('#nameFilterInput')
            .pause(5000)
            // input string contain on the list
            .setValue('@inputFilterString', myString.string3)
            //click Filter String button
            .click('@filterStringButton')
            //check if output the correct string
            .expect.element('@resultString').text.to.contain(myString.string3)
        rubic
        //clear previous value
            .clearValue('#nameFilterInput')
            .pause(5000)
            // input string contain on the list
            .setValue('@inputFilterString', myString.string4)
            //click Filter String button
            .click('@filterStringButton')
            //check if output the correct string
            .expect.element('@resultString').text.to.contain(myString.string4)
        rubic
        //clear previous value
            .clearValue('#nameFilterInput')
            .pause(5000)
            // input string contain on the list
            .setValue('@inputFilterString', myString.string5)
            //click Filter String button
            .click('@filterStringButton')
            //check if output the correct string
            .expect.element('@resultString').text.to.contain(myString.string5)
        rubic
        //clear previous value
            .clearValue('#nameFilterInput')
            .pause(5000)
            // input string contain on the list
            .setValue('@inputFilterString', myString.string6)
            //click Filter String button
            .click('@filterStringButton')
            //check if output the correct string
            .expect.element('@resultString').text.to.contain(myString.string6)
        rubic
        //clear previous value
            .clearValue('#nameFilterInput')
            .pause(5000)
            // input string contain on the list
            .setValue('@inputFilterString', myString.string7)
            //click Filter String button
            .click('@filterStringButton')
            //check if output the correct string
            .expect.element('@resultString').text.to.contain(myString.string7)
        rubic
        //clear previous value
            .clearValue('#nameFilterInput')
            .pause(5000)
            // input string contain on the list
            .setValue('@inputFilterString', myString.string8)
            //click Filter String button
            .click('@filterStringButton')
            //check if output the correct string
            .expect.element('@resultString').text.to.contain(myString.string8)
        rubic

        //clear previous value
            .clearValue('#nameFilterInput')
            .pause(5000)
            //input a string that is not contain in the list 
            .setValue('@inputFilterString', myNoString)
            //click Filter String button
            .click('@filterStringButton')
            .pause(5000)
            // //check if output filter shows the not string 
            // //expect to has a empty field "[]"
            .expect.element('@resultString').text.to.contain('Filtered Names: []')
        rubic
        //clear previous value
            .clearValue('#nameFilterInput')
            //input special characters on the string field 
            .pause(5000)
            .setValue('@inputFilterString', mySpecialCharacters)
            //click Filter String button
            .click('@filterStringButton')
            .pause(5000)
            // //check if output filter is empty or shows an error message 
            // //expect to has a empty field "[]"
            .expect.element('@resultString').text.to.contain('Filtered Names: []')
    },

    'Palindrome': browser => {
        var myPalindrome = 'radar'
        var myNoPalindrome = 'nada'
        var myPalindromeNumber = '24442'
        var myNoPalindromeNumber = '25442'

        rubic
        // input palindrome
            .setValue('@inputPalindrome', myPalindrome)
            // click check button
            .click('@plindromeButton')
            //check palindrome output
            .expect.element('@resultPalindrome').text.to.contain('true')
        rubic
        //clear previous value
            .clearValue('@inputPalindrome')
            //input no-palindrome
            .setValue('@inputPalindrome', myNoPalindrome)
            // click check button
            .click('@plindromeButton')
            //check no-palindrome output
            .expect.element('@resultPalindrome').text.to.contain('false')

        rubic
        //clear previous value
            .clearValue('@inputPalindrome')
            // input palindrome number
            .setValue('@inputPalindrome', myPalindromeNumber)
            // click check button
            .click('@plindromeButton')
            //check palindrome output
            .expect.element('@resultPalindrome').text.to.contain('true')
        rubic
        //clear previous value
            .clearValue('@inputPalindrome')
            //input no palindrome number
            .setValue('@inputPalindrome', myNoPalindromeNumber)
            // click check button
            .click('@plindromeButton')
            //check no-palindrome output
            .expect.element('@resultPalindrome').text.to.contain('false')
    },
    'Sum': browser => {
        rubic
        var mySume1 = '150'
        var mySume2 = '200'

        rubic
        //sume 
            .setValue('@inputSum1', mySume1)
            .setValue('@inputSum2', mySume2)
            // click Sum button
            .click('@addButton')
            //check palindrome output
            .expect.element('@resultSum').text.to.contain("350")

    }
}