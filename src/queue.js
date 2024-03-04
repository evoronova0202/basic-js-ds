const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }
  root() {
    return this.rootTree;
  }
  add( data ) {
    this.rootTree = insert(this.rootTree, data);
    function insert(node, data) {
      if (node === null) {
        return new Node(data);
      }
      if (data < node.data) {
        node.left = insert(node.left, data);
      } else if (data > node.data) {
        node.right = insert(node.right, data);
      }
      return node;
    }
  }
  has( data ) {
    function search(node, data) {
      if (node === null) {
        return false;
      }
      if (data === node.data) {
        return true;
      } else if (data < node.data) {
        return search(node.left, data);
      } else {
        return search(node.right, data);
      }
    }
    return search(this.rootTree, data);
  }
  find( data ) {
    if(!this.rootTree) return false;
    let currentRoot = this.rootTree;
    let result = false;
    while(currentRoot && !result) {
      if(data < currentRoot.data) {
        currentRoot = currentRoot.left;
      } else if(data > currentRoot.data) {
        currentRoot = currentRoot.right;
      } else {
        result = currentRoot;
      }
    }
    return (!result)? null : result;
  }
  remove( data ) {
    this.rootTree = removeNode(this.rootTree, data);
    function removeNode(root, data) {
      if (data > root.data) {
        root.right = removeNode(root.right, data);
        return root;
      } else if (data < root.data) {
        root.left = removeNode(root.left, data);
        return root;
      } else {
        if (!root.left && !root.right) return null;

        if (!root.left) {
          return root.right;
        }
        if (!root.right) {
          return root.left;
        }

        let minRight = root.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        root.data = minRight.data;
        root.right = removeNode(root.right, minRight.data);
        return root;
      }
    }
  }
  min() {
    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }
  max() {
    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  Queue
};
