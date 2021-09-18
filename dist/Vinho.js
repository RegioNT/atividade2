"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vinho = /** @class */ (function () {
    function Vinho(_a) {
        var id = _a.id, name = _a.name, type = _a.type, marca = _a.marca, value = _a.value;
        this.id = id;
        this.name = name;
        this.type = type;
        this.marca = marca;
        this.value = value;
    }
    Vinho.prototype.getName = function () {
        return this.name;
    };
    Vinho.prototype.setName = function (name) {
        this.name = name;
    };
    return Vinho;
}());
exports.default = Vinho;
