try {
    let numerator = 10;

    let denominator = 0;
    let result = numerator/denominator;
    console.log("Result of division: "+result);
} catch(error) {
    console.log("An error occurred: "+ error.message);
} finally {
    console.log("This line will always be executed.");
}
console.log("The program continues to run after the try-catch-finally block");