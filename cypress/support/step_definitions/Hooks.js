import { Before } from "@badeball/cypress-cucumber-preprocessor";


Before({ tags: '@url_title_login or @url_title_contactUs' }, function () {
    cy.fixture('data.json').then((data) => {
        this.data = data;
    })
})