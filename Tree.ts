/**
 * Tree Interface.
 */
import NonEmptyBST from "./NonEmptyBST"
export default interface Tree<D> {
    /**
     * Is the tree empty?
     */
    isEmpty() :boolean;
    /**
     * Return the size of the Tree
     */
    cardinality() :number;
    /**
     * Is the element present in the tree?
     * @param e {D} The element to search
     */
    search(e :D) :boolean;
    /**
     * Add an element to the Tree, therefore must return a NonEmptyBST
     */
    insert(e :D) :NonEmptyBST<D>;
    /**
     * Traverse Tree in ascendent order and call the callback at each node.
     * @param cb {Function} The function executed at each node. The node root value is given as function parameter.
     */
    inOrderTraverse(cb :Function) :void;
    /**
     * Print Tree in descendent order
     */
    preOrderTraverse(cb :Function) :void;
}