"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var activeRepository_1 = __importDefault(require("../repository/activeRepository"));
var investimentRepository_1 = __importDefault(require("../repository/investimentRepository"));
var userRepository_1 = __importDefault(require("../repository/userRepository"));
var HttpExceptionError_1 = __importDefault(require("../shared/HttpExceptionError"));
var Messages_1 = __importDefault(require("../utils/Messages"));
var StatusCodes_1 = __importDefault(require("../utils/StatusCodes"));
var comprar = function (compra) { return __awaiter(void 0, void 0, void 0, function () {
    var codCliente, codAtivo, qtdeAtivo, user, active, valueActive, newInvestiment, invest, vendedor;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                codCliente = compra.codCliente;
                codAtivo = compra.codAtivo, qtdeAtivo = compra.qtdeAtivo;
                return [4 /*yield*/, userRepository_1.default.findOneBy({ codCliente: codCliente })];
            case 1:
                user = _a.sent();
                if (!user) {
                    throw new HttpExceptionError_1.default(StatusCodes_1.default.NOT_FOUND, Messages_1.default.COD_NOT_FOUND);
                }
                return [4 /*yield*/, activeRepository_1.default.find({ relations: { user: true }, where: { codAtivo: codAtivo } })];
            case 2:
                active = (_a.sent())[0];
                if (!active) {
                    throw new HttpExceptionError_1.default(StatusCodes_1.default.NOT_FOUND, Messages_1.default.ACTIVE_NOT_FOUND);
                }
                valueActive = qtdeAtivo * active.valor;
                if (valueActive > user.valor) {
                    throw new HttpExceptionError_1.default(StatusCodes_1.default.UNAUTHORIZED, Messages_1.default.INVALID_BALENCE);
                }
                if (qtdeAtivo > active.qtdeAtivo) {
                    throw new HttpExceptionError_1.default(StatusCodes_1.default.UNAUTHORIZED, Messages_1.default.INVALID_AMOUNT);
                }
                newInvestiment = {
                    qtdeAtivo: qtdeAtivo,
                    codCliente: user,
                    codAtivo: active
                };
                return [4 /*yield*/, investimentRepository_1.default.create(newInvestiment)];
            case 3:
                invest = _a.sent();
                return [4 /*yield*/, investimentRepository_1.default.save(invest)];
            case 4:
                _a.sent();
                return [4 /*yield*/, activeRepository_1.default.update(codAtivo, __assign(__assign({}, active), { qtdeAtivo: active.qtdeAtivo - qtdeAtivo }))];
            case 5:
                _a.sent();
                return [4 /*yield*/, userRepository_1.default.update(codCliente, __assign(__assign({}, user), { valor: user.valor - valueActive }))];
            case 6:
                _a.sent();
                codCliente = active.user.codCliente;
                vendedor = active.user;
                return [4 /*yield*/, userRepository_1.default.update(codCliente, __assign(__assign({}, vendedor), { valor: vendedor.valor + valueActive }))];
            case 7:
                _a.sent();
                return [2 /*return*/, true];
        }
    });
}); };
var vender = function (vender) { return __awaiter(void 0, void 0, void 0, function () {
    var codCliente, codAtivo, qtdeAtivo, user, active, newInvestiment, invest, valueActive;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                codCliente = vender.codCliente, codAtivo = vender.codAtivo, qtdeAtivo = vender.qtdeAtivo;
                return [4 /*yield*/, userRepository_1.default.findOneBy({ codCliente: codCliente })];
            case 1:
                user = _a.sent();
                if (!user) {
                    throw new HttpExceptionError_1.default(StatusCodes_1.default.NOT_FOUND, Messages_1.default.COD_NOT_FOUND);
                }
                return [4 /*yield*/, activeRepository_1.default.find({ relations: {
                            user: true
                        }, where: {
                            codAtivo: codAtivo
                        } })];
            case 2:
                active = (_a.sent())[0];
                if (!active) {
                    throw new HttpExceptionError_1.default(StatusCodes_1.default.NOT_FOUND, Messages_1.default.ACTIVE_NOT_FOUND);
                }
                if (qtdeAtivo > active.qtdeAtivo) {
                    throw new HttpExceptionError_1.default(StatusCodes_1.default.UNAUTHORIZED, Messages_1.default.INVALID_AMOUNT);
                }
                newInvestiment = {
                    qtdeAtivo: qtdeAtivo,
                    codCliente: user,
                    codAtivo: active
                };
                return [4 /*yield*/, investimentRepository_1.default.create(newInvestiment)];
            case 3:
                invest = _a.sent();
                valueActive = qtdeAtivo * active.valor;
                return [4 /*yield*/, investimentRepository_1.default.save(invest)];
            case 4:
                _a.sent();
                return [4 /*yield*/, userRepository_1.default.update(codCliente, __assign(__assign({}, user), { valor: user.valor + valueActive }))];
            case 5:
                _a.sent();
                return [4 /*yield*/, activeRepository_1.default.update(codAtivo, __assign(__assign({}, active), { qtdeAtivo: active.qtdeAtivo - qtdeAtivo, user: __assign(__assign({}, user), { valor: user.valor + valueActive }) }))];
            case 6:
                _a.sent();
                return [2 /*return*/, true];
        }
    });
}); };
exports.default = { comprar: comprar, vender: vender };
