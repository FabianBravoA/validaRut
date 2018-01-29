const RUT = {};

RUT.validaRut = function(rutCompleto) {
    let promise = new Promise((resolve, reject) => {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) {
            reject(new Error("You fool, that's not a valid RUT"));
            return;
        }
        var tmp = rutCompleto.split('-');
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == 'K') digv = 'k';
        resolve(RUT.dv(rut) == digv);
    });

    return promise;
};
RUT.dv = function(T) {
    var M = 0,
        S = 1;
    for (; T; T = Math.floor(T / 10))
        S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
};

module.exports = RUT;