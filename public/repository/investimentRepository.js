"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_source_1 = require("../data-source");
var Investment_1 = require("../model/Investment");
var investimentRepository = data_source_1.AppDataSource.getRepository(Investment_1.Investiment);
exports.default = investimentRepository;
