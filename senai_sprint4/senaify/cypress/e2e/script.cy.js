describe('template spec', () => {
  let musicaItem;
  before(() => {
    cy.visit('/')
  })

  it(' Visualizar playlists e executar uma música', () => {
    cy.get("[aria-label= 'title-head']")
    cy.get("[aria-label= 'title-head']").should("contain", "Good morning")
    cy.wait(2000)
    cy.get("[aria-label= 'playlist-item']").should("have.length.greaterThan", 0)
    cy.get("[aria-label= 'playlist-item']").first().click();
    cy.wait(1000)
    cy.get("[aria-label= 'music-item']").should("have.length.greaterThan", 0)
    cy.get("[aria-label= 'music-item']").first().click()
  })

  it('Navegar entre playlists e executar outra música', () => {
    cy.get("[data-testid = 'icon-voltar']").first().click()
    cy.get("[aria-label= 'playlist-item']").eq(1).click()
    cy.wait(1000)
    cy.get("[aria-label= 'music-item']").should("have.length.greaterThan", 0)
    cy.get("[aria-label= 'music-item']").first().click()
  });

  it('Procurar e favoritar uma música', () => {
    cy.get("[href= '/Search']").click();
    // cy.scrollTo("top")
    cy.get("[data-testid='campoBusca']").type("Xaprala")
    cy.get("[aria-label= 'music-item-sch']").should("have.length.greaterThan", 0)

    musicaItem = cy.get("[aria-label= 'music-item-sch']").contains("Xapralá")
    musicaItem.click()
  });

  it('Curtir musica', () => {
    cy.get(musicaItem).get("[data-testid = 'icon-button-sch']").first().click()
  });

  it('Verificar música favoritada na tela de Favoritos', () => {
    cy.get("[href= '/Favorites']").click();
    cy.get("[aria-label= 'favorite-item']").should("have.length.greaterThan", 0)
    cy.get("[aria-label= 'favorite-item']").contains("Xapralá").click()
  });


})