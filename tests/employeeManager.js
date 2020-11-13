let manager = {}
var editTest = require('.//testAssets/editTest')

module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeeManagerPage()
        manager.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.2')
    },
    after: browser => {
        browser.end()
    },
    'It can add an employee': browser => {
        manager
            .click('@addButton')
            .clickEmployee('New Employee')
            .expect.element('@cardTitle').text.to.equal('New Employee')
    },
    'It can edit a new employee': browser => {
        manager
            .click('@addButton')
        editTest(manager, 'New Employee', { name: 'Hank Hill', phone: '0000000000', title: 'Grill Master' }, 'Dolly Berry')
    },
    'It can edit an existing employee': browser => {
        editTest(manager, 'Dollie Berry', { name: 'Dollie Berry', phone: '1234567811', title: 'Master' }, 'Bernice Ortiz')
    }
}