"use strict"

window.onload = function(){
    var btn= document.querySelector(".btn");
    btn.addEventListener('click',getSuperheroes);
}

function getSuperheroes(){

    event.preventDefault()
    var querty_text= document.querySelector(".querty_text").value
    console.log(querty_text)

    fetch('http://localhost:80/info2180-lab4/superheroes.php')
    .then(response =>response.text())
    .then(data => alert(data))
    .catch(error => console.log(error)) 

}


