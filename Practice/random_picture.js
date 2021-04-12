 img_Selections = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.png'
]



function Random()
{ 
    let Pictures = document.getElementById('random_picture');

    let index = Math.floor(Math.random() * img_Selections.length);
   Pictures.style.backgroundImage = `url(${img_Selections[index]})`;
}