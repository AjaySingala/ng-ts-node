// function successCallback(result) {
//     console.log("Resource found", result);
// }

// function failureCallback(error) {
//     console.error("Ooops. Something went wrong", error);
// }

// let url = "https://jsonplaceholder.typicode.com/users"
// fetchResource(url, successCallback, failureCallback);

// Promise.
console.log("Promise 1...");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 2000);
    // setTimeout(() => reject("Error!"), 2000);
});

// Wait 2s.
promise.then((value) => console.log("Promise 1:", value))
    .catch((error) => console.log("Promise 1: Error:", error));

// // Promise 2 with Resolve and Reject.
// console.log("Promise 2 with Resolve and Reject...");
// const numPromise = new Promise((resolve, reject) => {
//     const num = Math.random();
//     if (num >= 0.5) {
//         resolve("Promise is fulfilled!");
//     } else {
//         reject("Promise failed!");
//     }
// });

// numPromise.then((value) => console.log("Promise 2:", value))
//     .catch((error) => console.log("Promise 2: Error:", error));

// // Attach a Callback to a Promise.
// console.log("Attach callback to a promise...");
// function handleResolve(value) {
//     console.log("Promise callback:", value);
// }

// function handleReject(reason) {
//     console.error("Promise callback:", reason);
// }

// numPromise.then(handleResolve, handleReject);

// // Handle errors in a promise.
// console.log("Handle errors in a promise.");
// Promise.reject(new Error()).catch((reason) => console.error("Handle errors in a promise:", reason));

// // Promise.all().
// console.log("Promise.all()...");
// const promise1 = Promise.resolve(`First Promise's Value`);
// const promise2 = new Promise((resolve) =>
//   setTimeout(resolve, 3000, `Second Promise's Value`)
// );
// const promise3 = new Promise((resolve) =>
//   setTimeout(resolve, 2000, `Third Promise's Value`)
// );

// Promise.all([promise1, promise2, promise3]);

// // Output on the console

// // *Promise {<fulfilled>: Array(3)}*

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   values.forEach((value) => console.log(value));
// });

// // Promise.all() with reject.
// console.log("Promise.all() with reject...");
// const promise1 = Promise.resolve(`First Promise's Value`);
// // const promise1 = new Promise((resolve, reject) => 
// //     setTimeout(resolve, 4000, `First Promise's Value`)
// // );
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 3000, `First reason for rejection`)
// );
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(reject, 2000, `Second reason for rejection`)
// );
// console.time("Started...");
// Promise.all([promise1, promise2, promise3])
//     .then( (val) => console.log(val))
//     .catch( (err) => console.log(err))
//     .finally( () => console.timeEnd("Started..."));

// // Promise.race() #1.
// console.log("Promise.race() #1...")
// const promise1 = new Promise((resolve) =>
//   setTimeout(resolve, 3000, `First Promise's Value`)
// );
// const promise2 = new Promise((resolve) =>
//   setTimeout(resolve, 2000, `Second Promise's Value`)
// );
// const promise3 = Promise.resolve(`Third Promise's Value`);

// console.time("Started...");
// Promise.race([promise1, promise2, promise3])
//     .then( (val) => console.log(val))
//     .catch( (err) => console.log(err))
//     .finally( () => console.timeEnd("Started..."));

// // Promise.race() #2.
// console.log("Promise.race() #2...")
// const promise1 = new Promise((resolve) =>
//   setTimeout(resolve, 3000, `First Promise's Value`)
// );
// const promise2 = new Promise((resolve) =>
//   setTimeout(resolve, 2000, `Second Promise's Value`)
// );
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(reject, 1000, `Third reason for rejection`)
// );
// const promise4 = new Promise((resolve, reject) =>
//   setTimeout(reject, 4000, `Fourth reason for rejection`)
// );

// console.time("Started...");
// Promise.race([promise1, promise2, promise3, promise4])
//     .then( (val) => console.log(val))
//     .catch( (err) => console.log(err))
//     .finally( () => console.timeEnd("Started..."));

