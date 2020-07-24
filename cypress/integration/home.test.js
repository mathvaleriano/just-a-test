/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show loading', () => {
    cy.contains('.loading', 'Loading...')
  })

  it('should show a list of cards', () => {
    cy.server()
    cy.route(`*/breeds*`).as('getBreeds')
    cy.wait('@getBreeds').then(() => {
      cy.get('.card')
    })
  })
})