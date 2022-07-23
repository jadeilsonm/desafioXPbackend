"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpErrorMiddleware = function (err, __req, res, next) {
    if (!err) {
        next();
    }
    var _a = err, status = _a.status, message = _a.message;
    res.status(status || 500).json({ message: message });
};
exports.default = httpErrorMiddleware;
