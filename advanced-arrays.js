const items = [
	{ name: 'Bike', price: 100 },
	{ name: 'TV', price: 200 },
	{ name: 'Album', price: 10 },
	{ name: 'Book', price: 5 },
	{ name: 'Phone', price: 500 },
	{ name: 'Computer', price: 1000 },
	{ name: 'Keyboard', price: 25 },
];

const filteredItems = items.filter((item) => {
	return item.price <= 100;
});

// this will return all items less than or equal to 100

console.log(filteredItems);

const itemNames = items.map((item) => {
	return item.name;
});

// this will create a new array and only return all names within the original object
console.log(itemNames);

const foundItem = items.find((item) => {
	return item.name === 'Book';
});

// this will return the item that has the name of "Book" -- will return the very first item that it finds in the array that returns true for the statement that you pass inside of this find function

console.log(foundItem);

// this will work very similarly to a for loop but it is going to take a function instead. So for every single item it is going to do what is inside of the function.

items.forEach((item) => {
	console.log(item.name);
});

// instead of returning a brand new array the "some" function will return true or false. Checks to see if ANYTHING in the array returns true and if it does, the entire array returns true. If nothing within the array is true, this will return false

const hasInexpensiveItems = items.some((item) => {
	return item.price <= 100;
});

console.log(hasInexpensiveItems);

// "every" is going to check if EVERY item in the array is less than $100 - if every item is less than $100 this will return true - if even  one item is over $100 then this will return false

const hasInexpensiveItems = items.every((item) => {
	return item.price <= 100;
});

console.log(hasInexpensiveItems);

// "reduce" - runs a function on every single item inside of an array - the first method of that function is to be whatever the previous iteration of this array returned - the second item is the actual item in the array - the current total is going to start on the very irst iteration with whatever we  pass in as the second perameter. the current total is going to   start on the very first ieration with whatever we pass in as the second so in this case, 0

// the first time the reduce runs we get 0 and the bike item so it just does 100 plus 0 which returns 100

// the second time this gets ran, the return value of 100 gets put into this function as the current total and the next item (TV) is the item value.

// so it oes 200 plus the current total of 100 which is 300 and puts this back in for the current total and it does this until we get to the end of the item list

const total = items.reduce((currentTotal, item) => {
	return item.price + currentTotal;
}, 0);

console.log(total);

// "includes" method does not take a function, it takes a single argument. This is going to check if whatever we pass in the includes method is inside of the array. This will return true as the number two is in the array. If we passed in "7" this would return false as the array does not include the number 7. Checks if an array has a certain value

const items = [1, 2, 3, 4, 5];

const includesTwo = items.includes(2);

console.log(includesTwo);
