let query = ''; 
let url = `http://www.omdbapi.com/?t=${query}&apikey=88bd5903`;
let content = document.getElementById('content');

// MAKE THIS FUNCTION MAKE IMAGE DISAPEAR IF QUERY IS NOT FILLED 
function onLoad(){
  if(query == {} )
search()
}

// {/* <img src="undefined"></img> */}

function search(){
    // Created So That if search was just done you cant do it again
    if( query !== document.getElementById('search').value){
    query = document.getElementById('search').value;
   
    url = `http://www.omdbapi.com/?t=${query}&apikey=88bd5903`;

    //ASYNCHRONUS CODE
    fetch(url)
        .then (res => res.json())
        .then(res => web(res))
        .catch(err => console.log(err)) 
    }
}

// res == all of my API infromation 
function web(res){
  //RUNNING FOR LOOP IN FUCNTION BREAKS CODE .... WHY??? ////////
  //for(let i = 0; i < res; i++){

        // THIS IS TO CREATE AN ELEMENT ( IMAGE, DIV ECT..) SO YOU CAN LATER-
        // PASS INFORMATION INTO SAID SO ELEMENT
        let picture = document.createElement("img")
        let card = document.createElement('div') 
  
      
        card.setAttribute('class', 'card')
        
        picture.src = res.Poster
       
     
        card.appendChild(picture)
        content.appendChild(card)
        
  //}
}

// Enter Key can be used to search 
window.onkeydown = (event) => { 
  if(event.key == 'Enter' ){ 
    search()
  }
}
alterSearch()
onLoad()