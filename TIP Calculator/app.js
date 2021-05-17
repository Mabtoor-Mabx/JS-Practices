function calculate()
{
    let billamount = document.getElementById('billAmount').value;
    let tipPercentage = document.getElementById('tipPercentage').value;
    let tipAmount = billamount/tipPercentage ;
    document.getElementById('tipAmount').value = tipAmount;
    document.getElementById('totalAmount').value =  parseFloat(billamount) + parseFloat(tipAmount);

}