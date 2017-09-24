import EmptyBST from "./EmptyBST"
import NonEmptyBST from "./NonEmptyBST"

let tree = new EmptyBST<number>();

console.log("Is empty? ", tree.isEmpty());
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
console.log("Adding a new member with value of 7... ", tree = tree.add(7));


