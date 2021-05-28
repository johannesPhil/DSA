//A queue is similar to a Stack with the except for the fact that the first item comes out first

const Queue = function () {
	const collection = [];

	return {
		print() {
			console.log(collection);
		},
		// Add an item to the queue
		enqueue(item) {
			return collection.push(item);
		},

		//remove an item from the beginning of a queue
		dequeue() {
			return collection.shift();
		},

		// Check the first item in the queue
		front() {
			return collection[0];
		},

		// Check the last item in the queue
		rear() {
			return collection[collection.length - 1];
		},

		//Check if a queue is empty
		isEmpty() {
			return collection.length === 0;
		},
	};
};

const newQueue = new Queue();

console.log(newQueue.isEmpty());
newQueue.enqueue("4");
newQueue.enqueue("1");
newQueue.enqueue("c");
newQueue.enqueue("n");
newQueue.print();
console.log(newQueue.front());
console.log(newQueue.rear());
newQueue.dequeue();
newQueue.print();
newQueue.enqueue("y");
newQueue.print();
console.log(newQueue.front());
console.log(newQueue.rear());
