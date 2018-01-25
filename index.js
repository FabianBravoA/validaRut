const RUT = require("./src/rut");
const RUTDom = require("./src/rutdom");
module.exports = {
    RUT: RUT,
    engancharInput: RUTDom
};

/*Uso de biblioteca
    const RUTDOM = require('rut');

    RUTDOM.RUT.validaRut();
    RUTDOM.engancharInput("testito");
*/