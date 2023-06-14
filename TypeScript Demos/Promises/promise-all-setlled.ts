// A function that returns a delayed promise.
const getPromise2 = (
    value: number, delay: number, fail: boolean
): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(
            () => fail ? reject(value) : resolve(value),
            delay
        );
    });
};

/*
const allPromises2: Promise[
    PromiseSettledResult<number>,
    PromiseSettledResult<number>,
    PromiseSettledResult<number>
]
*/
const allPromises2 = Promise.allSettled([
    getPromise2(0, 0, false),       // 0s.
    getPromise2(1, 2000, false),    // 2s.
    getPromise2(2, 1000, true),     // 1s. (rejects).
]);

// Listen to allPromises2 resolution.
console.time('settled in...');
allPromises2.then((value) => {
    // (param) value: number[].
    console.log('Resolved.', value);
}).catch((error) => {
    // (param) error: any.
    console.log('Rejected.', error);
}).finally(() => {
    console.timeEnd('settled in...');
});


