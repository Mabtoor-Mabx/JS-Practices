let pictures = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.png'
]
var i=0;
function next()
{

    let nextt = document.getElementById('pics');
    if(i<pictures.length-1){
        i++;
    }
    else{
        i=0;
    }
    nextt.style.backgroundImage =   `url(${pictures[i]})`;
}

var j=4;
function pre()
{
    let pre = document.getElementById('pics');
    if(j>0)
    {
        j--;
    }
    else{
        j=4;
    }
    pre.style.backgroundImage =   `url(${pictures[j]})`;

}