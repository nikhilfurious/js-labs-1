let amount, principal, rate, number_of_payments, c;

function calculate() {
    principal = document.getElementById("principal").value;
    number_of_payments = document.getElementById("number_of_payments").value;
    rate = document.getElementById("rate").value;
    principal = Number(principal);
    number_of_payments = Number(number_of_payments);
    rate = Number(rate);

    console.log(principal);
    console.log(number_of_payments);
    console.log(rate);

    c = Math.pow((1 +( rate * 0.01)/12), number_of_payments*12);
    amount = principal * (((rate * 0.01)/12 * c) / (c - 1));
    console.log(c);
    console.log(amount);
    document.getElementById("paymentAmount").value = "$" + amount.toFixed(2);
}