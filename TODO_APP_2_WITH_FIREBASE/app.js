let list = document.getElementById('list');


// GET DATA FROM FIREBASE DATABASE TO LOCAL JS APP

firebase.database().ref('todos').on('child_added', function(data){

    

    // // CREATE LI ELEMENT

    let li_Element = document.createElement('li');
    let li_Text = document.createTextNode(data.val().value);
    li_Element.appendChild(li_Text);
    li_Element.setAttribute('class', 'li_list');



    // // CREATE EDIT BUTTON


    let edit_btn = document.createElement('button');
    let edit_Text = document.createTextNode('EDIT');
    edit_btn.appendChild(edit_Text);
    edit_btn.setAttribute('id',data.val().key);
    li_Element.appendChild(edit_btn);
    edit_btn.setAttribute('class','btn3');
    edit_btn.setAttribute('onclick', 'edit(this)');




    // // CREATE DEL BUTTON

    let del_btn = document.createElement('button');
    let del_Text = document.createTextNode('DELETE');
    del_btn.appendChild(del_Text);
    li_Element.appendChild(del_btn);
    del_btn.setAttribute('id', data.val().key);
    del_btn.setAttribute('class', 'btn4');
    del_btn.setAttribute('onclick', 'del(this)');






    list.appendChild(li_Element);





















})











function add()
{
    let todo_item = document.getElementById('todo_item');

    // CREATE KEY AND OBJECT AND CONNECT WITH FIREBASE

    let key = firebase.database().ref('todos').push().key;
    
    let todo = {
        value : todo_item.value,
        key : key
    }
    firebase.database().ref('todos').child(key).set(todo);
    console.log(todo);
    









    
    todo_item.value = "";

}


function del(e)
{
    // DELETE THE DATA ON BOTH SIDE . LOCAL JS APP AND FIREBASE DATABASE
    firebase.database().ref('todos').child(e.id).remove();
    e.parentNode.remove();
}

function edit(e)
{
    
    let val = prompt("Enter Updated Value", e.parentNode.firstChild.nodeValue);
let todo_edit = {
    value: val,
    key : e.id
}
    firebase.database().ref('todos').child(e.id).set(todo_edit);

    e.parentNode.firstChild.nodeValue =  val;

}

function delall()
{

    firebase.database().ref('todos').remove();
    let list = document.getElementById('list');
    list.innerHTML = "";
}