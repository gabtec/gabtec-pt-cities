const expect = require("chai").expect;
const request = require("supertest");
const api = require("../../../server.js");

describe("getLocalidadePorCodPostal()", () => {
  it("should return 400 if bad code syntax", (done) => {
    const zipCode = "1234564";

    request(api)
      .get(`/api/v1/localidades/${zipCode}`)
      .expect("Content-Type", /json/)
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);

        expect(res.body.message).to.be.equal(
          "Código Postal deve respeitar o padrão NNNN-NNN."
        );

        return done();
      });
  });

  it("should return 200", (done) => {
    const zipCode = "3100-462";

    request(api)
      .get(`/api/v1/localidades/${zipCode}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);

        expect(res.body).to.be.equal("POMBAL");

        return done();
      });
  });
});
