var myData = [{
        typeOfLoan: 'Home Purchase',
        typeOfProperty: 'Condo',
        propertyLocate: 'Boston',
        estimatedPrice: '700,000',
        downPayment: '100,000',
        streetName: '1145 Street',
        streetOptinal: 'apt1',
        cityZip: 'Madison,53919',
        firstName: 'Alvaro',
        lastName: 'Benito',
        email: 'alrvarobenito@hotmail.com',
    },
    {
        typeOfLoan: 'Home Purchase',
        typeOfProperty: 'Single Family Home',
        propertyLocate: 'Miami',
        estimatedPrice: '400,000',
        downPayment: '40,000',
        streetName: '1145 Street',
        streetOptinal: 'apt1',
        cityZip: 'Madison,53919',
        firstName: 'Alvaro',
        lastName: 'Benito',
        email: 'alrvarobenito@hotmail.com',

    },

]
var loan = {}

module.exports = {
    beforeEach: browser => {
        loan = browser.page.loanwizardPage()
        loan
            .navigate()
    },
    after: browser => {
        loan
            .end()
    },

    'typeOfLoan1': browser => {

        loan.typeOfloanAndProperty(myData)


    },
}