function send()
{
    let input = document.getElementById('input');
    let p = document.createElement('p');
    let text = document.createTextNode(input.value);
    var messages = document.getElementById('message');
    p.appendChild(text);
    messages.appendChild(p);

}