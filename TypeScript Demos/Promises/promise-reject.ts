// Sample error msg.
const message = 'Oops! Something went wrong.';

// const oopsPromise: Promise<never>.
const oopsPromise = Promise.reject(message);

// Listen to the promise resolution.
oopsPromise.then( (value) => {
    // (param) value: never.
    console.log('Resolved.', value);
}).catch((error) => {
    console.log('Rejected.', error);
});