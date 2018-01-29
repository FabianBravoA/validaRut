const chai = require('chai');
const RUT = require('../src/rut');

describe("Validar RUT", () => {
    it("Debe comprobar el formato", () => {
        /*
            Ahora validaRut responde a través de un callback,
            por lo tanto debemos testear el valor del callback
            y no el valor retornado.
        */
        RUT.validaRut("42", (isValid) => {
            //Con chai podemos testear el valor retornado a través del callback
            chai.assert.equal(isValid, false);
        });
        RUT.validaRut("16749892-2", (isValid) => {
            chai.assert.equal(isValid, true);
        });
    });
    it("Debe comprobar un rut malo", () => {
        RUT.validaRut("16749893-2", (isValid) => {
            chai.assert.equal(isValid, false);
        });
    })
});

describe("Digito Verificador", () => {

});