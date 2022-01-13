
function add()
{
    var a = document.getElementById("first").value; //
    var b = document.getElementById("second").value;
    var out = Number(a) + Number(b);
    document.getElementById("output").innerText = `${out}`
}

function substract()
{
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a) - Number(b);
    document.getElementById("output").innerText = `${out}`
}

function multiply()
{
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a) * Number(b);
    document.getElementById("output").innerText = `${out}`
}

function divide()
{
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a) / Number(b);
    document.getElementById("output").innerText = `${out}`
}

1. /* In function() variables when we have to take value from input box then we have to use .value after getElementBy..()*/

2. /* onClick()='' Event used in Tag to make changes and return the output with results  */


/* This function of code changes the background of the screen and make it dark */
function changeMode(){
    var myBody = document.body;

    myBody.classList.toggle('dark')
}
