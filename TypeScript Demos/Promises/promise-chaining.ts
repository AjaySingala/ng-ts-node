// Returns a random int b/w 0 and 9.
const getRandomIntChain = (): string => {
    return (Math.random() * 10).toFixed(0);
};

// Resolve with an 'even' integer.
const findEvenChain = new Promise<number>((resolve, reject) => {
    setTimeout(function (): void {
        // Convert string to number.
        const value = parseInt(getRandomIntChain());
        if (value % 2 === 0) {
            resolve(value);
        }
        else {
            reject("Odd number found. " + value);
        }
    }, 1000);
});

// Listen to the promise resolution.
findEvenChain.then((value) => {
    // (param) value: number.
    console.log('Resolved-1:', value + 1);
    return `${value + 1}`;
}).then( (value) => {
    // (param) value: string.
    console.log('Resolved-2:', value + 1);
}).catch((error) => {
    // (param) error: any.
    console.log('Rejected:', error);
}).finally(() => {
    console.log('Completed.');
});
