module.exports = {
    'my test': browser => {
        browser
            .url('https: //devmountain-qa.github.io/employee-manager/1.0_Version/index.html')
            .waitForElementVisible('#noEmployee')
            .getText('employeeID', result => {
                let idNumber = Number(result.value.slice(3))
                browser
                    .verify.ok(idNumber > 0, `The ID (${idNumber}) is a positive number.`)
                    .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)
            })

    }
}