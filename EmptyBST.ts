import Tree from "./Tree"
import NonEmptyBST from "./NonEmptyBST"
/**
 * A class that reappresent an empty Binary Tree
 */
export default class EmptyBST<D> implements Tree<D> {
    constructor() {}

    isEmpty() :boolean {
        return true;
    }

    cardinality() :number {
        return 0;
    }

    member(elem :D) :boolean {
        return false;
    }

    add(elem :D) :NonEmptyBST<D> {
        return new NonEmptyBST(elem);
    }
}