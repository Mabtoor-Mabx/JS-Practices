
// Example Of Objects & its Properties
let obj1 ={
    name : "Mabtoor",
    class : "Bscs",
    RollNo : "2018-ag-8208"
}


obj1.lastName = "Shafiq"

delete obj1.name;


console.log(obj1);
console.log("class" in obj1);



//  Example Of Constructor

function Object(name,price)
{
    this.name = name;
    this.price = price;
}

var str1 = new Object("Mabtoor", 10000);
console.log(str1);




// Difference in "in" & "hasOwnProperty"
var object = {
    name : "Mabtoor",
    RollNo : "2018-ag-8208",
    class : "BSCS",
    CGPA : 3.09
}

console.log(object);
console.log("toString" in object);
console.log(object.hasOwnProperty('toString'));


















