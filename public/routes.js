"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var account_controller_1 = __importDefault(require("./controller/account.controller"));
var active_controller_1 = __importDefault(require("./controller/active.controller"));
var investment_controller_1 = __importDefault(require("./controller/investment.controller"));
var login_controller_1 = __importDefault(require("./controller/login.controller"));
var user_controller_1 = __importDefault(require("./controller/user.controller"));
var router = (0, express_1.Router)();
router.use('/user', user_controller_1.default);
router.use('/login', login_controller_1.default);
router.use('/conta', account_controller_1.default);
router.use('/ativos', active_controller_1.default);
router.use('/investimentos', investment_controller_1.default);
exports.default = router;
