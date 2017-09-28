"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmptyBST_1 = require("./EmptyBST");
/**
 * A class that rappresent a non-empty Binary Tree
 */
var NonEmptyBST = /** @class */ (function () {
    function NonEmptyBST(elem, leftTree, rightTree) {
        this.root = elem;
        this.left = leftTree || new EmptyBST_1.default();
        this.right = rightTree || new EmptyBST_1.default();
    }
    NonEmptyBST.prototype.isEmpty = function () {
        return false;
    };
    NonEmptyBST.prototype.cardinality = function () {
        return 1 + this.left.cardinality() + this.right.cardinality();
    };
    NonEmptyBST.prototype.search = function (elem) {
        if (this.root === elem) {
            return true;
        }
        else {
            if (elem < this.root) {
                return this.left.search(elem);
            }
            else {
                return this.right.search(elem);
            }
        }
    };
    NonEmptyBST.prototype.insert = function (elem) {
        if (elem < this.root) {
            return new NonEmptyBST(this.root, this.left.insert(elem), this.right);
        }
        else {
            return new NonEmptyBST(this.root, this.left, this.right.insert(elem));
        }
    };
    NonEmptyBST.prototype.inOrderTraverse = function (callback) {
        this.left.inOrderTraverse(callback);
        callback(this.root);
        this.right.inOrderTraverse(callback);
    };
    NonEmptyBST.prototype.preOrderTraverse = function (callback) {
        this.right.preOrderTraverse(callback);
        callback(this.root);
        this.left.preOrderTraverse(callback);
    };
    return NonEmptyBST;
}());
exports.default = NonEmptyBST;
