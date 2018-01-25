const chai = require('chai');
const RUT = require('../src/rut');

describe("Validar RUT", () => {
    it("Debe comprobar el formato", () => {
        chai.assert.equal(RUT.validaRut("42"), false);
        chai.assert.equal(RUT.validaRut("16749892-2"), true);
    });
    it("Debe comprobar un rut malo", () => {
        chai.assert.equal(RUT.validaRut("16749893-2"), false);
    })
});

describe("Digito Verificador", () => {

});