let min = 0;
let sec =0;
let msec =0;
let interval;

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
		msec=0;
	}
	else if (sec>60) 
	{
		min++;
		minhead.innerHTML = min;
		sec=0;
	}
}

function play()
{
	interval = setInterval(timer, 10); 
}

function pause()
{
	clearInterval(interval);
}

function reset()
{
	min =0;
	sec =0;
	msec = 0;
	minhead.innerHTML= min;
	sechead.innerHTML = sec;
	msechead.innerHTML = msec;
	pause();
}


