function meter()
{
    let height = document.getElementById('input').value;
    let heightInMeter = height * 3.281;
    document.getElementById('output').value = heightInMeter.toFixed(2) + ' Height in Meter ';
}
function feet()
{
    let height  = document.getElementById('input').value;
    let heightInFeet = height / 3.281;
    document.getElementById('output').value = heightInFeet.toFixed(2) + ' Height in Feet '
}