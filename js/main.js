var today=document.querySelector(".inner")
var alldays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var allmonths=["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
  var search_input=document.getElementById('search_input')
  var find_btn=document.getElementById('find_btn')
  var second_day=document.getElementById('second')
   var third_day=document.getElementById('third')
   var contact=document.getElementById('contact')
   var firstpage=document.getElementById('firstpage')
   var homepage=document.getElementById('homepage')

async function temptoday(){
    var resp= await fetch('https://api.weatherapi.com/v1/forecast.json?key=777c50ebffb647f5984185428253110&q=lond&days=3')
    var myresp= await resp.json()
    var forecast=myresp.forecast
    var loc=myresp.location
    var cur=myresp.current
    var now=new Date(forecast.forecastday[0].date)
    
    
    today.innerHTML=`<div class="d-flex justify-content-between p-2 header align-items-center">
            <h5>${alldays[now.getDay()]}</h5>
            <h6>${now.getDate()}${allmonths[now.getMonth()]}</h6>
          </div>

          <div class="px-3 py-4">
            <h4>${loc.name}</h4>
          <p class="fw-bold">${cur.temp_c}°C</p>
          <img src="https:${forecast.forecastday[0].day.condition.icon}" alt="sun">
          <h6 class="text-info">${forecast.forecastday[0].day.condition.text}</h6>
          <div class="d-flex column-gap-4">
            <div><i class="fa-solid fa-cloud-rain"></i> 20%</div>
          <div><i class="fa-solid fa-wind"></i> 18 km/h</div>
           <div><i class="fa-solid fa-compass"></i> East</div>
          </div>
          </div>`
     second_day.innerHTML=` <h4 class="text-white position-absolute top-0 p-2">${alldays[now.getDay()+1]}</h4>
         <img src="https:${forecast.forecastday[1].day.condition.icon}" alt="">
         <h5 class="text-white">${forecast.forecastday[1].day.maxtemp_c}°C</h5>
         <h6 class="text-white">${forecast.forecastday[1].day.mintemp_c}°C</h6>
         <h6 class="text-info">${forecast.forecastday[1].day.condition.text}</h6>`      
     third_day.innerHTML=` <h4 class="text-white position-absolute top-0 p-2">${alldays[now.getDay()+2]}</h4>
         <img src="https:${forecast.forecastday[2].day.condition.icon}" alt="">
         <h5 class="text-white">${forecast.forecastday[2].day.maxtemp_c}°C</h5>
         <h6 class="text-white">${forecast.forecastday[2].day.mintemp_c}°C</h6>
         <h6 class="text-info">${forecast.forecastday[2].day.condition.text}</h6>`          

}
temptoday()
async function search(){
   var resp= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=777c50ebffb647f5984185428253110&q=${search_input.value}&days=3`)
    var myresp= await resp.json()
    var forecast=myresp.forecast
    var loc=myresp.location
    var cur=myresp.current
    var now=new Date(forecast.forecastday[0].date)
    
    
    today.innerHTML=`<div class="d-flex justify-content-between p-2 header align-items-center">
            <h5>${alldays[now.getDay()]}</h5>
            <h6>${now.getDate()}${allmonths[now.getMonth()]}</h6>
          </div>

          <div class="px-3 py-4">
            <h4>${loc.name}</h4>
          <p class="fw-bold">${cur.temp_c}°C</p>
          <img src="https:${forecast.forecastday[0].day.condition.icon}" alt="sun">
          <h6 class="text-info">${forecast.forecastday[0].day.condition.text}</h6>
          <div class="d-flex column-gap-4">
            <div><i class="fa-solid fa-cloud-rain"></i> 20%</div>
          <div><i class="fa-solid fa-wind"></i> 18 km/h</div>
           <div><i class="fa-solid fa-compass"></i> East</div>
          </div>
          </div>`
     second_day.innerHTML=` <h4 class="text-white position-absolute top-0 p-2">${alldays[now.getDay()+1]}</h4>
         <img src="https:${forecast.forecastday[1].day.condition.icon}" alt="">
         <h5 class="text-white">${forecast.forecastday[1].day.maxtemp_c}°C</h5>
         <h6 class="text-white">${forecast.forecastday[1].day.mintemp_c}°C</h6>
         <h6 class="text-info">${forecast.forecastday[1].day.condition.text}</h6>`      
     third_day.innerHTML=` <h4 class="text-white position-absolute top-0 p-2">${alldays[now.getDay()+2]}</h4>
         <img src="https:${forecast.forecastday[2].day.condition.icon}" alt="">
         <h5 class="text-white">${forecast.forecastday[2].day.maxtemp_c}°C</h5>
         <h6 class="text-white">${forecast.forecastday[2].day.mintemp_c}°C</h6>
         <h6 class="text-info">${forecast.forecastday[2].day.condition.text}</h6>`          

   
}
search_input.addEventListener('input',search)
find_btn.addEventListener('click',search)




 