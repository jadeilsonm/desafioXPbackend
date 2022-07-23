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
var userRepository_1 = __importDefault(require("../repository/userRepository"));
var HttpExceptionError_1 = __importDefault(require("../shared/HttpExceptionError"));
var JWT_1 = require("../shared/JWT");
var Messages_1 = __importDefault(require("../utils/Messages"));
var StatusCodes_1 = __importDefault(require("../utils/StatusCodes"));
var createdUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user.valor = 0;
                newUser = userRepository_1.default.create(user);
                return [4 /*yield*/, userRepository_1.default.save(newUser)];
            case 1:
                _a.sent();
                token = '';
                if (newUser.codCliente) {
                    token = (0, JWT_1.generateJWTToken)(JSON.stringify(user));
                }
                return [2 /*return*/, { token: token }];
        }
    });
}); };
var changeValue = function (conta, options) {
    if (options === void 0) { options = '+'; }
    return __awaiter(void 0, void 0, void 0, function () {
        var codCliente, valor, rowns, newValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    codCliente = conta.codCliente, valor = conta.valor;
                    return [4 /*yield*/, userRepository_1.default.findOneBy({ codCliente: codCliente })];
                case 1:
                    rowns = _a.sent();
                    if (!rowns) {
                        throw new HttpExceptionError_1.default(StatusCodes_1.default.NOT_FOUND, Messages_1.default.COD_NOT_FOUND);
                    }
                    if (options === '-' && valor > rowns.valor) {
                        throw new HttpExceptionError_1.default(StatusCodes_1.default.NOT_FOUND, Messages_1.default.VALUE_INVALID);
                    }
                    newValue = eval("".concat(rowns.valor, " ").concat(options, " ").concat(valor)).toFixed(2);
                    return [4 /*yield*/, userRepository_1.default.update(codCliente, __assign(__assign({}, rowns), { valor: newValue }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/, {
                            codCliente: codCliente,
                            valor: newValue
                        }];
            }
        });
    });
};
var getUser = function (codCliente) { return __awaiter(void 0, void 0, void 0, function () {
    var rowns;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userRepository_1.default.findOneBy({ codCliente: codCliente })];
            case 1:
                rowns = _a.sent();
                if (!rowns) {
                    throw new HttpExceptionError_1.default(StatusCodes_1.default.NOT_FOUND, Messages_1.default.COD_NOT_FOUND);
                }
                return [2 /*return*/, {
                        codCliente: codCliente,
                        saldo: rowns.valor
                    }];
        }
    });
}); };
var getAllUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var rowns;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userRepository_1.default.findBy({ active: true })];
            case 1:
                rowns = _a.sent();
                if (!rowns) {
                    throw new HttpExceptionError_1.default(StatusCodes_1.default.NOT_FOUND, Messages_1.default.COD_NOT_FOUND);
                }
                return [2 /*return*/, rowns];
        }
    });
}); };
exports.default = { createdUser: createdUser, changeValue: changeValue, getUser: getUser, getAllUser: getAllUser };
