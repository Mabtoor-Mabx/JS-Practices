const calc = () => {


    let comp = document.getElementById('comp').value;
    let che = document.getElementById('che').value;
    let phy = document.getElementById('phy').value;
    let math = document.getElementById('math').value;
    
    let total;
    let grade;
    
    
    // Total Marks
    if( parseFloat(che) <=100 &&  parseFloat(math) <=100 &&  parseFloat(phy)<=100 &&  parseFloat(comp)<=100)
    {
         total =  parseFloat(che) + parseFloat(math) + parseFloat(phy) + parseFloat(comp);
    }
    else
    {
        alert('Please Select the valid No');
    }

    // Percentage

    let percent = (total/400) * 100;


    //  Grade


    if(percent<=90 && percent>80)
    {
        grade = 'A';
    }
    else if(percent<=80 && percent>70)
    {
        grade = 'B';
    }
    else if(percent<=70 && percent>60)
    {
        grade = 'C';
    }
     else if(percent<=60 && percent>50)
    {
        grade = 'D';
    }
    else if(percent<=50 && percent>40)
    {
        grade = 'E';
    }
    else {
        grade = 'F';
    }






    // Pass Or Fail

    if(percent>33 && parseFloat(che) >33 &&  parseFloat(math) >=33 &&  parseFloat(phy)>33 &&  parseFloat(comp)>33)
    {
        document.getElementById('result').innerHTML = `Congratulations! You Are <b> Pass </b> .
        You have got ${total}/400 Marks. Your Percentage is ${percent} . and You Get ${grade} Grade `;
    }
    else
    {
        document.getElementById('result').innerHTML = `Alas! You Are <b> Fail </b> .
        You have got ${total}/400 Marks. Your Percentage is ${percent} . and You Get ${grade} Grade `;
    }
}