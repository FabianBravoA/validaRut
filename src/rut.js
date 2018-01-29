const RUT = {};

/*callback es una función que tiene como parámetro
 el resultado de validar rut*/
RUT.validaRut = function(rutCompleto, callback) {
    /*callback es el parámetro que recibe la función que el usuario
    de validaRur ingresa para poder recibir el resultado*/
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) {
        /*Para retornar el valor, nosotros hacemos uso del callback
        es a traváes del parámetro que le respondemos*/
        callback(false);
        return;
    }
    var tmp = rutCompleto.split('-');
    var digv = tmp[1];
    var rut = tmp[0];
    if (digv == 'K') digv = 'k';
    callback(RUT.dv(rut) == digv);
};
RUT.dv = function(T) {
    var M = 0,
        S = 1;
    for (; T; T = Math.floor(T / 10))
        S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
};

module.exports = RUT;