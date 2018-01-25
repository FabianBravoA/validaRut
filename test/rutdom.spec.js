const chai = require('chai');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let dom = new JSDOM('<!doctype html><html><body><input id="testito"></input></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
    userAgent: 'node.js',
};

var $ = require('jquery');
const RUTDom = require('../src/rutdom');

console.log("Dir > " + __dirname);

describe("Input valida rut", () => {
    RUTDom("testito");

    it("Debe leer desde input", () => {
        chai.assert.exists($("#testito").change);
    })

    $("#testito").val("1234");

    it("Debe poner un doge si falla", () => {
        chai.assert.exists($("#errorDoge"));
    })

    $("#testito").val("12345");

    it("Debe poner uno y solo un doge si falla", () => {
        chai.assert.notTypeOf($("#errorDoge"), 'array');
    })

    $("#testito").val("16749892-2");


    it("Debe no mostrar doge si rut es válido", () => {
        chai.assert.notExists($("#errorDoge"));
    })
});