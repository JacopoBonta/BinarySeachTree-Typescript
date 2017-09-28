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
    EmptyBST.prototype.search = function (elem) {
        return false;
    };
    EmptyBST.prototype.insert = function (elem) {
        return new NonEmptyBST_1.default(elem);
    };
    EmptyBST.prototype.inOrderTraverse = function (callback) {
        return;
    };
    EmptyBST.prototype.preOrderTraverse = function (callback) {
        return;
    };
    return EmptyBST;
}());
exports.default = EmptyBST;
