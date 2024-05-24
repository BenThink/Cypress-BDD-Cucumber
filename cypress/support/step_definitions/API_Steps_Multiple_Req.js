import { When } from "@badeball/cypress-cucumber-preprocessor";


When('I make a {string} request to {string} with body', (method, endpoint, dataTable) => {
    const body = dataTable.rowsHash()

    const options = {
        method: method,
        url: Cypress.env('url') + endpoint,
        body: body,
    }

    if (body.auth) {
        options.auth = {
            bearer: body.auth.split(' ')[1],
        }
        delete body.auth
    }

    cy.request(options).as('response')
})


When('I make a {string} request to {string} with failOnStatusCode {string} and body', (method, endpoint, failOnStatusCode, dataTable) => {
    const body = dataTable.rawTable[0][1]

    cy.request({
        method: method,
        url: Cypress.env('url') + endpoint,
        body: body,
        failOnStatusCode: failOnStatusCode === 'false' ? false : true
    }).as('response')
})
