const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor() {
	  this.head = null;
	}
	root() {
	  return this.head;
	}
	add(data) {
	  this.head = insert(this.head, data);
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
	has(data) {
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
	  return search(this.head, data);
	}
	find(data) {
	  if(!this.head) return false;
	  let currentRoot = this.head;
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
	  if(!result){
		return null;
	  } else {
		return result;
	  }
	}
	remove(data) {
	  this.head = removeNode(this.head, data);
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
		  let min = root.right;
		  while (min.left) {
			min = min.left;
		  }
		  root.data = min.data;
		  root.right = removeNode(root.right, min.data);
		  return root;
		}
	  }
	}
	min() {
	  let node = this.head;
	  while (node.left) {
		node = node.left;
	  }
	  return node.data;
	}
	max() {
	  let node = this.head;
	  while (node.right) {
		node = node.right;
	  }
	  return node.data;
	}
  }

module.exports = {
  BinarySearchTree
};