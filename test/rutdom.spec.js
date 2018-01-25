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

describe("Input valida rut", () => {
    it("Debe leer desde input", () => {
        RUTDom("testito");
        chai.assert.exists($("#testito").change);
    })
})