"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var HttpExceptionError_1 = __importDefault(require("../shared/HttpExceptionError"));
var StatusCodes_1 = __importDefault(require("../utils/StatusCodes"));
var loginSchema = joi_1.default.object({
    codCliente: joi_1.default.number().required(),
    valor: joi_1.default.number().min(0.1).required(),
});
var validateSchemaChange = function (req, __res, next) {
    var error = loginSchema.validate(req.body, { abortEarly: false }).error;
    if (!error) {
        return next();
    }
    var message = error.details.map(function (e) { return e.message; })[0];
    var status = StatusCodes_1.default.UNPROCESSABLE_ENTITY;
    if (message.includes('is required'))
        status = StatusCodes_1.default.BAD_REQUEST;
    throw new HttpExceptionError_1.default(status, message);
};
exports.default = validateSchemaChange;
