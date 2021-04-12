function change()
{
    let random = document.getElementById('random_color');
    let Valuess = "0123456789ABCDEF";
    let color = "#";

    for(var i=0; i<6;i++)
    {
      color+= Valuess[Math.floor(Math.random()*16)]
    }
    random.style.backgroundColor = color;
}