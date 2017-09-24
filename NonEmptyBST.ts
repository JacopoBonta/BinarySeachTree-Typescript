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

    member(elem :D) :boolean {
        if (this.root === elem) {
            return true;
        } else {
            if (elem < this.root) {
                return this.left.member(elem);
            } else {
                return this.right.member(elem);
            }
        }
    }

    add(elem :D) :NonEmptyBST<D> {
        if (elem == this.root) {
            return this;
        } else {
            if (elem < this.root) {
                return new NonEmptyBST(this.root, this.left.add(elem), this.right);
            } else {
                return new NonEmptyBST(this.root, this.left, this.right.add(elem));
            }
        }
    }
}