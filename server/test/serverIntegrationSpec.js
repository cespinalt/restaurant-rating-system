const expect = require('chai').expect;
const request = require('request');
const config = require('./config.data');

describe('Server Integration', () => {
  it('Should respond get request for / with a 200 status code', done => {
    request(config.baseUri, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Should respond 404 when asked for nonexistent endpoint', done => {
    request(`${config.baseUri}/randomendpoint`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  describe('Restaurant API', () => {
    it('Should send an object containing a restaurants array for get /api', done => {
      request(config.restaurant.get, (err, res, body) => {
        const parseBody = JSON.parse(res.body);
        expect(parseBody).to.be.an('object');
        expect(parseBody.restaurants).to.be.an('array');
        done();
      });
    });

    it('Should return 201 for posting a new restaurant to /api', done => {
      request(config.restaurant.post, (err, res, body) => {
        expect(res.statusCode).to.equal(201);
        done();
      });
    });

    it('Should return 409 for posting an existing restaurant to /api', done => {
      request(config.restaurant.post, (err, res, body) => {
        expect(res.statusCode).to.equal(409);
        done();
      });
    });

    it('Should return 202 for deletion of existing restaurant', done => {
      request(config.restaurant.delete, (err, res, body) => {
        expect(res.statusCode).to.equal(202);
        done();
      });
    });

    it('Should return 204 for already deleted restaurant', done => {
      request(config.restaurant.delete, (err, res, body) => {
        expect(res.statusCode).to.equal(204);
        done();
      });
    });
  });

  describe('User API', () => {
    it('Should return 201 for posting a new user', done => {
      request(config.user.post, (err, res, body) => {
        expect(res.statusCode).to.equal(201);
        done();
      });
    });

    it('Should return 409 for posting an existing user', done => {
      request(config.user.post, (err, res, body) => {
        expect(res.statusCode).to.equal(409);
        done();
      });
    });

    it('Should return 202 for deleting an existing user', done => {
      request(config.user.delete, (err, res, body) => {
        expect(res.statusCode).to.equal(202);
        done();
      });
    });
  });

  describe('Restaurant Rating', () => {
    xit('Should return 201 when posting to /api/rate', done => {
      request(config.restaurant.post, (err, res, body) => {
        request(config.user.post, (err, res, body) => {
          request('', (err, res, body) => {
          });
        });
      });
    });
  });
});
