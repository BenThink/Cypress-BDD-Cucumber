/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";



let stub; // 1st way of handling alerts
let alertMessage; // 2nd way of handling alerts

const loginPage = new Login_PO();

// ------------------------------------------------------------------------- //

Then('I validate login page url', function () {
    loginPage.validateUrl(this.data.login_Path)
})

Then('I validate login page title', function () {
    loginPage.assertTitle(this.data.login_Title)
})

// ------------------------------------------------------------------------- //

When('I type a username {word}', (username) => {
    loginPage.assertVisibility_Username()

    loginPage.type_Username(username)
})

When('I type a password {word}', (password) => {
    loginPage.assertVisibility_Password()

    loginPage.type_Password(password)
})

// ------------------------------------------------------------------------- //

When('I click on the login button', () => {
    loginPage.assertVisibility_LoginButotn()

    stub = cy.stub() // 1st way of handling alerts
    cy.on('window:alert', stub) // 1st way of handling alerts

    // 2nd way of handling alerts
    cy.on('window:alert', (message) => {
        alertMessage = message
    })

    loginPage.clickOn_Login_Button()
})

// ------------------------------------------------------------------------- //

Then('I should be presented with an alert box which contains text {string}', (expectedAlertText) => {
    // 1st way of handling alerts
    expect(stub).to.have.been.calledWith(expectedAlertText)

    // 2nd way of handling alerts
    expect(alertMessage).to.contain(expectedAlertText)
})