let query = 'whales';
let url = `http://www.omdbapi.com/?i=tt0137523&apikey=88bd5903`;
let content = document.getElementById('content');



function search(){
    query = document.getElementById('search').value || 'Fight Club';
    
    url = `http://www.omdbapi.com/?i=tt0137523&apikey=88bd5903`;
    //content.innerHTML=''


    //ASYNCHRONUS CODE
    fetch(url)
        .then (res => res.json())
        .then(res => web(res))
        .catch(err => console.log(err)) 
}


// res == all of my API infromation 
// window.onload = search




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

console.log('feed cat')