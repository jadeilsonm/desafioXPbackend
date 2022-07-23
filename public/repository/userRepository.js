"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_source_1 = require("../data-source");
var User_1 = require("../model/User");
var UserRepository = data_source_1.AppDataSource.getRepository(User_1.User);
exports.default = UserRepository;
