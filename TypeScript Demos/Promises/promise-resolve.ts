// Returns a random int b/w 0 and 9.
const getRandomIntResolve = (): string => {
    return (Math.random() * 10).toFixed(0);
};

// Get random integer of type 'number'.
const value = parseInt(getRandomIntResolve());

// const numPromise: Promise<number>.
const numPromise = Promise.resolve(value);

// Listen to the promise resolution.
numPromise.then( (value) => {
    // (param) value: number.
    console.log('Resolved:', value + 1);
}).catch( (error) => {
    console.log('Rejected.', error);
});
