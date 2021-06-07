"use strict";

const PriorityQueue = function () {
	const collection = [];

	return {
		print() {
			console.log(collection);
		},
		enqueue(item) {
			if (this.isEmpty) {
				collection.push(item);
			} else {
				let added = false;

				for (let i = 0; i < collection.length; i++) {
					if (item[1] < collection[i][1]) {
						collection.splice(i, 0, item);
						added = true;
						break;
					}
				}
				if (!added) {
					collection.push(item);
				}
			}
		},
		dequeue() {
			return collection.shift();
		},
		front() {
			return collection[0];
		},
		rear() {
			return collection[collection.length - 1];
		},
		size() {
			return collection.length;
		},
		isEmpty() {
			return collection.length === 0;
		},
	};
};

let pq = new PriorityQueue();

pq.enqueue(["John", 2]);
pq.enqueue(["Peter", 1]);
pq.enqueue(["Philip", 3]);
pq.print();
