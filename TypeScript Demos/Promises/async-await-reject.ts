// Resolve with a random int b/w 0 and 9.
const getRandomIntAsync2: () => Promise<number> = async ()  => {
    return parseInt((Math.random() * 10).toFixed(0));
};

// Returns a promise of type "Promise<boolean>". Resolve with a boolean value.
// const isEven2: (answer: boolean) => Promise<boolean>.
const isEven2 = async (answer: boolean) => {
    // const value: number.
    const value = await getRandomIntAsync2();

    // Reject if the value is 0.
    if(value === 0) {
        throw new Error('Can\'t work with 0.');
    }
    
    // const isEven: boolean.
    const isEven = value % 2 === 0;

    // return valis is "boolean".
    return isEven === answer;
};

// Listen to promise resolution.
isEven2(true).then((value) => {
    // (param) value: boolean.
    console.log(value === true ? "Lucky :)" : "Unlucky :(", value);
}).catch( (error :Error) => {
    // (parqm) error: Error.
    console.log('Rejected:', error);
}).finally( () => {
    console.log('Completed.');
});