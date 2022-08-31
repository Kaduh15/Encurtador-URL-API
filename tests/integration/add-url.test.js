const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando o /add-url', () => {
  describe('Testando método POST', () => {
    it('Retorna um 400 se for passado uma URL de forma invalida', async () => {
      const response = await chai.request(app)
                                .post('/add-url')
                                .send({
                                  url: 'Mint Not So Intense',
                                });
      expect(response.status).to.equal(400);
      expect(response.body).to.be.deep.equal({
        message: 'url foi passada de forma invalida!',
      });
    });
  });
});