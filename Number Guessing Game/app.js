let random = Math.floor(Math.random()*100);

function send()
{

let input = document.getElementById('input');
let outputText = document.getElementById('outputText');
console.log(random);
    if(input.value< random)
    {
    outputText.innerHTML = 'Your Value Is Too Low!!!';
    }
    else if(input.value>random)
    {
        outputText.innerHTML = 'Your Value is Too High!!!'
    }
    else if(input.value == random)
    {
        outputText.innerHTML = `Congrats! You Get The Value. Your Value is ${random}`;
    }





}