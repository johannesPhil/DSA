const word = "racecar";

//Using the array reverse method
const wordArray = word.split("");
const wordArrayReverse = word.split("").reverse();
console.log(wordArray, wordArrayReverse);

if (wordArray.every((val, index) => val === wordArrayReverse[index])) {
	console.log(`${word} is a palindrome`);
} else {
	console.log(`${word} is not a palindrome`);
}

//Using the stack method
const stack = [];
let reversed = "";

for (let i = 0; i < word.length; i++) {
	stack.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
	reversed += stack.pop();
}
console.log({
	word: { Type: typeof word, Content: word },
	reversed: { Type: typeof reversed, Content: reversed },
});

if (word === reversed) {
	console.log(`${word} is a palindrome`);
} else {
	console.log(`${word} is not a palindrome`);
}
