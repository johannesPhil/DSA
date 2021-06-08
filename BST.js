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
			this.search(node, data);
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
}
