const expect = require("chai").expect;
const request = require("supertest");
const api = require("../../../server.js");

describe("getCodPostaisPorLocalidade()", () => {
  it("should return 200 empty array when zero hits", (done) => {
    const local = "MADRID";

    request(api)
      .get(`/api/v1/codigos-postais/${local}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);

        expect(res.body).to.be.instanceOf(Array);
        expect(res.body.length).to.be.eq(0);

        return done();
      });
  });

  it("should return 200", (done) => {
    const local = "POMBAL";

    request(api)
      .get(`/api/v1/codigos-postais/${local}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        console.log(res.body);
        expect(res.body).to.be.instanceOf(Array);
        expect(res.body.length).to.be.eq(275);

        return done();
      });
  });
});
