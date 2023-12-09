// Higer order function
// take function as argument
// map, filter, reduce

let phone = {
	"Redmi": 10000,
	"Samsung A2": 15000,
	"IPhone 15": 100000,
	"Iphone 14": 80000,
	"Iphone 13": 70000,
	"Iphone 12": 75000,
};

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// example filter
// return list of phone having price > 60000
let filterPhone = Object.entries(phone).filter((p) => {
	return p[1] <= 70000;
});

console.log(filterPhone);

// polyfill for filter
// filter is avaliable for all array (so have to attched with array prototype to make it available for polyfill)
Array.prototype.myFilter = function (fn) {
	let obj = this;
	let newArray = [];
	obj.forEach((e) => {
		if (fn(e) === true) newArray.push(e);
	});
	return newArray;
};

let filter = Object.entries(phone).myFilter((p) => p[1] <= 70000);
console.log(filter);

console.log(num.filter((e) => e % 3 === 0));
let filter2 = num.myFilter((e) => e % 3 === 0);
console.log(filter2);

// example map
// return a list of squares of each number in num
let arr1 = num.map((e) => {
	return e * e;
});
console.log(arr1);

// polyfill for map
Array.prototype.myMap = function (fn) {
	let newArray = [];
	this.forEach((e) => {
		newArray.push(fn(e));
	});

	return newArray;
};

let res1 = num.map((e) => e * 3);
console.log(res1);
let res = num.myMap((e) => e * 3);
console.log(res);

// reduce method takes two arguments
// 1. function which again takes two parameters
//      1. accumulator (result)
//      2. current value in arr
// 2. intial value
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = arr.reduce(function (sum, curr) {
	return sum * curr;
}, 1);

console.log(ans);

// polyfill for reduce
Array.prototype.myReduce = function (fn, start) {
	let accumulator = start;
	this.forEach((e) => {
		accumulator = fn(accumulator, e);
	});
	return accumulator;
};

let ans1 = arr.myReduce(function (sum, curr) {
	return sum * curr;
}, 1);
console.log(ans1);
