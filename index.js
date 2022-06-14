let resultatApi = document.getElementById('resultat');
let proverbeApi = document.getElementById('proverbe');
let imageApi = document.getElementById('image');
let img = document.createElement("img");


resultatApi.addEventListener('click', 
function bobo(){
    fetch(' https://api.chucknorris.io/jokes/random')

    .then((resultat)=>{
        if(resultat.ok){
           return resultat.json();
        }
    }) 

    .then((value)=>{
        img.classList = 'monimg'
       img.src = "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSbLNjUj1kvA0wNo8bbB7qOOZuGM40PVuZ_uxI6NouNc0-eHseXMG-UwQkn2N2HKfbu"
       imageApi.appendChild(img)
        proverbeApi.innerHTML = value.value; 
        
    }) 
    .catch(function(err) {
        alert('errer')
      });
}

)
