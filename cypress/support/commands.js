// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ----------------------------------------------------------------------- //

Cypress.Commands.add('clickAndOpenLink_InSameTab', (selector) => {
    cy.get(selector).invoke('removeAttr', 'target').click()
})

// ----------------------------------------------------------------------- //

Cypress.Commands.add('getByClass', (selector) => {
    return cy.get(`.${selector}`)
})

Cypress.Commands.add('getById', (selector) => {
    return cy.get(`#${selector}`)
})

Cypress.Commands.add('getByTagName', (tagName, attribute) => {
    return cy.get(`${tagName}[${attribute}]`)
})

// ----------------------------------------------------------------------- //

Cypress.Commands.add('assertElementVisibleById', (selector) => {
    cy.getById(selector).should('be.visible')
})

Cypress.Commands.add('assertElementVisibleByClass', (selector) => {
    cy.getByClass(selector).should('be.visible')
})

Cypress.Commands.add('assertElementVisibleByTagName', (tagName, attribute) => {
    cy.getByTagName(tagName, attribute).should('be.visible')
})

