/// <reference types="cypress" />
import Homepage_PO from "./Homepage_PO";



class Login_PO extends Homepage_PO {
    validateUrl(path) {
        super.assertUrl(path)
    }

    validateTitle(title) {
        super.assertTitle(title)
    }

    // ------------------------------------------------------------------------- //

    assertVisibility_Username() {
        cy.assertElementVisibleById('text')
    }

    assertVisibility_Password() {
        cy.assertElementVisibleById('password')
    }

    assertVisibility_LoginButotn() {
        cy.assertElementVisibleById('login-button')
    }

    // ------------------------------------------------------------------------- //

    type_Username(username) {
        cy.getById('text').type(username)
    }

    type_Password(password) {
        cy.getById('password').type(password)
    }

    // ------------------------------------------------------------------------- //

    clickOn_Login_Button() {
        cy.getById('login-button').click()
    }
}

export default Login_PO;




