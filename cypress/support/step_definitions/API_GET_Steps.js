import { When, Then } from "@badeball/cypress-cucumber-preprocessor";



When('I make a {string} request to {string}', (method, endpoint) => {
    cy.request({
        method: method,
        url: Cypress.env('url') + endpoint
    }).as('response')
})

Then('I should see the response logs', () => {
    cy.get('@response').then((resp) => {
        cy.log(resp)
        cy.log(resp.headers)
        cy.log(resp.body)
        cy.log(JSON.stringify(resp.body))
    })
})

Then('the response header {string} should include {string}', (header, value) => {
    cy.get('@response').its('headers').its(header).should('include', value)
})

Then('the response header {string} should not exist', (header) => {
    cy.get('@response').its('headers').its(header).should('not.exist')
})

When('I make a {string} request to {string} with failOnStatusCode {string}', (method, endpoint, failOnStatusCode) => {
    cy.request({
        method: method,
        url: Cypress.env('url') + endpoint,
        failOnStatusCode: failOnStatusCode === 'false' ? false : true
    }).as('response')
})

Then('the response status should be {int}', (statusCode) => {
    cy.get('@response').its('status').should('equal', statusCode)
})

Then('the response body should have {string} equal to {int}', (path, expectedValue,) => {
    cy.assertResponseBodyValue(path, expectedValue, '.to.equal') // custom command
})

Then('the response body should contain {string} with {string}', (path, expectedValue) => {
    cy.assertResponseBodyValue(path, expectedValue, '.to.contain') // custom command
})

Then('the response body should not contain {string} with {string}', (path, expectedValue) => {
    cy.assertResponseBodyValue(path, expectedValue, '.not.to.contain') // custom command
})

Then('the response body should have {string} equal to {string}', (path, expectedValue,) => {
    cy.assertResponseBodyValue(path, expectedValue, '.to.equal') // custom command
})

