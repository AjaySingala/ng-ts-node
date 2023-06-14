// Resolve with a random int b/w 0 and 9.
const getRandomIntAsync: () => Promise<number> = async ()  => {
    return parseInt((Math.random() * 10).toFixed(0));
};

// Returns a promise of type "Promise<boolean>".
// const isEven: (answer: boolean) => Promise<boolean>.
const isEven = async (answer: boolean) => {
    // const value: number.
    const value = await getRandomIntAsync();

    // const isEven: boolean.
    const isEven = value % 2 === 0;

    // return valis is "boolean".
    return isEven === answer;
};

// Listen to promise resolution.
isEven(true).then((value) => {
    // (param) value: boolean.
    console.log(value === true ? "Lucky :)" : "Unlucky :(", value);
}).catch( (error) => {
    // (parqm) error: any.
    console.log('Rejected:', error);
}).finally( () => {
    console.log('Completed.');
});