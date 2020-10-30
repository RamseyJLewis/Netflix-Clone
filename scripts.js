let query = 'Fight Club'; //http://www.omdbapi.com/?i=tt0137523&apikey=88bd5903
let url = `http://www.omdbapi.com/?apikey=88bd5903&t${query}`;
let content = document.getElementById('content');



function search(){
  ////////////////////////////   NEED TO FIX SEARCHES ////////////////////////////////////////
    query = document.getElementById('search').value || 'Fight Club';
    
    url = `http://www.omdbapi.com/?apikey=88bd5903&t${query}`;
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

        //creating elements
        let card = document.createElement('div') 
        let poster = document.createElement("img")
        //let descption = document.createElement('div')
        //card.setAttribute('class', 'card')
        //description.setAttribute('class', 'description')

        poster.src = res.Poster
        
        card.appendChild(poster)

        document.body.appendChild(card)
  // }
}
search()

//console.log('feed cat')


window.onkeydown = (event) => { 
  if(event.key == 'Enter' ){ 
    search()
  }
}
