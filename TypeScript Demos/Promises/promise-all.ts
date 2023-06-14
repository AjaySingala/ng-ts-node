// A function that returns a delayed promise.
const getPromise = (
    value: number, delay: number, fail: boolean
): Promise<number> => {
    return new Promise<number>( (resolve, reject) => {
        setTimeout( 
            () => fail ? reject(value) : resolve(value),
            delay
        );
    });
};

//const allPromises: Promise<number[]>.
const allPromises = Promise.all<number>( [
    getPromise(0,0,false),      // 0s.
    getPromise(1,2000,false),    // 2s.
    getPromise(2,1000,false),    // 1s.
    //getPromise(3,1500,true),    // 1.5s. Rejects.
]);

// Listen to allPromises resolution.
console.time('settled in...');
allPromises.then( (value) => {
    // (param) value: number[].
    console.log('Resolved.', value);
}).catch((error) => {
    // (param) error: any.
    console.log('Rejected.', error);
}).finally( () => {
    console.timeEnd('settled in...');
});


