let array = ["Waheed", "Waqas", "Horair", "Hasnat"];


let choice = Number(prompt("Choose Your Option :  1- Add Name   2- Delete Name "));

if (choice == 1) 
{

    let position = prompt("Please Tell  Where You Want To add Name?     Start or End?  ");
    if (position == "Start") 
    {
        let quantity = Number(prompt("Enter The Quantity You Want To add"));
        for(let i=0; i<quantity; i++)
        {
            let name = prompt(`Enter The" ${i+1}th + Name`);
            name = array.unshift(name);
        }

    }
    else  if (position == "End") 
    {
        
        let quantity = Number(prompt("Enter The Quantity You Want To add"));
        for(let i=0; i<quantity; i++)
        {
            let name = prompt(`Enter The" ${i+1}th + Name`);
            name = array.push(name);
        }
    }


  console.log(array);  
}

else if (choice == 2) 
{

    let position = prompt("Enter The Position You Want To delete Element? Start Or End");
    if (position == "Start") 
    {
        let quantity = prompt("Enter The Quantity You Want To remove elements");
        for(let i=0; i<quantity; i++)
        {
            
             amount =array.shift();
        }

    }
    else  if (position == "End") 
    {
        let quantity = prompt("Enter The Quantity You Want To remove elements");
        for(let i=0; i<quantity; i++)
        {
            amount = array.pop();
        }

    }

console.log(array);
    

}











