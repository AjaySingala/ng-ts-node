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

/*
const allPromises3: Promise[
    PromiseSettledResult<number>,
    PromiseSettledResult<number>,
    PromiseSettledResult<number>
]
*/
const allPromises3 = Promise.allSettled([
    getPromise3(0, 0, false),       // 0s.
    getPromise3(1, 2000, false),    // 2s.
    getPromise3(2, 1000, true),     // 1s. (rejects).
]);

// Listen to allPromises3 resolution.
console.time('settled in...');
allPromises3.then((value) => {
    // (param) value: number[].
    console.log('Resolved.', value);
    
    value.forEach( result => {
        switch(result.status) {
            case 'fulfilled': {
                // result: PromiseFulfilledResult<number>.
                console.log('success =>', result.value);
                break;
            }
            case 'rejected': {
                // result: PRomiseRejectedResult.
                console.log('error =>', result.reason);
                break;
            }
        }
    });
}).catch((error) => {
    // (param) error: any.
    console.log('Rejected.', error);
}).finally(() => {
    console.timeEnd('settled in...');
});


