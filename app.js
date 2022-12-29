const url = 'https://api.openweathermap.org/data/2.5/'
const key = '9ea82285c3a783b8ff85aabc656b4f34'




const SetQuery = (e) =>{
    if (e.keyCode=='13')
    getResult(searchBar.value)
}


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',SetQuery)



const getResult = (mahmut) => {
   let query =`${url}weather?q=${mahmut}&appid=${key}&units=metric&lang=tr`
   fetch(query)
   .then(weather =>{
       return weather.json()
   })
   .then (displayResult)
}



const displayResult = (result) => {
    let city =document.querySelector('.city')
    city.innerText=`${result.name},${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)} C`


}








