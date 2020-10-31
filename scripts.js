let query; //http://www.omdbapi.com/?i=tt0137523&apikey=88bd5903
let url = `http://www.omdbapi.com/?t=${query}&apikey=88bd5903`;
let content = document.getElementById('content');



function search(){
  
    query = document.getElementById('search').value;
    
    url = `http://www.omdbapi.com/?t=${query}&apikey=88bd5903`;
    content.innerHTML=''

    //ASYNCHRONUS CODE
    fetch(url)
        .then (res => res.json())
        .then(res => web(res))
        .catch(err => console.log(err)) 
}



// res == all of my API infromation 
function web(res){
  //for(let i = 0; i < res; i++){

        // THIS IS TO CREATE AN ELEMENT ( IMAGE, DIV ECT..) SO I CAN LATER-
        // PASS INFORMATION INTO SAID SO ELEMENT
        let picture = document.createElement("img")
        let card = document.createElement('div') 
  
      
        card.setAttribute('class', 'card')
        

        picture.src = res.Poster
        
  
        card.appendChild(picture)
    
        content.appendChild(card)
  
  // }
}
search()

window.onkeydown = (event) => { 
  if(event.key == 'Enter' ){ 
    search()
  }
}
