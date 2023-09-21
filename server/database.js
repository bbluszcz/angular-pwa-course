"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var _ = require("lodash");
var database_data_1 = require("./database-data");
var InMemoryDatabase = /** @class */ (function () {
    function InMemoryDatabase() {
    }
    InMemoryDatabase.prototype.readAllLessons = function () {
        return _.values(database_data_1.LESSONS);
    };
    return InMemoryDatabase;
}());
exports.db = new InMemoryDatabase();
