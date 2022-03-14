///<reference types = "Cypress"/>
function getRandomEmail(domain,length)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text + domain;
}

var email = getRandomEmail("@yopmail.com",15);
var email1 = getRandomEmail("@yopmail.com",400);
var pass = 'CyTest123@';

export class regPage{
    url(){
        cy.visit('https://portal-dev.interlir.ninja/');
    }

    printCreds(){
        cy.writeFile('cypress/fixtures/RegData.txt', 
                    
        '-----------------------------------\n' 
        + 'email:      ' + email + '\n'
        + 'password:   ' + pass + '\n'
        + '\n   -> User Successfully Registered!\n',

        { flag: 'a+' });
    }

    regUrl(){
        cy.visit('https://portal-dev.interlir.ninja/registration/');
    }

    creds(){
        cy.get('.text-field__container')
        .eq(0)
        .type(email);
        cy.get('.text-field__container')
        .eq(1)
        .type(pass);
    }
    
    checkbox(){
        cy.get('.checkbox__box').click();
    }
   
    negativeReg(){
        cy.get('.text-field__container')
        .eq(0)
        .type(email1);
        cy.get('.text-field__container')
        .eq(1)
        .type(pass);
    }
    clearInputs(){
        cy.get('input[type="email"]')
        .clear({force: true});
        cy.get('input[type="password"]')
        .clear({force: true});
    }
}
