//Example fetch using pokemonapi.co
document.querySelector('.input-loc').addEventListener('click', getManLocation)
document.querySelector('.auto-loc').addEventListener('click', getAutoLocation)

function getManLocation(){

  const lat = document.querySelector('.lat').value
 
getFetch(lat)
}

function getAutoLocation(){
  if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
    
    const lat = position.coords.latitude
    const long = position.coords.longitude
     getFetch(lat,long)
    })

  } else {
   console.log('geolocation IS NOT available')
   document.querySelector('h3').innerText = 'geolocation IS NOT available, Please try manual'
  }
}




  function getFetch(lat,long){
    const key = 'acd7ae49de68dfe10957e3b878ce9da2'
  const url = `http://api.weatherapi.com/v1/current.json?key=e004f78c169741c1b3662821222904&q=${lat},${long}&aqi=no`
  console.log(`location: ${lat},${long}`);

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.current)
        console.log(data.current.humidity)
        console.log(data.current.temp_c)
        console.log(data.current.condition.icon);
        let weatherIcon = data.current.condition.icon.slice(2)
        console.log(weatherIcon);




        document.querySelector('.text').innerText = data.current.condition.text
        document.querySelector('.temp').innerText = data.current.temp_c + 'C'
        document.querySelector('.humidity').innerText = `Humidity: ${data.current.humidity}`
        document.querySelector('img').src = weatherIcon
        document.querySelector('.location').innerText = `${data.location.name}, ${data.location.region}`




      })
      
      .catch(err => {
          console.log(`error ${err}`)
      });
}






// if('geolocation' in navigator) {
//   /* geolocation is available */
// } else {
//   /* geolocation IS NOT available */
// }navigator.geolocation.getCurrentPosition((position) => {
//   doSomething(position.coords.latitude, position.coords.longitude);
// });
