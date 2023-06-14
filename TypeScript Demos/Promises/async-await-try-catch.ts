// Resolve with a random int b/w 0 and 9.
// const getRandomIntAsync3: () => Promise<number>.
const getRandomIntAsync3: () => Promise<number> = async () => {
    const value = parseInt((Math.random() * 10).toFixed(0));

    // Reject if value is 0.
    if (value === 0) {
        throw new Error('Can\'t work with 0.');
    }

    return value;
};

// Returns a promise of type "Promise<boolean>". Resolve with a boolean value.
// const isEven2: (answer: boolean) => Promise<boolean>.
const isEven3 = async (answer: boolean) => {
    try {
        // const value: number.
        const value = await getRandomIntAsync3();

        // const isEven: boolean.
        const isEven = value % 2 === 0;

        // return valis is "boolean".
        return isEven === answer;
    } catch( e) {
        console.log('getRandomIntAsync3 rejection:', e.message);
        return false;
    }
};

// Listen to promise resolution.
isEven3(true).then((value) => {
    // (param) value: boolean.
    console.log(value === true ? "Lucky :)" : "Unlucky :(", value);
}).catch((error: Error) => {
    // (parqm) error: Error.
    console.log('Rejected:', error);
}).finally(() => {
    console.log('Completed.');
});