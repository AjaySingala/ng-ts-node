// A function that returns a delayed promise.
const getPromise3 = (
    value: number, delay: number, fail: boolean
): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(
            () => fail ? reject(value) : resolve(value),
            delay
        );
    });
};

// const fastestPromise: Promise<number>
const fastestPromise = Promise.race<number>([
    getPromise3(0, 500, false),     // 0.5s.
    getPromise3(1, 2000, false),    // 2s.
    getPromise3(2, 1000, true),     // 1s. (rejects).
]);

// Listen to allPromises3 resolution.
console.time('settled in...');
fastestPromise.then((value) => {
    // (param) value: number.
    console.log('Resolved.', value);
}).catch((error) => {
    // (param) error: any.
    console.log('Rejected.', error);
}).finally(() => {
    console.timeEnd('settled in...');
});


