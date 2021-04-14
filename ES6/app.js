// WE USED ES6 WHICH CHANGE THE WHOLE CONCEPT OF JS IN MODERN WAY

// let

let a = 12;
let a = 31;
console.log(a);


//  TEMPLATE LITERAL


let fname = prompt("Enter First Name");
let lname = prompt("Enter Last Name");

console.log(`Welcome Mr ${fname} ${lname}  `);


// SPREAD OPERATOR



let obj1 ={
    name1 : 'Mabtoor',
    name2: 'Munneb',
    name3: 'Mansoor'
}

let obj2 = {
    fname : 'Shafiq'
}


let clone = {...obj1, ...obj2 };
console.log(clone);





// DESTRUCTURING THE OBJECT


let rest;

let objec1 = {
    name : 'Mabtoor',
    fname : 'Shafiq',
    rollNo : '2018-ag-8208'
}

let{name,fname,rollNo,} = objec1;
console.log(fname);




// Ternary Operator



let a = prompt("Enter The No");
let check =  a>20? console.log("You are Above 20") : console.log("You are Below 20");



// SYNC and ASYNC



setTimeout(function()
{

    console.log('10');

},3000)

console.log('20');
console.log('30');






//  PROMISE



let promm = new Promise(function(resolve,reject)
{
    let zinger = 'Avalible';
    if (zinger!='Avalible') 
    {
        resolve('Avalible');
    }
    else{
        reject('Not_Avalible');
    }
})


promm.then(
    function(value){ console.log(value); },
    function(error){ console.log(error); }
)











