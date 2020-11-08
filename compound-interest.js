//compound interest formula  A= P(1 + r)^t

// A	=	final amount
// P	=	initial principal balance
// r	=	interest rate
// t	=	number of time periods elapsed



function getFutureAmount(p,r,t){
    let finalAmount = null;
    //(1 +r)^t;
    let amount = Math.pow((1+r),t);
    console.log(`amount is ${amount}`);
    finalAmount = p * amount;
    console.log(`final amount is ${finalAmount}`);
    return finalAmount;
}

//calculateFinalAmount

function calculateFinalAmount() {
    let p = document.getElementById("p").value;
  let r = document.getElementById("r").value;
  let t = document.getElementById("t").value;

//   console.log(`p = ${p} , r= ${r}, t= ${t}`);
  let finalAmount = document.getElementById("finalAmount");

  let calculatedValue = getFutureAmount(p,r/100,t);
  finalAmount.innerText = calculatedValue;
    
}

// var p = 10000;
// var r = 8/100;
// var t = 10;
// var finalAmount = getFutureAmount(p,r,t);
 
// console.log(`your investment of Rs. ${p} will become ${finalAmount.toFixed(2)} in ${t} years `);