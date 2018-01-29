const chai = require('chai');
const RUT = require('../src/rut');

describe("Validar RUT", () => {
    it("Debe comprobar el formato", () => {
        /*
            Ahora validaRut responde a través de promises,
            esto es solo un ejemplo, no sirve anidar promesas
            para test.
            let rutPromise = RUT.validaRut("16749892-2");
            rutPromise.then((respuestaDeValidaRut)=>{
                //... uso de respuestaDeValidaRut
            });
        */
        RUT.validaRut("42").then((isValid) => {
            //Con chai podemos testear el valor retornado a través del callback
            chai.assert.equal(isValid, false);

            return RUT.validaRut("16749892-2");
        }).then((isValid) => {
            chai.assert.equal(isValid, true);
        }).catch((errorRut) => {
            chai.assert.equal(isValid, false);
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