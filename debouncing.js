// debouncing in javascript
// It is way to reduce network calls/ function calls.

let counter = 1;
const getData = () => {
	// call api and get data
	console.log("Fetching data...." + counter++);
};

const debouncing = (fn, delay) => {
	let timer;
	return function (...args) {
		// To clear timeout
		clearTimeout(timer);
		// after every 300 milisecond, getData is called.
		timer = setTimeout(() => {
			fn();
		}, delay);
	};
};

// For every key up, seagh is called.
const search = debouncing(getData, 300);
