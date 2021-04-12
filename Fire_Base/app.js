function send()
{
    let nameStudent = document.getElementById('text');
    let rollStudent = document.getElementById('number');

    let object = {
        name : nameStudent.value,
        roll : rollStudent.value
    }



    firebase.database().ref('object').push(object);
}


