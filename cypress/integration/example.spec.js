
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contain logo image', ()=>{
            cy.get('#logo').should('be.visible');
        });
    });

    describe('user interaction', ()=>{
        it('should submit the guess number and compare it to the random number', ()=> {        
            cy.get('#submit-button').click();
            cy.get('#result-text').should('be.visible');
            // cy.get('#result-text').should('contain.text', 'Number too low');
        });
    });
});