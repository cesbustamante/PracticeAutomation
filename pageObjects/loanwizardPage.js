var LoanwizardCommands = {
    typeOfloanAndProperty: function(data) {
        this
        //get start button
            .waitForElementVisible('#root', 1000)
            .click('@nextClick')
            //what type of loan 3 options, Home Purchase, Refinance, Home Equity Loan/Line
            .click('@homeParchuse')
            //what type of property 5 options Single Family Home, Town Home, Condo, 
            //Multi Family Dwelling, Mobile Home.
            .click('#propertyTypes')
            .click('@nextClick')
            //
            //In what city will the property be located?
            .waitForElementVisible('p[name="promptText"]', 1000)
            .setValue('input[type="text"]', data.propertyLocate)
            .click('@nextClick')
            //
            //type of property... use for loan 3 option (primary,rental,secundary)
            .click('@primaryHome')
            //
            .waitForElementVisible('p[name="promptText"]')
            //Have you already found your new home? yes or no
            .click('@yesFoundHome')
            .waitForElementVisible('p[name="promptText"]')
            //Are you currently working with a real estate agent? yes or no
            .click('@noWorkingAgen')
            //
            .waitForElementVisible('p[name="promptText1"]')
            //What is the estimated purchase price?
            .setValue('input[name="price"]', data.estimatedPrice)
            //How much are you putting down as a down payment?
            .setValue('input[name="down"]', data.downPayment)
            .click('@nextClick')
            //
            .waitForElementVisible('p[name="promptText"]')
            //Estimate your credit score 4 option: Excellent, Good, Fair, Poor
            .click('@excellent')
            //
            .waitForElementVisible('p[name="promptText"]')
            //Have you had a bankruptcy or foreclosure in the past seven years?
            //4 options No, Bankruptcy, Foreclosure, Both
            .click('@nobankruptcy')
            //
            .waitForElementVisible('p[name="promptText"]')
            //what is ypur addres, street,optinal,city, state
            .setValue('#addressOne', data.streetName)
            .setValue('#addressTwo', data.streetOptinal)
            .setValue('#addressThree', data.cityZip)
            .click('@nextClick')
            .pause(5000)
            //
            //What is your name? first last and email
            .waitForElementVisible('p[name="promptText"]')
            .setValue('#first', data.firstName)
            .setValue('#last', data.lastName)
            .setValue('#email', data.email)
            .click('@nextClick')
            //
            //Here is an overview of your form:
            .waitForElementVisible('.vert-align')
            .click('@startAgain')

        return this
    }
}

module.exports = {
    url: 'http://localhost:3001/',
    commands: [LoanwizardCommands],
    elements: {
        //clicks
        nextClick: 'button[name="nextButton"]',
        startAgain: 'button[name="restartButton"]',
        //type of loan
        homeParchuse: 'option[value="Home Purchase"]',
        refinance: 'option[value="Refinance"]',
        homeEquity: 'option[value="Home Equity"]',
        //What type of property are you purchasing?
        singleHome: 'option[value="Single Family Home"]',
        townHome: 'option[value="Town Home"]',
        condo: 'option[value="Condo"]',
        multyFamily: 'option[value="Multi Family Dwelling"]',
        mobileHome: 'option[value="Mobile Home"]',
        //What property are you looking to use the loan on?
        primaryHome: 'button[value="Primary Home"]',
        rentalProperty: 'button[value="Rental Property"]',
        secundaryHome: 'button[value="Secondary Home"]',
        // Have you already found your new home ? 
        yesFoundHome: 'button[name="yesButton"]',
        noFoundHome: 'button[name="noButton"]',
        // Are you currently working with a real estate agent? 
        yesWorkinAgen: 'button[name="yesButton"]',
        noWorkingAgen: 'button[name="noButton"]',
        // //Estimate your credit score?
        excellent: 'button[value="excellent"]',
        good: 'button[value="good"]',
        fair: 'button[value="fair"]',
        poor: 'button[value="poor"]',
        //  //Have you had a bankruptcy or foreclosure in the past seven years?
        nobankruptcy: 'button[value="Has never been in bankruptcy"]',
        bankruptcy: 'button[value="Has had bankruptcy before"]',
        foreclosure: 'button[value="Has had a foreclosure before"]',
        both: 'button[value="Has had both a foreclosure and a bankruptcy"]'
    }
}