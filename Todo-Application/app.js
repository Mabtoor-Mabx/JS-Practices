let list   = document.getElementById('list');
function addbtn()
{

    let todoitem = document.getElementById('todoitem');




    // CREATE LI ELEMENT
    let li = document.createElement('li');
    li.setAttribute('class', 'list')
    let  text  = document.createTextNode(todoitem.value);
    li.appendChild(text);

    // CREATE DELETE BUTTON
    let delbtn = document.createElement('button');
    let delText = document.createTextNode("Delete");
    delbtn.setAttribute('class', 'btn2');
    delbtn.setAttribute('onclick', 'deltodo(this)')
    delbtn.appendChild(delText);
    li.appendChild(delbtn);

    // Create EDIT BUTTON

    let editbtn = document.createElement('button');
    let EditText = document.createTextNode("Edit");
    editbtn.setAttribute('class', 'btn2');
    editbtn.setAttribute('onclick', 'edittodo(this)')
    editbtn.appendChild(EditText);
    li.appendChild(editbtn);

    list.appendChild(li);
    todoitem.value ="";
}




function deltodo(e)
{
    e.parentNode.remove();

}

function delall()
{
    list.innerHTML = "";
}
function edittodo(e)
{
     var val = prompt("Enter Updated Value", e.parentNode.firstChild.nodeValue);
     e.parentNode.firstChild.nodeValue = val; 
}