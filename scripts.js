
let query = ''; 
let url = `http://www.omdbapi.com/?t=${query}&apikey=88bd5903`;
let content = document.getElementById('content');

// http://www.omdbapi.com/?i=tt0234215&apikey=88bd5903

function search(){
    // Created So That if search was just done you cant do it again
    if( query !== document.getElementById('search').value){
    query = document.getElementById('search').value;
   
    url = `http://www.omdbapi.com/?s=${query}&apikey=88bd5903`;

    //ASYNCHRONUS CODE
    fetch(url)
        .then (res => res.json())
        .then(res => web(res.Search))
        .catch(err => console.log(err)) 
    }
}

// res == all of my API infromation 
function web(res){
  //RUNNING FOR LOOP IN FUCNTION BREAKS CODE .... WHY??? ////////
  for(let i = 0; i < res.length; i++){
    console.log(res)

  
    let picture = document.createElement("img")
    let card = document.createElement('div') 

  
    card.setAttribute('class', 'card')
    picture.setAttribute('class', 'posterImg')
  
    picture.src = res[i].Poster
    
    console.log(picture.src.slice(-3))
    if(picture.src.slice(-3) == "N/A"){
      picture.src ='./assets/noImage.jpg'
    }

    card.appendChild(picture)
    content.appendChild(card) 
  }
}

// Enter Key can be used to search 
window.onkeydown = (event) => { 
  if(event.key == 'Enter' ){ 
    search()
  // } if(res.Poster == 'undefined'){
  //   alert('Your search did not have any results.')
  }
}
// alterSearch()
// onLoad()