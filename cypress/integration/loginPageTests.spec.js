///<reference types = "Cypress"/>
import { logPage } from '../support/pageObjects/loginPage';
const login = new logPage();

import { mpPage } from '../support/pageObjects/marketplacePage';
const mp = new mpPage();


describe('Login page', () => {
    beforeEach('Visit the main page', () => {
        login.url();
    });
    it('Smoke test for basic flow', () => {
        login.validLogin();
        mp.order();
    });
});