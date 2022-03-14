/// <reference types = "Cypress"/>


export class mpPage{
    order(){
        cy.get('[class="sidebar-item__link sidebar-link"]')
        .eq(1)
        .should('be.visible')
        .click();
    }
}