///<reference types = "Cypress"/>
import { regPage } from '../support/pageObjects/registrationPage';
const uniqueReg = new regPage();



describe('Base auth', () => {
    beforeEach('Visit the main page', () => {
        uniqueReg.regUrl();
    });
    it('Positive registration user', () => {
        uniqueReg.creds();
        uniqueReg.printCreds();
    });
    it('Negative registration user', () => {
        uniqueReg.negativeReg();
        uniqueReg.checkbox();
        uniqueReg.clearInputs();
    });
});