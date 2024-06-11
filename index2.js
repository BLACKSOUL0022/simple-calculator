////Buttons
// Operations
let ac = document.getElementById("restart");
let posNeg = document.getElementById("posNeg");
let percent = document.getElementById("percent");
let divide = document.getElementById("divide");
let multiplication = document.getElementById("multiplication");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let equals = document.getElementById("equals");
let point = document.getElementById("point");

//Numbers
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

//Screen
let operations = document.getElementById("operations");
let result = document.getElementById("result");

////Act_buttons
//Act_operations
ac.addEventListener('click', function() {
    what_to_do("ac");
});
posNeg.addEventListener('click', function() {
    what_to_do("posNeg");
});
percent.addEventListener('click', function() {
    what_to_do("percent");
});
divide.addEventListener('click', function() {
    what_to_do("divide");
});
multiplication.addEventListener('click', function() {
    what_to_do("multiplication");
});
minus.addEventListener('click', function() {
    what_to_do("minus");
});
plus.addEventListener('click', function() { 
    what_to_do("plus");
});
equals.addEventListener('click', function() {
    what_to_do("equals");
});
point.addEventListener('click', function() {
    what_to_do("point");
});
//Act_numbers
one.addEventListener('click', function() {
    what_to_do(1);
});
two.addEventListener('click', function() {
    what_to_do(2);
});
three.addEventListener('click', function() {
    what_to_do(3);
});
four.addEventListener('click', function() {
    what_to_do(4);
});
five.addEventListener('click', function() {
    what_to_do(5);
});
six.addEventListener('click', function() {
    what_to_do(6);
});
seven.addEventListener('click', function() {
    what_to_do(7);
});
eight.addEventListener('click', function() {
    what_to_do(8);
});
nine.addEventListener('click', function() {
    what_to_do(9);
});
zero.addEventListener('click', function() {
    what_to_do(0);
});

////Logic
//adding digits (step 0)
let arr1 = [];
let arr2 = 0;
let arr3 = 0;
let numA = null;
let numB = null;
let count = 0;
let resultOp = null;
function addingDigits(number) {
    if (arr1.length < 10) {
        arr1.push(number);
        arr2 = parseInt(arr1.join(""));
        operations.innerHTML = arr2;
        console.log(typeof(arr2));
        numA = arr2;
        if (count == 0) {
            return numA;
        } else {
            count += 1;
            numB = numA;
            console.log(numB);
            return numB;
        }
    } else {
    };
};

// Number or operation (step 1)
function what_to_do (data) {
    if (typeof(data) == "number") {
        num1 = addingDigits(data);
        console.log(numA);
    } else {
        Do_operation(numA, data, numB);
    };
};

function Do_operation (num1, operation, num2) {  // Debe ir dentro: (num1, operation, num2).
    if (num2 == null) {
        addingDigits(numB);
    } else {
        switch (operation) {
            case "restart":
            console.log("restart");
            break;
        case "posNeg":
            console.log("posNeg");
            break;
        case "percent":
            console.log("percent");
            break;
        case "divide":
            console.log("divide");
            break;
        case "multiplication":
            console.log("multiplication");
            break;
        case "minus":
            console.log("minus");
            break;
        case "plus":
        resultOp = num1 + num2;
        console.log("plus");
            break;
        case "equals":
            console.log("equals");
            break;
        case "point":
            console.log("point");
            break;
        default:
            console.log("Error: Unknown button");
    
        };
    }
    
    
};



/* Hacer una funcion que requiera 3 datos, un numero, una operacion y otro numero.
Posteriormente a eso, esa funcion va a analizar la operacion dada y hara la ejecucion
para posteriormente guardar la respuesta en una de los 2 numeros, (quiza el primero)
*/