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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var Active_1 = require("./Active");
var Investment_1 = require("./Investment");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer' }),
        __metadata("design:type", Number)
    ], User.prototype, "codCliente", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
        __metadata("design:type", String)
    ], User.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 150, unique: true }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'double', default: 0.00 }),
        __metadata("design:type", Number)
    ], User.prototype, "valor", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Active_1.Active; }, function (active) { return active.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Investment_1.Investiment; }, function (investment) { return investment.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "investment", void 0);
    User = __decorate([
        (0, typeorm_1.Entity)('accounts')
    ], User);
    return User;
}());
exports.User = User;
