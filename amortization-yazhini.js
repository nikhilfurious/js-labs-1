'use strict'
var interest = 0;
var totalDuration = 0;
var amount = 0;


function amortization() {
    event.preventDefault();
    var principalamount = parseFloat(document.getElementById("principal").value);
    var interest = parseFloat(document.getElementById("interestRate").value);
    interest = interest / (12 * 100);
    var totalDuration = parseFloat(document.getElementById("totalTime").value);
    console.log(`principal Amount is ${principalamount}, interest is ${interest} and total duration is ${totalDuration}`);
    var a = 1 + interest;
    var n = totalDuration * 12;
    var c = Math.pow(a, n);
    var numerator = principalamount * interest * c;
    var e = c - 1
    var amount = (numerator / e).toFixed(2);
    document.getElementById("amOutput").innerHTML = "Total Amount : Rs " + amount;
}

var P = 0;
var R = 0;
var N = 0;
function changeGlobalVar() {
    P = 30000;
    R = 20;
    N = 10;
}
function calculateAmountPerPeriod() {
    console.log(`P is ${P}, R is ${R}, N is ${N}`);
}

function localVariables() {
    var inner = 10;
    inner = 30;
    console.log(`inner is ${inner}`);
}

inner = 100;



// changeGlobalVar();
// P = 50000;
// var finalAmount = calculateAmountPerPeriod();

localVariables();