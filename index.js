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
    arr1 = [];
    arr2 = [];
    operations.innerHTML = [];
    result.innerHTML = []
    //crear un nuevo array
});
posNeg.addEventListener('click', function() {
    alert("button activated!");
});
percent.addEventListener('click', function() {
    alert("button activated!");
});
divide.addEventListener('click', function() {
    alert("button activated!");
});
multiplication.addEventListener('click', function() {
    alert("button activated!");
});
minus.addEventListener('click', function() {
    alert("button activated!");
});
plus.addEventListener('click', function() {
    let arr4 = 0;
    arr4 = arr3 + arr4
    operations.innerHTML = arr4;
    arr1 = [];
    arr2 = [];
    console.log(arr4);
});
equals.addEventListener('click', function() {
    alert("button activated!");
});
point.addEventListener('click', function() {
    alert("button activated!");
});
arr1 = []
//Act_numbers
one.addEventListener('click', function() {
    addingDigits(1);
});
two.addEventListener('click', function() {
    addingDigits(2);
});
three.addEventListener('click', function() {
    addingDigits(3);
});
four.addEventListener('click', function() {
    addingDigits(4);
});
five.addEventListener('click', function() {
    addingDigits(5);
});
six.addEventListener('click', function() {
    addingDigits(6);
});
seven.addEventListener('click', function() {
    addingDigits(7);
});
eight.addEventListener('click', function() {
    addingDigits(8);
});
nine.addEventListener('click', function() {
    addingDigits(9);
});
zero.addEventListener('click', function() {
    addingDigits(0);
});

////Logic
//adding digits

function addingDigits(number) {
    if (arr1.length < 10) {
        arr1.push(number);
        arr2 = parseInt(arr1.join(""));
        //console.log(arr2);
        operations.innerHTML = arr2;
        arr3 = arr2
    } else {

    }

}










