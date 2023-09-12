const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Replace with the correct path to your Express app file
const expect = chai.expect;

chai.use(chaiHttp);

describe('API Endpoints', () => {
  let createdPersonId;

  // Test creating a person
  it('should create a new person', (done) => {
    chai
      .request(app)
      .post('/api')
      .send({ name: 'Test Person', value: 'Test Value' })
      .end((err, res) => {
        if (err) return done(err); // Handle errors
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');
        createdPersonId = res.body.id;
        done();
      });
  });

  // Test getting a person by ID
  it('should get a person by ID', (done) => {
    chai
      .request(app)
      .get(`/api/${createdPersonId}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id').equal(createdPersonId);
        done();
      });
  });

  // Test updating a person by ID
  it('should update a person by ID', (done) => {
    chai
      .request(app)
      .put(`/api/${createdPersonId}`)
      .send({ name: 'Updated Name', value: 'Updated Value' })
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message').equal('Person updated successfully');
        done();
      });
  });

  // Test deleting a person by ID
  it('should delete a person by ID', (done) => {
    chai
      .request(app)
      .delete(`/api/${createdPersonId}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message').equal('user deleted successfully');
        done();
      });
  });
});
