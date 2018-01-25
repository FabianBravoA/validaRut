const $ = require('jquery');
const RUT = require('./rut');

function validarInput(idInput) {
    let theInput = $(`#${idInput}`);
    theInput.change(() => {
        if (!validar(theInput.val)) {
            putErrorImg(theInput);
        } else {
            deleteErrorImg();
        }
    });
}

function validar(inputString) {
    return RUT.validaRut(inputString);
}

function putErrorImg(theInput) {
    if (!$("#errorDoge")) {
        theInput.parent.append("<img id='errorDoge' src=" + __dirname + "../assets/img/error.jpg" + "></img>")
    }
}

function deleteErrorImg() {
    if ($("#errorDoge")) {
        $("#errorDoge").remove();
    }
}

module.exports = validarInput;