// ES6


// let 

let a = 31;
let a = 311;
console.log(a);


//  TEMPLATE LITERAL


let name = "Mabtoor_Mabx";
let rollNo = '2018-ag-8208';

console.log(`Welcome Mr ${name} RollNo ${rollNo}`);


//  SPREAD OPERATOR


let objec1 = {
    str1 : 'Mabtoor',
    class : 'BSCS',
}

let object2 = {
    str2 : 'Horair',
    class : 'BSCS'
}

let clone  = {...objec1,...object2};
console.log(clone);



// DESTRUCTURING THE OBJECT



let objecting = {
    fname : "Mabtoor",
    classes :"BSCS",
    rollNo : '2018-ag-8208'
}


let{classes,fname,rollNo} = objecting;
console.log(classes);


// TERNARY OPERATOR


let a = prompt('Enter The Number');

let val = a>20? console.log('Your No is greater Than 20') : console.log('Your No is Lesser Than 20');




// SYNC AND ASYNC

let a = 13;
let b = 43;
let c = 41;



setTimeout(function(){
    console.log(a);
},2000 )
console.log(b);
console.log(c);



//  PROMISE





var promise = new Promise(function(resolve, reject)
{

    let a = prompt('Enter The Number');
    if(a>10)
    {
        resolve('My no is Greater Than 10');
    }
    else
    {
        reject('Your Request Is Rejected');
    }

})

promise.then
(
    function(value) { console.log(value);},
    function(error) {console.log(error);}

)















