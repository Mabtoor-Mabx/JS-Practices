let list = document.getElementById('list');



// GET DATA FROM FIREBASE DATABASE TO LOCAL TODOAPP

firebase.database().ref('todos').on('child_added', function(data){




         // CREATE LI ELEMENT

    let li_Element = document.createElement('li');
    let li_Text = document.createTextNode(data.val().value);
    li_Element.appendChild(li_Text);
    li_Element.setAttribute('class', 'li_list')

//     // CREATE EDIT BUTTON

    let edit_btn = document.createElement('button');
    let edit_btn_Text = document.createTextNode('EDIT');
    edit_btn.appendChild(edit_btn_Text);
    edit_btn.setAttribute('id', data.val().key);
    li_Element.appendChild(edit_btn);
    edit_btn.setAttribute('class', 'btn3')
    edit_btn.setAttribute('onclick', 'edit(this)');


//     // CREATE DELETE BUTTON

    let del_btn = document.createElement('button');
    let del_btn_text = document.createTextNode('DELETE');
    del_btn.appendChild(del_btn_text);
    del_btn.setAttribute('id', data.val().key);
    li_Element.appendChild(del_btn);
    del_btn.setAttribute('class', 'btn4');
    del_btn.setAttribute('onclick', 'deleted(this)');


















    list.appendChild(li_Element);




    
})

















function add()
{
    let todo_list = document.getElementById('todo_list');
    
    // CREATE KEY AND CONNECT OUR DATA WITH FIREBASE DATABASE
    let key = firebase.database().ref('todos').push().key;
    
    // OBJECT IS CREATED 
    let todo = {
        value : todo_list.value,
        key :  key
    }
    // SEND OUR DATA FROM LOCAL TODOAPP TO FIREBASE DATABASE
    firebase.database().ref('todos').child(key).set(todo);



    todo_list.value = "";











//




}

function deleted(e)
{
    firebase.database().ref('todos').child(e.id).remove();
    e.parentNode.remove();
}


function delall()
{
    let list = document.getElementById('list');
    list.innerHTML = "";
}

function edit(e)
{

    let val = prompt("Enter Your Updated Value", e.parentNode.firstChild.nodeValue);

    var edit_todo = {
        value : val,
        key : e.id
    }
    firebase.database().ref('todos').child(e.id).set(edit_todo)
    e.parentNode.firstChild.nodeValue = val;
}
