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
    const sum = number1 * number1 + number2 * number2;
    return sum * 2;
};


const result = multiply(5, 5);
console.log(result);


//function expression

function multiplyDeclaration(number1, number2) {
    const sum = number1 * number1 + number2 * number2;
    return sum * 2;
};


const Result = multiplyDeclaration(5, 5);
console.log(Result);


//arrow function

const multiplyArrow = () => {
    const sum = number1 * number1 + number2 * number2;
    return sum * 2;

}

const arrowResult = multiplyDeclaration(5, 5);
console.log(arrowResult);
