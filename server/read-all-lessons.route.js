"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAllLessons = void 0;
var database_1 = require("./database");
function readAllLessons(req, res) {
    res.status(200).json({ lessons: database_1.db.readAllLessons() });
}
exports.readAllLessons = readAllLessons;
