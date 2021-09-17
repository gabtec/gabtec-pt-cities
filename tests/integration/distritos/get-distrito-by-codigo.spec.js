const expect = require("chai").expect;
const request = require("supertest");
const api = require("../../../server.js");

describe("getDistritoPorCodigo()", () => {
  it("should return ok", (done) => {
    const distritoCod = 2;
    const distritoDesc = "Beja";

    request(api)
      .get(`/api/v1/distritos/${distritoCod}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);

        expect(res.body).to.be.equal(distritoDesc);

        return done();
      });
  });
});
