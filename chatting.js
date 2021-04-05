function send(){
let input = document.getElementById('input');
let p = document.createElement('p');
let text = document.createTextNode(input.value);
let messages = document.getElementById('messages');
p.appendChild(text);
messages.appendChild(p);
input.value = "";

}