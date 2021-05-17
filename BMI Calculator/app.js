function BMI()
{
    let weight  = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bmi = weight/(height*height)*10000;
    document.getElementById('BMI').value = bmi;
    
    
}