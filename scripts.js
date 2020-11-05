
let query = ''; 
let url = `http://www.omdbapi.com/?t=${query}&apikey=88bd5903`;
let infoUrl = `http://www.omdbapi.com/?i=${query}&apikey=88bd5903`;
let content = document.getElementById('content');


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
  console.log(res)
  for(let i = 0; i < res.length; i++){
    

  
    let picture = document.createElement("img")
    let flipCard = document.createElement('div') 
    let flipCardInner = document.createElement('div') 
    let flipCardFront = document.createElement('div') 
    let flipCardBack = document.createElement('div') 
    let title = document.createElement('div')

  
    flipCard.setAttribute('class', 'flip-card')  
    flipCardInner.setAttribute('class', 'flip-card-inner')  
    flipCardFront.setAttribute('class', 'flip-card-front')  
    flipCardBack.setAttribute('class', 'flip-card-back')  




    picture.setAttribute('class', 'posterImg')
    title.setAttribute('class', 'title')
  
    picture.src = res[i].Poster
    title.innerText = res[i].Title
    console.log(title.src)

    
    // if the search comes up wihtout a picture add the noImage jpg located in assets
    if(picture.src.slice(-3) == "N/A"){
      picture.src ='./assets/noImage.jpg'
    }

    // Read from bottom is HTML indentation 
          flipCardBack.appendChild(title)
        flipCardInner.appendChild(flipCardBack) 
          flipCardFront.appendChild(picture)
        flipCardInner.appendChild(flipCardFront)
      flipCard.appendChild(flipCardInner)

    content.appendChild(flipCard) 
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