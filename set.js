const mySet = function () {
	let collection = [];

	return {
		//check for element in a set
		has(element) {
			return collection.indexOf(element) !== -1;
		},
		values() {
			return collection;
		},

		add(element) {
			if (!this.has(element)) {
				collection.push(element);
				return true;
			}
			return false;
		},

		remove(element) {
			if (this.has(element)) {
				let elementIndex = collection.indexOf(element);
				collection.splice(1, index);
				return true;
			}
			return false;
		},
		size() {
			return collection.length;
		},

		union(otherSet) {
			let setUnion = new mySet();
			let firstSet = this.values();
			let secondSet = otherSet.values();

			firstSet.forEach((element) => {
				setUnion.add(element);
			});

			secondSet.forEach((element) => {
				setUnion.add(element);
			});

			return setUnion;
		},

		intersection(otherSet) {
			let intersectionSet = new mySet();
			let firstSet = this.values();

			firstSet.forEach((element) => {
				if (otherSet.has(element)) {
					intersectionSet.add(element);
				}
			});
			return intersectionSet;
		},

		difference(otherSet) {
			let differenceSet = new mySet();
			let firstSet = this.values();

			firstSet.forEach((element) => {
				if (!otherSet.has(element)) {
					differenceSet.add(element);
				}
			});
			return differenceSet;
		},

		subset(otherSet) {
			let firstSet = this.values();
			return firstSet.every((value) => {
				return otherSet.has(value);
			});
		},
	};
};

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setA.add("c");
setA.add("b");
setA.add("f");
setB.add("i");
setB.add("o");
setB.add("a");
console.log(setA.subset(setB));
console.log(setA.union(setB).values());
console.log(setA.intersection(setB).values());
console.log(setA.collection);
