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
    tree = tree.add(elem);
});
console.log("Tree cardinality - ", tree.cardinality());
console.log("Print tree in ascendent order");
tree.printAsc();
console.log("Print tree in descendent order");
tree.printDesc();
/* console.log("Is empty? ", tree.isEmpty());
console.log("Cardinality ", tree.cardinality());
console.log("There is a member with value of 5? ", tree.member(5));
console.log("Adding a new member with value of 2... ", tree = tree.add(2));
console.log("");
console.log("Is empty? ", tree.isEmpty());
console.log("Cardinality ", tree.cardinality());
console.log("There is a member with value of 5? ", tree.member(5));
console.log("Adding a new member with value of 3... ", tree = tree.add(3));
console.log("");
console.log("Is empty? ", tree.isEmpty());
console.log("Cardinality ", tree.cardinality());
console.log("There is a member with value of 5? ", tree.member(5));
console.log("Adding a new member with value of 5... ", tree = tree.add(5));
console.log("");
console.log("Is empty? ", tree.isEmpty());
console.log("Cardinality ", tree.cardinality());
console.log("There is a member with value of 5? ", tree.member(5));
console.log("Adding a new member with value of 7... ", tree = tree.add(7)); */ 
