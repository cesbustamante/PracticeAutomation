module.exports = {
        beforeEach: browser => {
            browser
                .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
        },
        after: browser => {
            browser
                .end()
        },
        'My Test Here': browser => {
            browser
            // Verify that we are on the home page with no employee selected.
                .waitForElementVisible('#noEmployee')
                // Checking the text to verify we haven't selected an employee
                .expect.element('#noEmployee').text.equal('No Employee Selected')
            browser
            // Clicking on employee 8 (Lou White), and checking to see if the text
            // is equal to 'Lou White'
                .click('li[name="employee8"]')
                .expect.element('#employeeTitle').text.equal('Lou White')
            browser
            // Clearing the current name, and setting the value to 'Jager Dali' as our 
            // new value
                .clearValue('input[name="nameEntry"]')
                .setValue('input[name="nameEntry"]', 'Jager Dali')
                // Clearing the title value, and setting the title to equal to 'Artist'
                .clearValue('input[name="titleEntry"]')
                .setValue('input[name="titleEntry"]', 'Artist')
                // We are checking to see if the values of the Name and Title fields
                // are updating to the new name and title
                .verify.value('input[name="nameEntry"]', 'Jager Dali')
                .verify.value('input[name="titleEntry"]', 'Artist')
                // Clicking the save button
                .click('#saveBtn')
                // Checking to see if the top of the employee card has updated to the new name
                .expect.element('#employeeTitle').text.equal('Jager Dali')
        }
    }
    //.click('li[name="employee1"]')
    // .pause(1000)
    // .click('input[name="nameEntry"]')
    // .clearValue('input[name="nameEntry"]')
    // .setValue('input[name="nameEntry"]', "Carlos Lozano")
    // .pause(1000)
    // .click('input[name="phoneEntry"]')
    // .clearValue('input[name="phoneEntry"]')
    // .setValue('input[name="phoneEntry"]', "3053030247")
    // .click('.neutralButton')