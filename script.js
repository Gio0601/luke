//selecteurs
const name = document.getElementById("name")

//fonctions

//events
window.addEventListener("load", function(){
  fetch
  ("https://swapi.dev/api/people/1/")
  .then(response => response.json())
  .then(data => {
    // console.log(data.name)
    name.textContent = data.name
    })
})
