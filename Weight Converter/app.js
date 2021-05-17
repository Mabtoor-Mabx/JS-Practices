
function kg()
{
    let weight = document.getElementById('input').value;
    let weightInKg = weight / 2.205;
    document.getElementById('weight2').value =   weightInKg.toFixed(2) + ' Weight in Kilogram '
}


function pound()
{
    let weight2 = document.getElementById('input').value;
    let weightInPound = weight2 * 2.204 ;
    document.getElementById('weight2').value = weightInPound.toFixed(2)  + ' Weight In Pound'
}