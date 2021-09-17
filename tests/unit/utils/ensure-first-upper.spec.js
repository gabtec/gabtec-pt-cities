const expect = require("chai").expect;
const tools = require("../../../utils/index.js");

describe("ensureUpperFirst()", () => {
  it("should convert if all lower", () => {
    const result = tools.ensureUpperFirst("gabtec");
    expect(result).to.be.eq("Gabtec");
  });

  it("should convert if all upp", () => {
    const result = tools.ensureUpperFirst("GABTEC");
    expect(result).to.be.eq("Gabtec");
  });

  it("should convert if all mixed", () => {
    const result = tools.ensureUpperFirst("GaBTeC");
    expect(result).to.be.eq("Gabtec");
  });

  it("should convert composed words", () => {
    const result = tools.ensureUpperFirst("GaBTeC gabTEC");
    expect(result).to.be.eq("Gabtec Gabtec");
  });

  it("should convert composed complex words", () => {
    const result = tools.ensureUpperFirst("GaBTeC de gabTEC");
    expect(result).to.be.eq("Gabtec de Gabtec");
  });
});
