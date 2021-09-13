(() => {
    console.clear();
    const currentdate = new Date();
    console.log(

        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds() +
        " year " +
        currentdate.getUTCFullYear()


    )
})();

(() => {
    console.clear();
    const currentdate = new Date();
    console.log(

        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds() +
        " year " +
        currentdate.getUTCFullYear()


    )
})();

console.log('Functions: three ways to write them: exercise')

//function declaration

const multiply = function (number1, number2) {
    const number1squared = number1 * number1;
    const number2squared = number2 * number2;
    const sum = number1squared + number2squared;
    const sumsquared = sum * sum;
    return sumsquared;
};


const result = multiply(5, 5);
console.log(result);


//function expression

function multiplyDeclaration(number1, number2) {
    const number1squared = number1 * number1;
    const number2squared = number2 * number2;
    const sum = number1squared + number2squared;
    const sumsquared = sum * sum;
    return sumsquared;
};


const Result = multiplyDeclaration(5, 5);
console.log(Result);


//arrow function

const multiplyArrow = (number1, number2) => {
    const number1squared = number1 * number1;
    const number2squared = number2 * number2;
    const sum = number1squared + number2squared;
    const sumsquared = sum * sum;
    return sumsquared;

}

const arrowResult = multiplyArrow(5, 5);
console.log(arrowResult);
