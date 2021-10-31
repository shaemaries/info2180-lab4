"use strict"

window.onload = function(){
    var btn= document.querySelector(".btn");
    btn.addEventListener('click',getSuperheroes);
}

function getSuperheroes(event){
    event.preventDefault()
    var query_text= document.querySelector(".query_text").value
    var params = { query: `${query_text}` }
	var urlParams = new URLSearchParams(Object.entries(params));
    
    fetch('./superheroes.php?'+ urlParams)
    .then(response =>response.text())
    .then(data => document.querySelector('.result').innerHTML = data)
    .catch(error => console.log(error))
}


