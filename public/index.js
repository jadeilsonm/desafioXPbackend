"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("express-async-errors");
var data_source_1 = require("./data-source");
var httpErrorMiddleware_1 = __importDefault(require("./middleware/httpErrorMiddleware"));
var routes_1 = __importDefault(require("./routes"));
data_source_1.AppDataSource.initialize().then(function () {
    var app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.get('/', function (_req, res) {
        res.send('Ben vindo! ');
    });
    app.use(routes_1.default);
    app.use(httpErrorMiddleware_1.default);
    var PORT = process.env.PORT || 3000;
    return app.listen(PORT, function () { return console.log('Server up'); });
});
