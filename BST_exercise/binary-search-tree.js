class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }


  inOrderTraversal(node = this.root) {
    if (node.left) inOrderTraversal(node.left);
    console.log(node.val);
    if (node.right) inOrderTraversal(node.right);
  }

  preOrderTraversal(node = this.root) {
    console.log(node.val);
    if (node.left) preOrderTraversal(node.left);
    if (node.right) preOrderTraversal(node.right);
  }

  postOrderTraversal(node = this.root) {
    if (node.left) postOrderTraversal(node.left);
    if (node.right) postOrderTraversal(node.right);
    console.log(node.val);
  }


  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  //This function should insert a node in a binary tree. It should return the BinarySearchTree and should be solved using iteration.

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) { // if val is less than currentNode.val, go left
        if (!currentNode.left) { // if there is no left child 
          currentNode.left = new Node(val); // make a new node and set it to currentNode.left
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) { // if there is no right child
          currentNode.right = new Node(val); // make a new node and set it to currentNode.right
          // console.log(`Node ${val} was inserted into the binary tree`);
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;

binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.root.value // 15
binarySearchTree.root.right.value // 20
binarySearchTree.root.left.right.value // 12


binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12);
binarySearchTree.root.value // 15
binarySearchTree.root.right.value // 20
binarySearchTree.root.left.right.value // 12