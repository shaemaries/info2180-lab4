"use strict"

window.onload = function(){
    var btn= document.querySelector(".btn");
    btn.addEventListener('click',getSuperheroes);
}

function getSuperheroes(){

    fetch('http://localhost:80/info2180-lab4/superheroes.php')
    .then(response =>response.text())
    .then(data => alert(data))
    .catch(error => console.log(error)) 
    

}


