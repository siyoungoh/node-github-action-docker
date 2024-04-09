const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /', () => {
  it('should return Hello, World!', (done) => {
    chai.request('http://localhost:8080')
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!\n');
        done();
      });
  });
});
