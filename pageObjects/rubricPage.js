module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        //submit buttons
        splitButton: 'button[name = "evenOddButton"]',
        filterObjectButton: 'button[name = "objectFilterButton"]',
        filterStringButton: '#nameFilterButton',
        plindromeButton: 'button[name="palindromeButton"]',
        addButton: 'button[name="sumButton"]',
        //inputs fields
        inputEvens: 'input[name="evenOddInput"]',
        inputFilterObject: 'input[name="objectFilterInput"]',
        inputFilterString: '#nameFilterInput',
        inputPalindrome: 'input[name="palindromeInput"]',
        inputSum1: 'input[name = "sumInput1"]',
        inputSum2: 'input[name = "sumInput2"]',
        //results fields
        resultEven: '[name="evenResults"]',
        resultOdds: '[name="oddResults"]',
        resultObject: '[name="objectFilterResults"]',
        resultString: '[name="nameFilterResults"]',
        resultPalindrome: '[name="palindromeResults"]',
        resultSum: '[name="sumResults"]',

    }
}