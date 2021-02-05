
// SIMPLE FUNCTION
function Rec(l,w) 
{
    return (l*w);
}


// ANONYMOUS FUNCTION
var tri = function(l,w,h)
{
    return (l*w*h);
}


// FAT ARROW FUNCTION
const Par = (l,w,h) => 
{
    return ((l*w*h)/2);
}

console.log(`The Area Of Rectangle is ${Rec(2,3)} and Area Of Triangle is ${tri(2,3,4)} and Area Of Parabola Is ${Par(2,4,5)} `);






// let arr = ["Mabtoor", "Moiz", "Munneb", "Mansoor", "Waqas", "Tanmay", "Rishab", "Horair", "Naeil", "Waheed"];

// arr.forEach( element =>
// {
//     console.log(`${element}  `);
// });



