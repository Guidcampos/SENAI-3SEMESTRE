describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

  })

  it('Verificar está exibido', () => {
    cy.get("[aria-label= 'title-head']")
    cy.get("[aria-label= 'title-head']").should("contain", "Good morning")

  })

  it('Verificar se tem uma lista com as playlist exibida', () => {
    cy.wait(2000)
    cy.get("[aria-label= 'playlist-item']").should("have.length.greaterThan", 0)

  })
  it('Clicar em uma opção e listar suas musicas', () => {
    cy.get("[aria-label= 'playlist-item']").contains("Pagodeira").click();
    cy.wait(1000)
    cy.get("[aria-label= 'music-item']").should("have.length.greaterThan", 0)

  })
  it('Clicar em uma opção e tocar musica', () => {
    cy.get("[aria-label= 'music-item']").contains("Vamo de Pagodin").click()
    cy.scrollTo("top")
  })

})