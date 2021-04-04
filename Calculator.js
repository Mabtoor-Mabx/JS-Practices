let result = document.getElementById('result');


function getNumber(num)
{
    let result = document.getElementById('result');
    result.value += num;

}
function clearVal()
{
    let result = document.getElementById('result');
    result.value = "";

}
function getResult()
{
    let result = document.getElementById('result');
    result.value = eval(result.value);

}