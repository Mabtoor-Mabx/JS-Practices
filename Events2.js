let styles = document.getElementById('btn');
styles.style.padding = "10px 14px";
styles.style.border = "3 px solid red";
styles.style.color = "white";
styles.style.backgroundColor = "red";



function toggle()
{
	let para1 = document.getElementById('para');
	let btn1 = document.getElementById('btn');

	if (para1.style.display!='none')
	 {
		para1.style.display ='none';
	}
	else
	{
		para1.style.display = 'block'
	}


}