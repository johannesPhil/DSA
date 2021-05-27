/*
			Lesson on the `this` keyword:	
	1. `this` in a function points to global object which will return `undefined` and will scream an error in strict mode
	2. To continue, convert the function call to a constructor call using the `new` operator which creates a 
		new object which is then used as the `this` reference point
*/

//Implementation with `this`
const ThisStack = function () {
	this.store = {};
	this.count = 0;

	this.push = (value) => {
		this.store[this.count] = value;
		this.count++;
	};

	this.pop = () => {
		if (this.count <= 0) {
			return;
		}

		this.count--;
		let result = this.store[this.count];
		delete this.store[this.count];
		return result;
	};

	this.size = () => {
		return this.count;
	};

	this.peek = () => {
		return this.store[this.count - 1];
	};
};

//Implementation without `this`
const Stack = function () {
	let store = {};
	let count = 0;

	return {
		push(value) {
			store[count] = value;
			count++;
		},

		pop() {
			if (count <= 0) {
				return;
			}

			count--;
			let result = store[count];
			delete store[count];
			return result;
		},

		size() {
			return count;
		},

		peek() {
			return store[count - 1];
		},
	};
};

//let stack = new ThisStack();
let stack = new Stack();

stack.push(1);
stack.push(6);
stack.push(2);
stack.push(89);
stack.push(19);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
