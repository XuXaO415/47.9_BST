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
    // if (node.left) inOrderTraversal(node.left);
    // console.log(node.val);
    // if (node.right) inOrderTraversal(node.right);

    if (node.left) {
      this.inOrderTraversal(node.left);
    }
    console.log(node.val);
    if (node.right) {
      this.inOrderTraversal(node.right);
    }
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

  // insert(val) {
  //   if (this.root === null) {
  //     this.root = new Node(val);
  //     return this;
  //   }

  //   let currentNode = this.root;
  //   while (currentNode) {
  //     if (val < currentNode.val) { // if val is less than currentNode.val, go left
  //       if (!currentNode.left) { // if there is no left child 
  //         currentNode.left = new Node(val); // make a new node and set it to currentNode.left
  //         return this;
  //       }
  //       currentNode = currentNode.left;
  //     } else {
  //       if (!currentNode.right) { // if there is no right child
  //         currentNode.right = new Node(val); // make a new node and set it to currentNode.right
  //         // console.log(`Node ${val} was inserted into the binary tree`);
  //         return this;
  //       }
  //       currentNode = currentNode.right;
  //     }
  //   }
  // }


  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val > val) {
        if (!currentNode.left) {
          currentNode = currentNode.left = new Node(val);
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode = currentNode.right = new Node(val);
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  // insertRecursively(val) {
  //   let newNode = new Node(val);
  //   if (!this.root) {
  //     this.root = newNode;
  //     return this;
  //   }
  //   let currentNode = this.root;
  //   while (currentNode) {
  //     if (val < currentNode.val) {
  //       if (!currentNode.left) {
  //         currentNode.left = newNode;
  //         return this;
  //       }
  //       currentNode = currentNode.left;
  //     } else {
  //       if (!currentNode.right) {
  //         currentNode.right = newNode;
  //         return this;
  //       }
  //       currentNode = currentNode.right;
  //     }
  //   }
  // }

  // insertRecursively(val) {
  //   if (!this.root) {
  //     this.root = new Node(val);
  //     return this;
  //   }
  //   let currentNode = this.root;
  //   while (currentNode) {
  //     if (val < currentNode.val) {
  //       if (!currentNode.left) {
  //         currentNode.left = new Node(val);
  //         return this;
  //       }
  //       currentNode = currentNode.left;
  //     } else {
  //       if (!currentNode.right) {
  //         currentNode.right = new Node(val);
  //         return this;
  //       }
  //       currentNode = currentNode.right;
  //     }
  //   }
  // }

  //http://treeindev.net/article/recursive-functions
  //https://www.geeksforgeeks.org/binary-search-tree-data-structure/?ref=shm


  insertRecursively(val, node = this.root) {
    if (node === null) {
      this.root = new Node(val); // make a new node and set it to this.root
      return this;

    } else if (val < node.val) { // if val is less than node.val, go left
      if (!node.left) { // if there is no left child
        node.left = new Node(val); // make a new node and set it to node.left
        return this;
      }
      this.insertRecursively(val, node.left); // else, keep going left
    } else { // if val is greater than node.val, go right
      if (!node.right) { // if there is no right child
        node.right = new Node(val); // make a new node and set it to node.right
        return this;
      }
      this.insertRecursively(val, node.right); // else, keep going right
    }
  }



  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  // find(val) {
  //   if (!this.root) return undefined;
  //   let currentNode = this.root;
  //   while (currentNode) {
  //     if (val === currentNode.val) {
  //       return currentNode;
  //     } else if (val < currentNode.val) {
  //       currentNode = currentNode.left;
  //     } else {
  //       currentNode = currentNode.right;
  //     }
  //   }
  //   return undefined;
  // }

  // find(val) {
  //   let currentNode = this.root;
  //   while (currentNode) {
  //     if (currentNode.val === val) return currentNode;
  //     if (val < currentNode.val) currentNode = currentNode.left;
  //     else currentNode = currentNode.right;
  //   }
  //   return undefined;
  // }

  find(val) {
    let node = this.root;
    while (node) {
      if (node.val === val) return node;
      if (val < node.val) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node === null) return undefined;
    if (node.val === val) return node;
    if (val < node.val) {
      return this.findRecursively(val, node.left);
    } else {
      return this.findRecursively(val, node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  // preOrderTraversal(node = this.root) {
  //   console.log(node.val);
  //   if (node.left) preOrderTraversal(node.left);
  //   if (node.right) preOrderTraversal(node.right);
  // }


  dfsPreOrder(node = this.root, arr = []) {
    console.log(node.val);
    arr.push(node.val);
    if (node.left) this.dfsPreOrder(node.left, arr);
    if (node.right) this.dfsPreOrder(node.right, arr);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  // inOrderTraversal(node = this.root) {
  // if (node.left) inOrderTraversal(node.left);
  // console.log(node.val);
  // if (node.right) inOrderTraversal(node.right);

  //   if (node.left) {
  //     this.inOrderTraversal(node.left);
  //   }
  //   console.log(node.val);
  //   if (node.right) {
  //     this.inOrderTraversal(node.right);
  //   }
  // }



  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  // postOrderTraversal(node = this.root) {
  //   if (node.left) postOrderTraversal(node.left);
  //   if (node.right) postOrderTraversal(node.right);
  //   console.log(node.val);
  // }


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

console.log(binarySearchTree.insert(15));
console.log(binarySearchTree.insert(20));
console.log(binarySearchTree.insert(10));
console.log(binarySearchTree.insert(12));
console.log(binarySearchTree.root.value); // 15
console.log(binarySearchTree.root.right.value); // 20
console.log(binarySearchTree.root.left.right.value); // 12


binarySearchTree = new BinarySearchTree();
console.log();
console.log(binarySearchTree.insertRecursively(15));
console.log(binarySearchTree.insertRecursively(20));
console.log(binarySearchTree.insertRecursively(10));
console.log(binarySearchTree.insertRecursively(12));
console.log(binarySearchTree.root.value); // 15
console.log(binarySearchTree.root.right.value); // 20
console.log(binarySearchTree.root.left.right.value); // 12


// foundNode = binarySearchTree.findIteratively(120);
// console.log(foundNode()); // undefined