function heading(){
    let heading = document.getElementById('head');
    heading.style.fontSize = '40px';
    heading.style.color = 'purple';
    heading.style.fontFamily = 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    heading.style.fontStyle = 'italic'
}

function headout(){
    let heading = document.getElementById('head');
    heading.style.fontSize = '';
    heading.style.color = '';
    heading.style.fontStyle = ''
}

function picChange()
{
    let pic = document.getElementById('img');
    pic.src = 'https://i.tribune.com.pk/media/images/2244555-__updates-1592382889/2244555-__updates-1592382889.jpg'
}
function picout()
{
    let pic = document.getElementById('img');
    pic.src = 'https://i.dawn.com/primary/2020/06/5ee9dcb6939e4.jpg';
}

function learn()
{
    let fullinfo = 'Tariq Aziz was a Pakistani television host, film actor, known for PTV"s" quiz show Neelam Ghar, first aired in 1974, later renamed the Tariq Aziz Show and lately as Bazm-e-Tariq AzizHe was known for his iconic line  Dekhti Aankhon, Sunte Kaanon Tariq Aziz ka Salam'
    let texting = document.getElementById('text');
    texting.innerHTML = fullinfo;
}