module.exports = {
    beforeEach: browser => {
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html')
    },
    after: browser => {
        browser
            .end()
    },
    'Our test using an object': browser => {
        var FormFiedl = {
            name: 'Tale Lee',
            title: 'Boss',
            oldName: 'Bernice Ortiz',
            oldTitle: 'CEO'
        }
        browser
            .click('li[name="employee1"]')
            .expect.element('#employeeTitle').text.equal(FormFiedl.oldName)
        browser
            .verify.value('input[name="titleEntry"]', FormFiedl.oldTitle)
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', FormFiedl.name)
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', FormFiedl.title)
            .click('#saveBtn')
            .verify.value('input[name="nameEntry"]', FormFiedl.name)
            .verify.value('input[name="titleEntry"]', FormFiedl.title)
            .expect.element('#employeeTitle').text.equal(FormFiedl.name)
    }
}