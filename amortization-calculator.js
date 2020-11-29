//A = P * ( r(1+r) ^n/ (1=r)^n-1

// monthly EMI
// P - Principal amount
// R - interest rate in years
// N - number of years
function calculateAmountPerPeriod(P, R, N) {        
 return 0;   
}

var P = 20000;
var R= 7.5;
var N = 5;

var emi = calculateAmountPerPeriod(P, R, N);

function calculate() {
    var P = document.getElementById("P").value;
    var R= document.getElementById("R").value;
    var N = document.getElementById("N").value;
    var finalAmount = document.getElementById("finalAmount");
    var amoutPerPeriod = calculateAmountPerPeriod(P, R, N);
    finalAmount.innerText = amoutPerPeriod.toFixed(2);
}