function amort_calc() {
    
    var z=0;
    while(z==0){
        
        /*Here we take the values which are given by the user in the UI and assign variables.
        The variable names given here must be pretty clear .*/

        var loan_amount=document.getElementById("P").value;
        var intrest_rate=document.getElementById("R").value;
        var no_of_payments=document.getElementById("N").value;
        /*Now we convert the inputed values into float.
        p is the loan amount
        r is the intrest rate
        n is the no of payments*/
    
        var p=parseFloat(loan_amount);
        var r=parseFloat(intrest_rate);
        var n=parseFloat(no_of_payments);
            
        var result=p*((r*((1+r)**n))/(((1+r)**n)-1))
                
        
        if (p<=0){
            alert("Please enter a valid value for loan amount");
            var loan_amount=document.getElementById("P").value;
            var intrest_rate=document.getElementById("R").value;
            var no_of_payments=document.getElementById("N").value;
            
            var p=parseFloat(loan_amount);
            var r=parseFloat(intrest_rate);
            var n=parseFloat(no_of_payments);
            
            document.getElementById("P").value=("20000.00")
            

            var z=0;
        }
        else if(r<=0){
            alert("Please enter a valid value for intrest rate");
            
            var loan_amount=document.getElementById("P").value;
            var intrest_rate=document.getElementById("R").value;
            var no_of_payments=document.getElementById("N").value;
            
            var p=parseFloat(loan_amount);
            var r=parseFloat(intrest_rate);
            var n=parseFloat(no_of_payments);
            
            document.getElementById("R").value=("0.00625")
            
            var z=0;
            
        }
        else if(n<=0){
            alert("Please enter a valid value for number of payments");
            
            var loan_amount=document.getElementById("P").value;
            var intrest_rate=document.getElementById("R").value;
            var no_of_payments=document.getElementById("N").value;
            
            var p=parseFloat(loan_amount);
            var r=parseFloat(intrest_rate);
            var n=parseFloat(no_of_payments);
            
            document.getElementById("N").value=("60")
            
            

            var z=0;
            
        }
        else if(Number.isNaN(result)==true) {

            alert("Please enter valid values for required fields");
            var loan_amount=document.getElementById("P").value;
            var intrest_rate=document.getElementById("R").value;
            var no_of_payments=document.getElementById("N").value;
            
            var p=parseFloat(loan_amount);
            var r=parseFloat(intrest_rate);
            var n=parseFloat(no_of_payments);
            
            document.getElementById("P").value=("20000.00")
            document.getElementById("R").value=("0.00625")
            document.getElementById("N").value=("60")
            document.getElementById("A").value=""



            var z=0;            

        }
        
        else{ 
            document.getElementById("A").value=("$"+result.toFixed(2))
            var z=1;
        }
    }
};
button.onclick = function(){amort_calc()};