/// <reference types="cypress" />
import Homepage_PO from "./Homepage_PO"



class Contact_Us_PO extends Homepage_PO {
    validateUrl(path) {
        super.assertUrl(path)
    }

    validateTitle(title) {
        super.assertTitle(title)
    }

    // ------------------------------------------------------------------------- // 

    assertVisibility_FirstName() {
        cy.assertElementVisibleByTagName('', 'name="first_name"')
    }

    assertVisibility_LastName() {
        cy.assertElementVisibleByTagName('', 'name="last_name"')
    }

    assertVisibility_Email() {
        cy.assertElementVisibleByTagName('', 'name="email"')
    }

    assertVisibility_Comment() {
        cy.assertElementVisibleByTagName('textarea', 'name="message"')
    }

    assertVisibility_ResetButton() {
        cy.assertElementVisibleByTagName('', 'type="reset"')
    }

    assertVisibility_SubmitButton() {
        cy.assertElementVisibleByTagName('', 'type="submit"')
    }

    // ------------------------------------------------------------------------- //

    type_FirstName(firstName) {
        cy.getByTagName('', 'name="first_name"').type(firstName)
    }

    type_LastName(lastName) {
        cy.getByTagName('', 'name="last_name"').type(lastName)
    }

    type_EmailAddress(email) {
        cy.getByTagName('', 'name="email"').type(email)
    }

    type_Comment(comment) {
        cy.getByTagName('textarea', 'name="message"').type(comment)
    }

    // ------------------------------------------------------------------------- //

    clickOn_Reset_Button() {
        cy.getByTagName('', 'type="reset"').click()
    }

    clickOn_Submit_Button() {
        cy.getByTagName('', 'type="submit"').click()
    }

    // ------------------------------------------------------------------------- //

    validate_Reset_Button() {
        cy.get('[name="first_name"], [name="last_name"], [name="email"], textarea[name="message"]').each((input) => {
            cy.wrap(input).invoke('val').should('equal', '')
        })
    }

    validate_Submission_Header(message) {
        cy.xpath('//h1 | //body').contains(message)
        cy.xpath('//h1 | //body').invoke('text').should('include', message) // another way of asserting

    }
}

export default Contact_Us_PO;
