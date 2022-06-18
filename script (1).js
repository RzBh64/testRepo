function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if(principal <= 0 || principal==""){
        alert("Enter a positive number")
        document.getElementById("principal").focus()
        return
    }

    
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    var result = "<p>If you deposit <span class='highlighted'>" + principal 
    + ",</span><br/>at an interest rate of <span class='highlighted'>" + rate 
    + "%,</span><br/>You will receive an amount of <span class='highlighted'>"+
    interest + ",</span><br/>in the year <span class='highlighted'>" + year + "</span></p>";
    
    document.getElementById("result").innerHTML=result;

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}