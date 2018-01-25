const $ = require('jquery');
const RUT = require('./rut');

function validarInput(idInput) {
    let theInput = $(`#${idInput}`);
    theInput.change(() => {
        console.log(validar(theInput.val));
    });
}

function validar(inputString) {
    return RUT.validaRut(inputString);
}

module.exports = validarInput;