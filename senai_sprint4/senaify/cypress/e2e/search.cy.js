describe('template spec', () => {
  let musicaItem;
  before(() => {
    cy.visit('/')
  })

  it('Redirecionar para a tela de busca', () => {
    cy.get("[href= '/Search']").click();
    cy.scrollTo("top")
  });

  it('Procurando uma musica especifica', () => {
    cy.get("[data-testid='campoBusca']").type("Xaprala")
    cy.get("[aria-label= 'music-item-sch']").should("have.length.greaterThan", 0)
  });

  it('Tocar musica especifica', () => {
    musicaItem = cy.get("[aria-label= 'music-item-sch']").contains("Xapralá")
    musicaItem.click()

  });
  it('Curtir musica', () => {
    cy.get(musicaItem).get("[data-testid = 'icon-button-sch']").first().click()
  });
})
