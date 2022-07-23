"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Investiment = void 0;
var typeorm_1 = require("typeorm");
var Active_1 = require("./Active");
var User_1 = require("./User");
var Investiment = /** @class */ (function () {
    function Investiment() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer' }),
        __metadata("design:type", Number)
    ], Investiment.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'integer' }),
        __metadata("design:type", Number)
    ], Investiment.prototype, "qtdeAtivo", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (user) { return user.investment; }),
        (0, typeorm_1.JoinColumn)({ name: 'codCliente' }),
        __metadata("design:type", User_1.User)
    ], Investiment.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Active_1.Active; }, function (active) { return active.investment; }),
        (0, typeorm_1.JoinColumn)({ name: 'codAtivo' }),
        __metadata("design:type", Active_1.Active)
    ], Investiment.prototype, "active", void 0);
    Investiment = __decorate([
        (0, typeorm_1.Entity)('investiments')
    ], Investiment);
    return Investiment;
}());
exports.Investiment = Investiment;
