"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1658519282472 = void 0;
var default1658519282472 = /** @class */ (function () {
    function default1658519282472() {
        this.name = 'default1658519282472';
    }
    default1658519282472.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `accounts` (`codCliente` int NOT NULL AUTO_INCREMENT, `nome` varchar(100) NOT NULL, `email` varchar(150) NOT NULL, `password` varchar(255) NOT NULL, `valor` double NOT NULL DEFAULT '0', UNIQUE INDEX `IDX_ee66de6cdc53993296d1ceb8aa` (`email`), PRIMARY KEY (`codCliente`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `investiments` (`id` int NOT NULL AUTO_INCREMENT, `qtdeAtivo` int NOT NULL, `codCliente` int NULL, `codAtivo` int NULL, UNIQUE INDEX `REL_4b88b33656f217500bcd551c78` (`codAtivo`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `actives` (`codAtivo` int NOT NULL AUTO_INCREMENT, `qtdeAtivo` int NOT NULL, `valor` decimal NOT NULL, `name` varchar(255) NOT NULL, `codCliente` int NULL, PRIMARY KEY (`codAtivo`)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `investiments` ADD CONSTRAINT `FK_77e61df2b781d8651ebae28dd54` FOREIGN KEY (`codCliente`) REFERENCES `accounts`(`codCliente`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `investiments` ADD CONSTRAINT `FK_4b88b33656f217500bcd551c783` FOREIGN KEY (`codAtivo`) REFERENCES `actives`(`codAtivo`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `actives` ADD CONSTRAINT `FK_0e0a8f62d0fe72b84a7a9afa97c` FOREIGN KEY (`codCliente`) REFERENCES `accounts`(`codCliente`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    default1658519282472.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `actives` DROP FOREIGN KEY `FK_0e0a8f62d0fe72b84a7a9afa97c`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `investiments` DROP FOREIGN KEY `FK_4b88b33656f217500bcd551c783`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `investiments` DROP FOREIGN KEY `FK_77e61df2b781d8651ebae28dd54`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `actives`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_4b88b33656f217500bcd551c78` ON `investiments`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `investiments`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_ee66de6cdc53993296d1ceb8aa` ON `accounts`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `accounts`")];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return default1658519282472;
}());
exports.default1658519282472 = default1658519282472;
