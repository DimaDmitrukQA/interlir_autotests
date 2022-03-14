export class logPage{
    url(){
        cy.visit('https://portal-dev.interlir.ninja/');
    }
    validLogin(){
        cy.get('input[type = "email"]')
        .should('be.visible')
        .type('mike_test@yopmail.com')
        .invoke('attr', 'html-id').should('eq', 'username');
        cy.get('input[type = "password"]')
        .should('be.visible')
        .type('TestCode7123@')
        .invoke('attr', 'html-id').should('eq', 'password');
        cy.get('button[type = "submit"]')
        .should('be.visible')
        .should('contain.text', 'Login')
        .click();
    }
}