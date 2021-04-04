
function send()
{
    let result = document.getElementById('result');
    let tag = document.createElement('p');
    let tagText = document.createTextNode(result.value);
    let messages = document.getElementById('message');
    tag.appendChild(tagText);
    messages.appendChild(tag)
    result.value = "";
}