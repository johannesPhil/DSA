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

	isPresent(data) {
		let current = this.root;
		while (current) {
			if (data === current.data) {
				return data;
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

bst.add(45);
bst.add(13);
bst.add(21);
bst.add(19);
bst.add(42);
bst.add(1);
console.log(bst.isPresent(45));
