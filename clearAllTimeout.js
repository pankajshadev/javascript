// Implementing clearAllTimeout

// features -> clearAllTimeout will clear all setTimeout
// approach -> setTimeout returns an id. SO, we can store these id and clearAllTimeout will clear all of them.

// creating a golbal arr to store all settimeout ids
window.allTimeoutIds = [];

// We have to modify the setTimeout
const originalSetTimeout = window.setTimeout;

// overriding set time out
window.setTimeout = function (fn, delay) {
	const id = originalSetTimeout(fn, delay);
	allTimeoutIds.push(id);
	return id;
};

window.clearAllTimeout = function () {
	while (allTimeoutIds.length) {
		clearTimeout(allTimeoutIds.pop());
	}
};

//  not using window
const timeWrapper = () => {
    const timeOutIds = [];

    const mySetTimeout = function (fn, delay) {
        const id = setTimeout(fn, delay);
        timeOutIds.push(id);
        return id;
    }

    const clearAllTimeout = function () {
        while (timeOutIds.length) {
            clearTimeout(timeOutIds.pop());
        }
    }

    return [timeOutIds, mySetTimeout, clearAllTimeout];
}

const [timeOutIds, mySetTimeout, clearAllTimeout] = timeWrapper();



mySetTimeout(() => {
	console.log("1");
}, 1000);

mySetTimeout(() => {
	console.log("2");
}, 2000);

// mySetTimeout(() => {
//     clearAllTimeout();
// }, 3000);

mySetTimeout(() => {
	console.log("3");
}, 3000);

console.log(timeOutIds)
clearAllTimeout()