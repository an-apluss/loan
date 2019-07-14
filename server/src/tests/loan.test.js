/* eslint-env mocha */

import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../index';

chai.should();

chai.use(chaiHttp);

describe('Test Suite For Loan Endpoints', () => {
  describe('GET /api/v1/loan', () => {
    it('should successfully get all avalaible loans', done => {
      chai
        .request(server)
        .get('/api/v1/loan')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.status.should.be.eql(200);
          res.body.success.should.be.eql(true);
          res.body.data[0].should.have.keys(
            'id',
            'name',
            'description',
            'interest_rate',
            'amount',
            'tenure'
          );
          res.body.data[0].id.should.be.a('number');
          res.body.data[0].name.should.be.a('string');
          res.body.data[0].description.should.be.a('string');
          res.body.data[0].interest_rate.should.be.a('string');
          res.body.data[0].amount.should.be.a('number');
          res.body.data[0].tenure.should.be.a('string');
          done();
        });
    });
  });
});