// // Promise.any().
// console.log("Promise.any()...");
// const promise1 = new Promise((resolve) =>
//     setTimeout(resolve, 3000, `First Promise's Value`)
// );
// const promise2 = new Promise((resolve) =>
//     setTimeout(resolve, 2000, `Second Promise's Value`)
// );
// const promise3 = Promise.reject(`Third Promise's Value`);

// console.time("Started...");
// Promise.any([promise1, promise2, promise3])
//     .then((val) => console.log(val))
//     .catch((err) => console.log(err))
//     .finally(() => console.timeEnd("Started..."));

// // Promise.any() with rejects.
// console.log("Promise.any() with rejects...");
// const promise1 = new Promise((resolve, reject) =>
//     setTimeout(reject, 3000, `First rejection reason`)
// );
// const promise2 = new Promise((resolve, reject) =>
//     setTimeout(reject, 2000, `Second rejection reason`)
// );
// const promise3 = Promise.reject(`Third rejection reason`);

// console.time("Started...");
// Promise.any([promise1, promise2, promise3])
//     .then((val) => console.log(val))
//     .catch((err) => console.log("Promise.any() generic error message...", err))
//     .finally(() => console.timeEnd("Started..."));

// // Output on the console

// // *Promise {<rejected>: Aggregate Error: All Promises were rejected}*
// console.time("Started 2...");
// Promise.any([promise1, promise2, promise3])
//     .catch(({ errors }) => console.log("Promise.any() array of errors...", errors))
//     .finally(() => console.timeEnd("Started 2..."));

// // Promise.allSettled().
// console.log("Promise.allSettled...");
// const promise1 = new Promise((resolve) =>
//     setTimeout(resolve, 3000, `First Promise's Value`)
// );
// const promise2 = new Promise((resolve) =>
//     setTimeout(resolve, 2000, `Second Promise's Value`)
// );
// const promise3 = Promise.reject(`Third Promise's Value`);

// Promise.allSettled([promise1, promise2, promise3])
//     .then((val) => console.log("Promise.allSettled #1:", val))
//     .catch((err) => console.log("Promise.allSettled #1:", err));

// // Output on the console

// // *Promise {<fulfilled>: Array(3)}*
// console.time("Started 2...");
// Promise.allSettled([promise1, promise2, promise3])
//     .then((val) => console.log("Promise.allSettled #2:", val))
//     .catch((err) => console.log("Promise.allSettled() generic error message...", err))
//     .finally(() => console.timeEnd("Started 2..."));

// // async-await.
// console.log("asyc-await...");
// // Ex1: Promise fulfilled: undefined.
// async function example1() {
//     // Return a value.
// }

// console.log("Example1:", example1());

// // Ex2. Promise fulfilled with return value.
// async function example2() {
//     return "Feels good to be an async function";
// }

// console.log("Example2:", example2());

// // Ex3: async with await.
// const timerPromise = (message) =>
//   new Promise((resolve) => setTimeout(resolve, 3000, message));

// async function asyncFunc() {
//   const result = await timerPromise("promise finished!");
//   console.log("asyncFunc with await:", result);
// }

// asyncFunc();

// // async-await with chaining.
// console.log("async-await with chaining...");
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((result) => console.log(result));

// // Output on the console

// // Array(10) [...]

// // Without chaining.
// async function fetchResource(url) {
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log("fetchResource: async-await without chaining:", result);
// }
// fetchResource("https://jsonplaceholder.typicode.com/users");

// // Handle Errors in Async/Await.
// async function fetchResource(url) {
//     try {
//         const response = await fetch(url);
//         const result = await response.json();
//         console.log("Success:", result);
//     } catch (error) {
//         console.error("ERROR OCCURED!", error);
//     } finally {
//         console.log("Finally:", "Operation finished!");
//     }
// }
// fetchResource("https://jsonplaceholder.typicode.com/users");
// // For catch:
// // fetchResource("https://jsonplaceholder.typicode.com");

// // Job Queue.
// console.log("Job Queue...");
// Promise.resolve("This is a resolved value").then(console.log);
// setTimeout(console.log, 0, "This is a value after the timeout");
// console.log("This is a normal log");
