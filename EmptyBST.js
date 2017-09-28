"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NonEmptyBST_1 = require("./NonEmptyBST");
/**
 * A class that reappresent an empty Binary Tree
 */
var EmptyBST = /** @class */ (function () {
    function EmptyBST() {
    }
    EmptyBST.prototype.isEmpty = function () {
        return true;
    };
    EmptyBST.prototype.cardinality = function () {
        return 0;
    };
    EmptyBST.prototype.member = function (elem) {
        return false;
    };
    EmptyBST.prototype.add = function (elem) {
        return new NonEmptyBST_1.default(elem);
    };
    EmptyBST.prototype.hasLeft = function () {
        return false;
    };
    EmptyBST.prototype.hasRight = function () {
        return false;
    };
    EmptyBST.prototype.printAsc = function () {
        return;
    };
    EmptyBST.prototype.printDesc = function () {
        return;
    };
    return EmptyBST;
}());
exports.default = EmptyBST;
