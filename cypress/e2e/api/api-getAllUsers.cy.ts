// cypress/e2e/api/api-getUserData.spec.ts

describe("GET /user/getUserData", () => {
  beforeEach(() => {
    cy.request(
      {
        method: 'POST', 
        failOnStatusCode: false, 
        url: 'https://fimm-api.8corp.com.br/auth/login?email=controladoria.go@fimmbra.com.br&senha=fimm123'
      }
    ).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.access_token).to.be.a('string')
      cy.wrap(response.body.access_token).as('access_token')
    })
  })

  it('', () => {
    cy.get('@access_token').then((access_token) => {
      
      cy.request({
        method: 'GET',
        failOnStatusCode: false,
        url: 'https://fimm-api.8corp.com.br/user/getAll',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200)
        response.body.forEach((user: any )=> {
          expect(user.id).to.be.a('string')
          expect(user.cidade).to.be.a('string')
          expect(user.cpf).to.be.a('string')
          expect(user.funcao).to.be.a('string')
          // expect(user.email).to.be.a('string')
          expect(user.matricula).to.be.a('string')
          expect(user.nome).to.be.a('string')
          expect(user.contrato).to.be.a('string')
        });
      })
    
    })
  })

})