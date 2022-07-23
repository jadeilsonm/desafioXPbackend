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
exports.Active = void 0;
var typeorm_1 = require("typeorm");
var Investment_1 = require("./Investment");
var User_1 = require("./User");
var Active = /** @class */ (function () {
    function Active() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer' }),
        __metadata("design:type", Number)
    ], Active.prototype, "codAtivo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'integer' }),
        __metadata("design:type", Number)
    ], Active.prototype, "qtdeAtivo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], Active.prototype, "valor", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar' }),
        __metadata("design:type", String)
    ], Active.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (user) { return user.active; }),
        (0, typeorm_1.JoinColumn)({ name: 'codCliente' }),
        __metadata("design:type", User_1.User)
    ], Active.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Investment_1.Investiment; }, function (investment) { return investment.active; }),
        __metadata("design:type", Investment_1.Investiment)
    ], Active.prototype, "investment", void 0);
    Active = __decorate([
        (0, typeorm_1.Entity)('actives')
    ], Active);
    return Active;
}());
exports.Active = Active;
