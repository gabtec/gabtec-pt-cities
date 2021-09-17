const expect = require("chai").expect;
const request = require("supertest");
const api = require("../../../server.js");

describe("getConcelhoPorCodigo()", () => {
  it("should return ok", (done) => {
    const concelhoCod = 502;
    const concelhoDesc = "Castelo Branco";

    request(api)
      .get(`/api/v1/concelhos/${concelhoCod}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);

        expect(res.body).to.be.equal(concelhoDesc);

        return done();
      });
  });
});
