/// <reference types="cypress" />



class Homepage_PO {
    navigateTo_Homepage() {
        cy.visit('/');
    }

    // ------------------------------------------------------------------------- //

    assertUrl(path) {
        const baseUrl = Cypress.config('baseUrl')
        cy.url().should('contain', `${baseUrl}${path}`)
    }

    assertTitle(title) {
        cy.title().should('contain', title)
    }

    // ------------------------------------------------------------------------- //

    clickOn_ContactUs_Button() {
        cy.clickAndOpenLink_InSameTab('#contact-us') // custom command
    }

    clickOn_Login_Button() {
        cy.clickAndOpenLink_InSameTab('#login-portal') // custom command
    }
}

export default Homepage_PO;






