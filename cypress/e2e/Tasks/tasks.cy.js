/// <reference types="cypress" />

describe('Frontend first tasks', ()=>{
    it('Click the INPUT ALERT',()=>{
        let url = 'https://way2automation.com/way2auto_jquery/alert.php#load_box'  
        cy.visit(url)

        cy.contains('a', 'Input Alert').click()
  
      cy.get('#example-1-tab-2')
        .should('be.visible')
        .find('iframe')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then((body) => {
          cy.wrap(body).find('button').click()
        })
    })
  
    it('Escapes the iframe and clicks the button', () => {
      cy.visit(
        'https://way2automation.com/way2auto_jquery/alert/input-alert.html'
      )
      cy.get('button').click()
    })
  
    it('Verifies the result', () => {
      cy.visit(
        'https://way2automation.com/way2auto_jquery/alert/input-alert.html'
      )
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Cypress Test')
        cy.get('button').click()
        cy.get('#demo').should('contain', 'Cypress Test')
      })
    })
  })

describe('Frontend second tasks', ()=>{
    it('Clicks the FORMAT DATE and selects the current day',()=>{
        const todaysDay = Cypress.dayjs().format('DD')
        const todaysDate = Cypress.dayjs().format('YYYY-MM-DD')

        let url = ('https://way2automation.com/way2auto_jquery/datepicker.php#load_box')
        cy.visit(url)

        cy.contains('Format date').click()

        cy.get('#example-1-tab-4')
        .should('be.visible')
        .find('iframe')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then((body) => {
          cy.wrap(body).find('input').click()
          cy.wrap(body).find('td').contains(todaysDay).click()
          cy.wrap(body).find('#format').select(1)    
          //cy.wrap(body).find('input').should('have.prop', todaysDate)     
        })
    })
})

