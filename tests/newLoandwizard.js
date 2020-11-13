var myData = [{
        typeOfLoan: 'Home Purchase',
        typeOfProperty: 'Condo',
        propertyLocate: 'Boston',
        estimatedPrice: '700,000',
        downPayment: '100.000',
        streetName: '1145 Street',
        zip: '53919',
        firstName: 'Alvaro',
        lastName: 'Benito',
        email: 'alrvarobenito@hotmail.com',
    },
    {
        typeOfLoan: 'Home Purchase',
        typeOfProperty: 'Single Family Home',
        propertyLocate: 'Miami',
        estimatedPrice: '400,000',
        downPayment: '40.000',
        streetName: '1145 Street',
        zip: '53919',
        firstName: 'Alvaro',
        lastName: 'Benito',
        email: 'alrvarobenito@hotmail.com',

    }
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
    }
}


},

'typeOfLoan1': browser => {
        loan.typeOfloanAndProperty(typeOfLoan[1], typeOfProperty[1],
            propertyLocate[1], typeLoanUse[1], allreadyFoundHome[1],
            allreadyWorkingWithAgen[1], estimatedPrice[1], downPayment[1],
            typeCreditScore[1], typeBankruptcy[1])
    },
    'typeOfLoan2': browser => {
        loan.typeOfloanAndProperty(typeOfLoan[2], typeOfProperty[3],
            propertyLocate[0], typeLoanUse[2], allreadyFoundHome[0],
            allreadyWorkingWithAgen[0], estimatedPrice[1], downPayment[0],
            typeCreditScore[3], typeBankruptcy[2])
    },

}
var typeOfLoan = [{
    homeParchuse: '@homeParchuse',
    refinance: '@refinance',
    homeEquity: '@homeEquity'
}]
var typeOfProperty = [{
    singleHome: '@singleHome',
    townHome: '@townHome',
    condo: '@condo',
    multyFamily: '@multyFamily',
    mobileHome: '@mobileHome'
}]
var propertyLocate = [{
    cityName1: 'Madison',
    cityName2: 'Provo'
}]
var typeLoanUse = [{
    primaryHome: '@primaryHome',
    rentalProperty: '@rentalProperty',
    secundaryHome: '@secundaryHome'
}]
var allreadyFoundHome = [{
    yesFoundHome: '@yesFoundHome',
    noFoundHome: '@noFoundHome',

}]
var allreadyWorkingWithAgen = [{
    yesWorkinAgen: '@yesWorkinAgen',
    noWorkingAgen: '@noWorkingAgen',

}]
var downPayment = [{
    downPayment1: '10000',
    downPayment2: '5000'

}]
var estimatedPrice = [{
    pricre1: '250000',
    price2: '300000'
}]
var typeCreditScore = [{
    excellent: '@excellent',
    good: '@good',
    fair: '@fair',
    poor: '@poor'
}]
var typeBankruptcy = [{
    nobankruptcy: '@nobankruptcy',
    bankruptcy: '@bankruptcy',
    foreclosure: '@foreclosure',
    both: '@both'
}]