"use strict";

class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	add(data) {
		const node = this.root;
		// console.log(node);
		if (node === null) {
			this.root = new Node(data);
			return;
		} else {
			return this.search(node, data);
		}
	}
	search(node, data) {
		if (data < node.data) {
			if (node.left === null) {
				node.left = new Node(data);
			} else if (node.left !== null) {
				return this.search(node.left, data);
			}
		} else if (data > node.data) {
			if (node.right === null) {
				node.right = new Node(data);
			} else if (node.right !== null) {
				return this.search(node.right, data);
			}
		} else {
			return null;
		}
	}

	remove(node = this.root, data) {
		console.log(node);

		if (node == null) {
			return null;
		}

		if (data === node.data) {
			//if node has no child
			if (node.left === null && node.right === null) {
				return null;
			}
			//if node has no left child
			if (node.left === null) {
				return node.right;
			}
			//if node has no right child
			if (node.right === null) {
				return node.left;
			}
			/*
		        If node has two children, look for the child node with the least
		        value greater than the node value. This will be located on
		        the leftmost child of the right subtree of the node in question
		    */

			//branch off to the left subtree
			let tempNode = node.right;
			// console.log(tempNode);
			while (tempNode.left !== null) {
				//traverse to the leftmost child
				tempNode = tempNode.left;
			}
			//replace the node value/data with the leftmost child successor
			node.data = tempNode.data;
			//remove the data/value after been used as a replacement
			node.right = this.remove(node.right, tempNode.data);
			return node;
		} else if (data < node.data) {
			//use the left node as a reference to search for the data/value
			node.left = this.remove(node.left, data);
			return node;
		} else {
			//use the right node as a reference to search for the data/value
			node.right = this.remove(node.right, data);
			return node;
		}
	}

	findMin() {
		let current = this.root;

		//Since the left node is always <= parent node, the lowest value leaf will be on the left node
		while (current.left !== null) {
			current = current.left;
		}

		return current.data;
	}

	findMax() {
		let current = this.root;

		//Since the right node is always >= parent node, the highest value leaf will be on the right node
		while (current.right !== null) {
			current = current.right;
		}

		return current.data;
	}

	find(data) {
		let current = this.root;

		while (current.data !== data) {
			if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
			if (current === null) {
				return null;
			}
		}
		return current;
	}

	isPresent(data) {
		let current = this.root;
		while (current) {
			if (data === current.data) {
				return true;
			}
			if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
		}
		return false;
	}
}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
// console.log(bst.root);
bst.remove(undefined, 4);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.findMax());
console.log(bst.isPresent(4));
console.log(bst.root);
