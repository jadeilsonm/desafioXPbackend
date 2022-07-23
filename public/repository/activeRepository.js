"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_source_1 = require("../data-source");
var Active_1 = require("../model/Active");
var activeRepository = data_source_1.AppDataSource.getRepository(Active_1.Active);
exports.default = activeRepository;
