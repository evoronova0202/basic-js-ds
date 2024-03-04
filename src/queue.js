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
class Queue {
	constructor () {
	  this.length = 0;
	  this.rootTree = null;
	  this.tail = null;
	  this.node = null;
	}
	getUnderlyingList() {
	  return this.rootTree;
	}
	enqueue(value) {
	  this.node = new ListNode(value);
	  if (this.rootTree) {
		this.tail.next = this.node;
		this.tail = this.node;
	  } else {
		this.rootTree = this.node;
		this.tail = this.node;
	  }
	  ++this.length;
	}
	dequeue() {
	  const queue = this.rootTree;
	  this.rootTree = this.rootTree.next;
	  --this.length;
	  return queue.value;
	}
  }

module.exports = {
  Queue
};
