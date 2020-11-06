





let query = ''; 
let page = 1;
let lastQuery  = '';
let url = `http://www.omdbapi.com/?t=${query}&page=${page}&apikey=88bd5903`;
let infoUrl = `http://www.omdbapi.com/?i=${query}&apikey=88bd5903`;
let content = document.getElementById('content');


function search(){
    // Created So That if search was just done you cant do it again
    if( query !== document.getElementById('search').value){
      query = document.getElementById('search').value;
    }
    if( query !== lastQuery){
      page = 1
      content.innerHTML = ''
    } 
    if( query == lastQuery){
      page++
    }
    lastQuery = query
    
      url = `http://www.omdbapi.com/?s=${query}&page=${page}&apikey=88bd5903`;
      console.log(page)

      

      //ASYNCHRONUS CODE
      fetch(url)
          .then (res => res.json())
          .then(res => web(res.Search))
          .catch(err => console.log(err)) 
      
}


// res == all of my API infromation 
function web(res){
  // console.log(res)
  for(let i = 0; i < res.length; i++){
    
    let picture = document.createElement("img")
    let flipCard = document.createElement('div') 
    let flipCardInner = document.createElement('div') 
    let flipCardFront = document.createElement('div') 
    let flipCardBack = document.createElement('div') 
    let title = document.createElement('div')
    let year = document.createElement('div')

    flipCard.setAttribute('class', 'flip-card')  
    flipCardInner.setAttribute('class',  'flip-card-inner')  
    flipCardFront.setAttribute('class', 'flip-card-front')  
    flipCardBack.setAttribute('class', 'flip-card-back')  
    //this is setting the current cards id to the imdb code EX-tt34324324...
    flipCardBack.setAttribute('id', res[i].imdbID)  


    picture.setAttribute('class', 'posterImg')
    title.setAttribute('class', 'title')
    year.setAttribute('class', 'year')
     
    picture.src = res[i].Poster
    title.innerText =  res[i].Title
    year.innerText =  res[i].Year 
    singleItem(res[i].imdbID)
    //console.log(res[i].Year)
    

    
    // if the search comes up wihtout a picture add the noImage jpg located in assets
    if(picture.src.slice(-3) == "N/A"){
      picture.src ='./assets/noImage.jpg'
    }

    // Read from bottom is HTML indentation 
          flipCardBack.appendChild(title)
          flipCardBack.appendChild(year)
        flipCardInner.appendChild(flipCardBack) 
          flipCardFront.appendChild(picture)
        flipCardInner.appendChild(flipCardFront)
      flipCard.appendChild(flipCardInner)

    content.appendChild(flipCard) 

  }

}

function searchInfo(){
  // Created So That if search was just done you cant do it again
  if( query !== document.getElementById('search').value){
    query = document.getElementById('search').value;
  }
  if( query !== lastQuery){
    page = 1
    content.innerHTML = ''
  } 
  if( query == lastQuery){
    page++
  }
  lastQuery = query
  
  let infoUrl = `http://www.omdbapi.com/?i=${query}&apikey=88bd5903`;
  ;
    console.log(infoUrl)

    //ASYNCHRONUS CODE
    fetch(url)
        .then (res => res.json())
        .then(res => singleItem(res))
        .catch(err => console.log(err)) 
    
}

function singleItem(id){


  //has more information tha abover url
  let infoUrl = `http://www.omdbapi.com/?i=${id}&apikey=88bd5903`;  
  
  console.log(id)

    //ASYNCHRONUS CODE That fires for eveything on page
  fetch(infoUrl)
    .then (res => res.json())
    // when res is returned turn current info into res
    .then(res => {
      console.log(res)
    // setting current item to the id that is custoim to the current card selected
     let currentItem =  document.getElementById(id) 
    // setting descrption to a paragraph tag THEN setting the contents of decription to the plot pulled from res THEN appending  the plot 'description' to currentItem
      let description = document.createElement('p')
      description.innerText = res.Plot
      currentItem.appendChild(description)
    })
    .catch(err => console.log(err)) 
  // for(let i = 0; i < res.length; i++){
    // on back of card lay unfromation 
    // let picture = document.createElement("img")
    // let flipCard = document.createElement('div') 
    // let flipCardInner = document.createElement('div') 
    // let flipCardFront = document.createElement('div') 
    // let flipCardBack = document.createElement('div') 
    // let title = document.createElement('div')
    // let year = document.createElement('div')

  
    // flipCard.setAttribute('class', 'flip-card')  
    // flipCardInner.setAttribute('class',  'flip-card-inner')  
    // flipCardFront.setAttribute('class', 'flip-card-front')  
    // flipCardBack.setAttribute('class', 'flip-card-back')  




    // picture.setAttribute('class', 'posterImg')
    // title.setAttribute('class', 'title')
    // year.setAttribute('class', 'year')
  
    // picture.src = res[i].Poster
    // title.innerText =  res[i].Title
    // year.innerHTML =  res[i].Year 
    // console.log(res[i].Year)

    
    // if the search comes up wihtout a picture add the noImage jpg located in assets
  //   if(picture.src.slice(-3) == "N/A"){
  //     picture.src ='./assets/noImage.jpg'
  //   }

  //   // Read from bottom is HTML indentation 
  //         flipCardBack.appendChild(title)
  //         flipCardBack.appendChild(year)
  //       flipCardInner.appendChild(flipCardBack) 
  //         flipCardFront.appendChild(picture)
  //       flipCardInner.appendChild(flipCardFront)
  //     flipCard.appendChild(flipCardInner)

  //   content.appendChild(flipCard) 
  // }
}

// Enter Key can be used to search 
window.onkeydown = (event) => {

  if(event.key == 'Enter' ){ 
    search()
    infoUrl()
  // } if(res.Poster == 'undefined'){
  //   alert('Your search did not have any results.')
  }
}

window.addEventListener('scroll', function(e) {
  if(window.scrollX+window.innerWidth >= content.offsetWidth ){
    search()
  }
  console.log(window.scrollX+window.innerWidth) 
  console.log(content.offsetWidth)
})


// alterSearch()
// onLoad()