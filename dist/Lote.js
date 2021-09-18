"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lote = /** @class */ (function () {
    function Lote() {
        this.vinhos = [];
        this.date = new Date();
    }
    Lote.prototype.addVinho = function (vinho) {
        this.vinhos.push(vinho);
    };
    return Lote;
}());
