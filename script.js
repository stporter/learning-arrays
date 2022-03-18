const a = ['A', 'B', 'C', 'D'];
// this will return A
console.log(a[0]);

// this will return B
console.log(a[1]);

// this will return C
console.log(a[2]);

// this will return D
console.log(a[3]);

// this will return undefined
console.log(a[4]);

const a = ['A', 'B', 'C', 'D'];
// this will return ['A', 'B', 'C', 'D']
console.log(a);

const a = ['A', 'B', 'C', 'D'];
// this will return 4 (length of the array)
console.log(a.length);

const a = ['A', 'B', 'C', 'D'];
// this will add "E" to the end of the array (push adds an element to the end of an array)
a.push('E');

const a = ['A', 'B', 'C', 'D'];
// this will push a new array into the first array --- index 4 will be array(2)
// 0: 1
// 1: 2
// length: 2
// THIS IS A NESTED ARRRAY

a.push([1, 2]);

const a = [
	['A', 'B'],
	[1, 2],
];
// this will give 2 different  nested arrays within one array
console.log(a);

const a = [
	['A', 'B'],
	[1, 2],
];
// this willl return B
console.log(a[0][1]);
// 0 is targeting the first array and then 1 is targeting the second element within the first array

const a = [
	['A', 'B'],
	[1, 2],
];

a[0] = 1;

// this will change the first array and make it = to 1
console.log(a);
