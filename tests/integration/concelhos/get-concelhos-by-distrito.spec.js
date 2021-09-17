const expect = require("chai").expect;
const request = require("supertest");
const api = require("../../../server.js");

describe("getConcelhosPorDistrito()", () => {
  context("# without query param", () => {
    it("should return error", (done) => {
      const totalDistricts = 29;

      request(api)
        .get("/api/v1/concelhos")
        .expect("Content-Type", /json/)
        .expect(400)
        .end(function (err, res) {
          if (err) return done(err);

          expect(res.body.message).to.be.equal("Deve indicar o distrito!");

          return done();
        });
    });
  });
  context("# with query param", () => {
    it("should return Not Found message", (done) => {
      const totalConcelhos = 29;

      request(api)
        .get("/api/v1/concelhos?distrito=23xpto")
        .expect("Content-Type", /json/)
        .expect(400)
        .end(function (err, res) {
          if (err) return done(err);

          expect(res.body.message).to.be.eq("Not found!");

          return done();
        });
    });

    it("should return all", (done) => {
      const totalConcelhos = 16;

      request(api)
        .get("/api/v1/concelhos?distrito=Leiria")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);

          expect(res.body.length).to.be.eq(totalConcelhos);
          expect(res.body[0]).to.be.equal("Alcobaça");

          return done();
        });
    });
  });
});
