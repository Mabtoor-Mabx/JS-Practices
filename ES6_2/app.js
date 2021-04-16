//  ES6


//  DESTRUCTURING THE ARRAY


// let arr = ['Mabtoor', 'Muneeb', 'Mansoor', 'Moiz'];


// let[name1,name2,name3] = arr;
// console.log(name1);



//  FUNCTION EXPRESSION


// let a = function()
// {
//     console.log('Hello World');
// }
// a();


//  ARROW FUNCTION


// let a = ()=>{
//     console.log('My Name Is Mabtoor Ul Shafiq');
// }

// a();







//  FILTER FUNCTION


// let arr = [{name: 'Mabtoor', age: 21}, {name: 'Muneeb' , age : 20 }];


// let filt = arr.filter((a)=>{console.log(a.name);})





// SEARCH FUNCTION


// let arr = 'Mabtoor';
// let  search = 'Ma';


// if(arr.startsWith(search)){
//     console.log(arr);
// }




//  MAP FUNCTION





// let arr = [{name: 'Mabtoor', department:'BSCS'}, {name: 'Horair', department:'BSCS'},{name: 'Waqas', department:'BSCS'}];

// let mapp = arr.map((a)=>{ console.log(a.name); })




//  FETCHING PRACTICE 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data=> console.log(data))

//  CLASSES

class student {
    constructor(name,department)
    {
        this.name = name;
        this.department = department;
    }
}





let student1 = new student('Mabtoor', 'BSCS');
console.log(student1);