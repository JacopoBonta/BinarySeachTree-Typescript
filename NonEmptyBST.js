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
    NonEmptyBST.prototype.member = function (elem) {
        if (this.root === elem) {
            return true;
        }
        else {
            if (elem < this.root) {
                return this.left.member(elem);
            }
            else {
                return this.right.member(elem);
            }
        }
    };
    NonEmptyBST.prototype.add = function (elem) {
        /* if (elem == this.root) {
            return this;
        } else {
            
        } */
        if (elem < this.root) {
            return new NonEmptyBST(this.root, this.left.add(elem), this.right);
        }
        else {
            return new NonEmptyBST(this.root, this.left, this.right.add(elem));
        }
    };
    NonEmptyBST.prototype.printAsc = function () {
        this.left.printAsc();
        console.log(this.root);
        this.right.printAsc();
    };
    NonEmptyBST.prototype.printDesc = function () {
        this.right.printDesc();
        console.log(this.root);
        this.left.printDesc();
    };
    NonEmptyBST.prototype.hasLeft = function () {
        if (this.left.isEmpty()) {
            return false;
        }
        else {
            return true;
        }
    };
    NonEmptyBST.prototype.hasRight = function () {
        if (this.right.isEmpty()) {
            return false;
        }
        else {
            return true;
        }
    };
    return NonEmptyBST;
}());
exports.default = NonEmptyBST;
