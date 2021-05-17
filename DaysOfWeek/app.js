let outputDay = document.getElementById('day');
let time = document.getElementById('time');



let date = new Date();
let day2 = date.getDay();
let ndate = date.toLocaleString();


switch(day2) {
    case 1:
       day2 = 'Monday';
       break;
       case 2:
       day2 = 'Tuesday';
       break; 
       case 3:
       day2 = 'Wednesday';
       break;
       case 4:
        day2 = 'Thursday';
        break;
       case 5:
       day2 = 'Friday';
       break;
       case 6:
       day2 = 'Saturday';
       break;
       case 7:
       day2 = 'Sunday';
       break;
}
outputDay.innerHTML = day2;
time.innerHTML = ndate;