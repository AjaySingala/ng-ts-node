// Promises Syntax:
/*
const myPromise = new Promise((resolve, reject) => {
  Do some asynchronous operation
  If the operation is successful, call resolve with the result
  If the operation fails, call reject with an error object
});

myPromise
  .then((result) => {
    Handle the successful result
  })
  .catch((error) => {
    Handle the error
  });
*/

// Returns a random int b/w 0 and 9.
const getRandomInt = (): string => {
    return (Math.random() * 10).toFixed(0);
};

// Resolve with an 'even' integer.
const findEven = new Promise<number>((resolve, reject) => {
    setTimeout(function (): void {
        // Convert string to number.
        const value = parseInt(getRandomInt());
        if (value % 2 === 0) {
            resolve(value);
        }
        else {
            reject("Odd number found. " + value);
        }
    }, 1000);
});

// Listen to the promise resolution.
findEven.then((value) => {
    // (param) value: number.
    console.log('Resolved:', value);
}).catch((error) => {
    // (param) error: any.
    console.log('Rejected:', error);
}).finally( () => {
    console.log('Completed.');
});
