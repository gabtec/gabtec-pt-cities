const expect = require("chai").expect;
const request = require("supertest");
const api = require("../../../server.js");

describe("getDistritos()", () => {
  context("# without query param", () => {
    it("should return just names", (done) => {
      const totalDistricts = 29;

      request(api)
        .get("/api/v1/distritos?out=array")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);

          expect(res.body.length).to.be.eq(totalDistricts);
          expect(res.body[0]).to.be.equal("Aveiro");

          return done();
        });
    });
  });
  context("# with query param", () => {
    it("should return all", (done) => {
      const totalDistricts = 29;

      request(api)
        .get("/api/v1/distritos")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);

          expect(res.body.length).to.be.eq(totalDistricts);
          expect(res.body[0].cod).to.be.equal(1);
          expect(res.body[0].abrev).to.be.equal("AVR");
          expect(res.body[0].desc).to.be.equal("Aveiro");

          return done();
        });
    });
  });
});
