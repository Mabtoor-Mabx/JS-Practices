let list = document.getElementById('list');

function add() {

    let input = document.getElementById('input');
    let li = document.createElement('li');
    let liText = document.createTextNode(input.value);
    li.appendChild(liText);
    li.style.fontSize = '20px';
    li.style.marginTop = '10px';
    list.appendChild(li);

 input.value = '';   
}

function deleteall(){
    list.innerHTML = '';
}
