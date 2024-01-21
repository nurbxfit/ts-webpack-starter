const app : HTMLElement = document.getElementById('app');

const title : HTMLHeadingElement = document.createElement('h1');
title.textContent = "Hello World This is webpack typescript example"

const button : HTMLButtonElement = document.createElement('button');
button.textContent="click me";
button.onclick = changeTitle; 

function changeTitle(){
    title.textContent = "Title changed, the code is working"
}


app.appendChild(title)
app.appendChild(button)