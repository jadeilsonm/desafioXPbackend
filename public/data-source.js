"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_Port),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // synchronize: true,
    entities: ["".concat(__dirname, "/**/model/*{.ts,.js}")],
    migrations: ["".concat(__dirname, "/**/migrations/*{.ts,.js}")]
});
// subscribers: [],
// logging: true,
