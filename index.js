let dark_mode_background = document.getElementById("root");
let dark_mode = document.getElementById("dark_mode");
let dark_mode_button = document.getElementsByClassName("button");
let dark_mode_active = false;
let svg_dark = document.getElementById("svg_dark");
let svg_dark_circle = document.getElementById("svg_dark_circle");

function addCharacter(character) {
    var input = document.calculator.ans;
    if (input.value.length < 12) {
        input.value += character;
    } else { 
    }
}
function removeLastCharacter() {
    var input = document.getElementById("screenNumbers");
    input.value = input.value.slice(0, -1);
}

dark_mode.addEventListener('click', function(){
    if (dark_mode_active == false) {
        dark_mode.style.backgroundColor = "#333";
        dark_mode_background.style.backgroundColor = "#0044aa";
        for (var i = 0; i < dark_mode_button.length; i++) {
            dark_mode_button[i].style.backgroundColor = "#749999";
        }
        svg_dark.style.transform = 'translate(30px)';
        svg_dark.style.transition = 'transform 1s';
        svg_dark_circle.style.fill = "#fff";
        dark_mode_active = true;
    } else {
        dark_mode.style.backgroundColor = "#fff";
        dark_mode_background.style.backgroundColor = "#1199ff";
        for (var i = 0; i < dark_mode_button.length; i++) {
            dark_mode_button[i].style.backgroundColor = "#DAFFFF";
        }
        svg_dark.style.transform = 'translate(0px)';
        svg_dark.style.transition = 'transform 1s';
        svg_dark_circle.style.fill = "#333";
        dark_mode_active = false;
    };
});


function giveResult() {
    let input = document.calculator.ans;
    

    if (input.value.length < 12) {
        input.value = eval(document.calculator.ans.value);
    } else {
        input.value = eval(document.calculator.ans.value);
        let inputNum = parseFloat(input.value);
        let shortAns = inputNum.toExponential(5);
        input.value = shortAns;
        console.log(input.value);  
    }
}
