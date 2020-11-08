const { verify } = require("crypto")

module.exports = {
    beforeEach: browser => {
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser
            .end()
    },
    'Test Cases': browser => {
        browser
        //Verify we are on the home page with no employee selected.
            .waitForElementVisible('#noEmployee')
            .expect.element('#noEmployee').text.equal('No Employee Selected')
        browser
        //click on employee (Teresa Osborne) and verify the ID number is a 
        // positive 4
            .click('#app > div.main-container > div:nth-child(1) > ul > li:nth-child(4)')
            .expect.element('#employeeID').text.equal('ID: 4')
        browser
        // Click on employee #4 (Teresa Osborne)
            .click('#app > div.main-container > div:nth-child(1) > ul > li:nth-child(4)')
            //Clear the current name, and  setting a new value '"Juan lopez"
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Juan Lopez')
            //Clear the Phone number and setting a new number "3053030247"
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '3053030247')
            //veryfy the new inputs are updating ti the new name title 
            .verify.value('input[name="nameEntry"]', 'Juan Lopez')
            .verify.value('input[name="phoneEntry"]', '3053030247')
            //Click on the save button
            .click('#saveBtn')
            //check if the top of the employee card has updated to new name 
            .expect.element('#employeeTitle').text.equal('Juan Lopez')
        browser
        // Click on employee #5 ()
            .click('#app > div.main-container > div:nth-child(1) > ul > li:nth-child(5)')
            //Clear the curent name, and setting up a new value "Clara Tocalas"
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Clara Tocalas')
            // Click on cancel to restart the previus value 
            .click('#app > div.main-container > div:nth-child(2) > div.infoCard > div > button.neutralButton')
            //check if the top of the employee card did not save the new value 
            .expect.element('#employeeTitle').text.not.equal('Clara Tocalas')

    }
}