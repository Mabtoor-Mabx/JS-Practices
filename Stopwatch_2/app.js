let min=0;
let sec=0;
let msec=0;
let intrerval;
let minhead = document.getElementById('min');
let sechead = document.getElementById('sec');
let msechead = document.getElementById('msec');

function timer()
{
    msec++;
    msechead.innerHTML = msec;
    if (msec>=100) 
    {
        sec++;
        sechead.innerHTML = sec;
        msec =0;
    }
    else if (sec>=60) 
    {
        min++;
        minhead.innerHTML = min;
        sec=0;
        
    }

}


function play()
{
    intrerval = setInterval(timer, 10);    
    let playing = document.getElementById('play');
    playing.disabled = true;     

    
}

function pause()
{
    clearInterval(intrerval);
    let playing = document.getElementById('play');
    playing.disabled = false; 
}

function reset()
{
    min=0;
    sec=0;
    msec=0;
    minhead.innerHTML =min;
    sechead.innerHTML = sec;
    msechead.innerHTML = msec;
}


