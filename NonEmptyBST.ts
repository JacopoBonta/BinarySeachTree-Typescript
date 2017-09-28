import Tree from "./Tree"
import EmptyBST from "./EmptyBST"
/**
 * A class that rappresent a non-empty Binary Tree
 */
export default class NonEmptyBST<D> implements Tree<D> {
    root :D;            /* Parent */
    left :Tree<D>;      /* Left children */
    right :Tree<D>;     /* Right children */

    constructor(elem :D, leftTree ?:Tree<D>, rightTree ?:Tree<D>) {
        this.root = elem;
        this.left = leftTree || new EmptyBST<D>();
        this.right = rightTree || new EmptyBST<D>();
    }

    isEmpty() :boolean {
        return false;
    }

    cardinality() :number {
        return 1 + this.left.cardinality() + this.right.cardinality();
    }

    search(elem :D) :boolean {
        if (this.root === elem) {
            return true;
        } else {
            if (elem < this.root) {
                return this.left.search(elem);
            } else {
                return this.right.search(elem);
            }
        }
    }

    insert(elem :D) :NonEmptyBST<D> {
        if (elem < this.root) {
            return new NonEmptyBST(this.root, this.left.insert(elem), this.right);
        } else {
            return new NonEmptyBST(this.root, this.left, this.right.insert(elem));
        }
    }

    printAsc() :void {
        this.left.printAsc();
        console.log(this.root);
        this.right.printAsc();
    }

    printDesc() :void {
        this.right.printDesc();
        console.log(this.root);
        this.left.printDesc();
    }
}