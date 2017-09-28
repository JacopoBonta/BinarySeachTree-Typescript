"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmptyBST_1 = require("./EmptyBST");
var tree = new EmptyBST_1.default();
var size = 5;
var sample = [];
while (size-- > 0) {
    sample.push(Math.floor(Math.random() * 10));
}
console.log("Sample array ", sample);
sample.forEach(function (elem) {
    tree = tree.insert(elem);
});
console.log("Tree cardinality - ", tree.cardinality());
console.log("Print tree in ascendent order");
tree.inOrderTraverse(function (node) { return console.log(node); });
console.log("Print tree in descendent order");
tree.preOrderTraverse(function (node) { return console.log(node); });
