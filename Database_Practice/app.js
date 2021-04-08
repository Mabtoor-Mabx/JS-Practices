function send()
{
    let name = document.getElementById('name');
    let roll = document.getElementById('rollNo');
    var key = Math.floor(Math.random()*100);

    let value1 = {
        name : name.value,
        roll : roll.value ,
        key : key
    }


    // console.log(key);


    // firebase.database().ref("student/Student1").set(value1);
    // firebase.database().ref('Students').push(value1);
// SET IS USED TO OVERRIDE THE VALUE. TO STORE MULTPLE VALUES, WE USED PUSH METHOD INSTEAD OF SET METHOD


//KEY IS USED TO CREATE YOUR OWN KEY IN FIREBASE DATABASE
    firebase.database().ref("Student/" + key).set(value1);       

    


name.value ="";
roll.value = "";

}



// THIS METHOD IS USED TO GET THE DATA OF OUR DATABASE FOR FIREBASE 

// function getData()
// {
//     firebase.database().ref('Student').once('value', function(data){ // once Function Get Two Arguments, First One is Value & Second One Is Function
//         console.log(data.val());
//     })
// }
// getData()



// THIS FUNCTION IS USED TO REMOVE THE DATA FROM FIREBASE DATABASE

// function removeData()
// {
//     firebase.database().ref('Student').remove()
// }
// removeData()



function editData()
{
    firebase.database().ref('Student/44').set({
            key :'44',
            name :'Mansoor',
            roll : '0005'
        })
}

editData();