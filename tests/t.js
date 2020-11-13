var myTypeOfLoan = [{
    //What type of loan will you be needing? Home Parchuse 
    typeOfloan: 'option[value = "Home Purchase"]',
    //What type of property are you purchasing? Single Family Home
    typeOfProperty: 'option[value="Single Family Home"]',
    //In what city will the property be located?
    propertyLocate: 'Madison',
    // What property are you looking to use the loan on? Primary Home
    loanUse: 'button[value="Primary Home"]',
    //Have you already found your new home ? yes
    foundHome: 'button[name="yesButton"]',
    // Are you currently working with a real estate agent? yes
    WorkingWithAgen: 'button[name="yesButton"]',
    //What is the estimated purchase price?
    estimatedPrice: '250000',
    //How much are you putting down as a down payment?
    downPayment: '',
    //Estimate your credit score Excellent
    creditScore: 'button[value="excellent"]',
    //Have you had a bankruptcy or foreclosure in the past seven years? no
    bankruptcy: 'button[value="Has never been in bankruptcy"]',
    //What is your address?
    street: '',
    streetOptinal: '',
    cityStateZip: '',
    //What is your name ? first, last, email
    firstName: '',
    lastName: '',
    email: '',

}]
var myLoan = (browser, data) => {
    browser
        .click('button[name="nextButton"]')
        .waitForElementVisible('p[name="promptText1"]')
        //what type of loan 3 options, Home Purchase, Refinance, Home Equity Loan/Line
        .click(data.typeOfloan)
        //what type of property 5 options Single Family Home, Town Home, Condo, 
        //Multi Family Dwelling, Mobile Home.
        .click(data.typeOfProperty)
        .click('button[name="nextButton"]')
        //
        //In what city will the property be located?
        .waitForElementVisible('p[name="promptText"]')
        .setValue('input[type="text"]', data.propertyLocate)
        .click('button[name="nextButton"]')
        //
        //type of property... use for loan 3 option (primary,rental,secundary)
        .click(data.loanUse)
        //
        .waitForElementVisible('p[name="promptText"]')
        //Have you already found your new home? yes or no
        .click(data.foundHome)
        .waitForElementVisible('p[name="promptText"]')
        //Are you currently working with a real estate agent? yes or no
        .click(data.WorkingWithAgen)
        //
        .waitForElementVisible('p[name="promptText1"]')
        //What is the estimated purchase price?
        .setValue('input[name="price"]', data.estimatedPrice)
        //How much are you putting down as a down payment?
        .setValue('input[name="down"]', data.downPayment)
        .click('button[name="nextButton"]')
        //
        .waitForElementVisible('p[name="promptText"]')
        //Estimate your credit score 4 option: Excellent, Good, Fair, Poor
        .click(data.creditScore)
        //
        .waitForElementVisible('p[name="promptText"]')
        //Have you had a bankruptcy or foreclosure in the past seven years?
        //4 options No, Bankruptcy, Foreclosure, Both
        .click(data.bankruptcy)
        //
        .waitForElementVisible('p[name="promptText"]')
        //what is ypur addres, street,optinal,city, state
        .setValue('#addressOne', data.street)
        .setValue('#addressTwo', data.streetOptinal)
        .setValue('#addressThree', data.email)
        .click('button[name="nextButton"]')
        //
        //What is your name? first last and email
        .waitForElementVisible('p[name="promptText"]')
        .setValue('#first', data.firstName)
        .setValue('#last', data.lastName)
        .setValue('#email', data.email)
        .click('button[name="nextButton"]')
        //
        //Here is an overview of your form:
        .waitForElementVisible('.vert-align')
        .click('restartButton')
}

module.exports = {
    beforeEach: browser => {
        browser.url(' http://localhost:3001/')

    },
    after: browser => {
        browser
            .end()
    },

}



var typeOfLoan = [{
    homeParchuse: 'option[value="Home Purchase"]',
    refinance: 'option[value="Refinance"]',
    homeEquity: 'option[value="Home Equity"]'
}]
var typeOfProperty = [{
    singleHome: 'option[value="Single Family Home"]',
    townHome: 'option[value="Town Home"]',
    condo: 'option[value="Condo"]',
    multyFamily: 'option[value="Multi Family Dwelling"]',
    mobileHome: 'option[value="Mobile Home"]'
}]
var typeLoanUse = [{
    primaryHome: 'button[value="Primary Home"]',
    rentalProperty: 'button[value="Rental Property"]',
    secundaryHome: 'button[value="Secondary Home"]'
}]
var allreadyFoundHome = [{
    yes: 'button[name="yesButton"]',
    no: 'button[name="noButton"]',

}]
var allreadyWorkingWithAgen = [{
    yes: 'button[name="yesButton"]',
    no: 'button[name="noButton"]',

}]

var typeCreditScore = [{
    excellent: 'button[value="excellent"]',
    good: 'button[value="good"]',
    fair: 'button[value="fair"]',
    poor: 'button[value="poor"]'
}]
var typeBankruptcy = [{
    no: 'button[value="Has never been in bankruptcy"]',
    bankruptcy: 'button[value="Has had bankruptcy before"]',
    foreclosure: 'button[Has had a foreclosure before"]',
    both: 'button[value="Has had both a foreclosure and a bankruptcy"]'
}]