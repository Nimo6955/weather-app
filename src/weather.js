import React, { useState, } from 'react';
import { useEffect } from 'react'    
import background1 from "./newphoto1.png";
import background2 from "./newphoto2.png";
import night from "./night.gif";
import day from "./day.gif";
import cloudes from "./cloudes.gif";
import rain from "./rain.gif";
import snow from "./snow.gif";
import haze from "./haze.gif";
import smoke from "./wind.gif";
import clear from "./clear.gif";
import Thunderstorm from "./thanderstorm.gif";
import warning from "./warning.gif";
import drizzle from "./drizzle.gif";
import dust from "./dust.gif";
import Tornado from "./Tornado.gif";
import sand from "./Sand.gif";
import { CiSearch } from "react-icons/ci";
import Bg from './bg.jpg'
// import CurrentLocation from './currentLocation';


export default function Weather() {
    const [inputCity, setInputCity] = useState("")
    const [Data, setData] = useState('')
    const [seed, setSeed] = useState(null)
    // const [Data2, setData2] = useState({})
   
    
 
    
    async function changeIcon1(){
         let t = await (Data?.weather?.[0]?.main)
         if( t ===    'Clouds') {
            document.getElementById('changeIcon1').style.display = 'block'
            
        }
        else{
            document.getElementById('changeIcon1').style.display = 'none'
            
        }
        
    }
    changeIcon1()
    async function changeIcon2(){
         let t = await (Data?.weather?.[0]?.main)
         if( t ===    'Rain') {
            document.getElementById('changeIcon2').style.display = 'block'
        }
        else{
            document.getElementById('changeIcon2').style.display = 'none'
            
        }
        
    }
    changeIcon2();
    async function changeIcon3(){
         let t = await (Data?.weather?.[0]?.main)
         if( t ===    'Snow') {
            document.getElementById('changeIcon3').style.display = 'block'
        }
        else{
            document.getElementById('changeIcon3').style.display = 'none'
            
        }
        
    }
    changeIcon3();
    async function changeIcon4(){
         let t = await (Data?.weather?.[0]?.main)
         if( t ===   'Haze'){
            document.getElementById('changeIcon4').style.display = 'block'

        }
        else{
            document.getElementById('changeIcon4').style.display = 'none'
            
        }
        
    }
    changeIcon4();
    async function changeIcon5(){
         let t = await (Data?.weather?.[0]?.main)
         if( t ===    'Clear') {
            document.getElementById('changeIcon5').style.display = 'block'
        }
        else{
            document.getElementById('changeIcon5').style.display = 'none'
            
        }
        
    }
    changeIcon5();
    async function changeIcon6(){
         let t = await (Data?.weather?.[0]?.main)
         if( t ===    'Thunderstorm') {
            document.getElementById('changeIcon6').style.display = 'block'
    
        }
        else{
            document.getElementById('changeIcon6').style.display = 'none'
            
        }
        
    }
    changeIcon6();
    async function changeIcon7(){
         let t = await (Data?.weather?.[0]?.main)
         if( t ===    'Smoke') {
            document.getElementById('changeIcon7').style.display = 'block'
    
        }
        else{
            document.getElementById('changeIcon7').style.display = 'none'
            
        }
        
    }
    changeIcon7();
    async function changeIcon8(){
         let t = await (Data?.weather?.[0]?.main)
         if( t ===    'Mist') {
            document.getElementById('changeIcon8').style.display = 'block'
    
        }
        else{
            document.getElementById('changeIcon8').style.display = 'none'
            
        }
        
    }
    changeIcon8();
    async function changeIcon9(){
         let t = await (Data?.weather?.[0]?.main)
         if( t ===    'Drizzle') {
            document.getElementById('changeIcon9').style.display = 'block'
    
        }
        else{
            document.getElementById('changeIcon9').style.display = 'none'
            
        }
        
    }
    changeIcon9();
    async function changeIcon10(){
         let t = await (Data?.weather?.[0]?.main)
         if( t ===    'Dust') {
            document.getElementById('changeIcon10').style.display = 'block'
        }
        else{
            document.getElementById('changeIcon10').style.display = 'none'
            
        }
        
    }
    changeIcon10();
    async function changeIcon11(){
         let t = await (Data?.weather?.[0]?.main)
         if( t ===    'Fog') {
            document.getElementById('changeIcon11').style.display = 'block'
    
        }
        else{
            document.getElementById('changeIcon11').style.display = 'none'
            
        }
        
    }
    changeIcon11();
    async function changeIcon12(){
         let t = await (Data?.weather?.[0]?.main)
         if( t ===    'Squall') {
            document.getElementById('changeIcon12').style.display = 'block'
    
        }
        else{
            document.getElementById('changeIcon12').style.display = 'none'
            
        }
        
    }
    changeIcon12();
    async function changeIcon13(){
         let t = await (Data?.weather?.[0]?.main)
         if( t ===    'Tornado') {
            document.getElementById('changeIcon13').style.display = 'block'
    
        }
        else{
            document.getElementById('changeIcon13').style.display = 'none'
            
        }
        
    }
    changeIcon13();
    async function changeIcon14(){
         let t = await (Data?.weather?.[0]?.main)
         if( t === 'Sand') {
            document.getElementById('changeIcon14').style.display = 'block'
        }
        else{
            document.getElementById('changeIcon14').style.display = 'none'
            
        }
        
    }
    changeIcon14();


    const handlecity = () => {
        
        document.getElementById('temp').style.display = 'block'
        document.getElementById('cityname').style.display = 'block'
        document.getElementById('smallconatiner-1').style.display = 'block'
        document.getElementById('weatherchange').style.display = 'block'
        document.getElementById('tempcontainer').style.display = 'block'
        document.getElementById('citynotfound').style.display = 'none'
    }     
    const handlecityx = () => {
        
        document.getElementById('temp').style.display = 'none'
        document.getElementById('cityname').style.display = 'none'
        document.getElementById('smallconatiner-1').style.display = 'none'
        document.getElementById('weatherchange').style.display = 'none'
        document.getElementById('tempcontainer').style.display = 'none'
        document.getElementById('citynotfound').style.display = 'block'
    }     
        
     
    
    const apiKey = "1624c037434dbe318833d7c175b56cb8"
    


        async function getweather(cityName)  {
            const Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
            const response = await fetch(Url);
            const jsonData = await response.json();
            console.log(jsonData);
            setData(jsonData)
        }
   
    
      
       
        
        useEffect((e) => {
            getweather(inputCity)




          setTimeout(() => {
          if(Data?.cod === "404" || inputCity === '' || Data?.cod === "400"){
              // setInputCity()
                handlecityx()
                
            }
        }, 200);
            
          
          

        // handlecity()
          neww()
          giveData()
          // eslint-disable-next-line
    },[inputCity])

    
    
    
    
    

     setInterval (function(){
       let d = new Date();
       let n = d.getHours();
        if(n > 19 || n < 6){
            document.getElementById('container').style.backgroundImage = `url(${background2})`
            document.getElementById('suraj').style.display = 'block'
            document.getElementById('day').classList.add('day2')
            document.getElementById('hour').classList.add('hour2')
            document.getElementById('min').classList.add('min2')
            document.getElementById('sec').classList.add('sec2')
            document.getElementById('ampm').classList.add('ampm2')
            document.getElementById('bar1').classList.add('bar12')
            document.getElementById('bar2').classList.add('bar22')
        }else{
            document.getElementById('container').style.backgroundImage = `url(${background1})`
            document.getElementById('chand').style.display = 'block'
            document.getElementById('container').style.zIndex = '10'
        }
    }) 
    

     
  


    function giveData() {
        if(navigator.geolocation){
           navigator.geolocation.watchPosition(showPosition)
    }

    }
    function showPosition(positions){
        var lat = positions.coords.latitude
        var lon = positions.coords.longitude
        showData(lat,lon)

      
    }      
       
   
      
 
    async function showData(lat,lon){
        
        const fullApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1624c037434dbe318833d7c175b56cb8`
           const response = await fetch(fullApi);
           const jsonData2 = await response.json();
           setData(jsonData2)
           console.log(jsonData2);
        handlecity()

       }
        
        
        
    
    function neww(){
        if(inputCity !== ''){
            navigator.geolocation.clearWatch(showPosition)
        }

    }
    function doSomthing(){

            getweather(inputCity)
            // if(inputCity == Data?.name){
                navigator.geolocation.clearWatch(showPosition)
                handlecity()
        // }

    }
    function aaa(){
        let date = new Date();
        let day = date.getDay();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let ampm = hour >= 12 ? 'PM' : 'AM';
    
        let days = ['SUN','MON','TEU','WED','THU','FRI','SAT']
    
        hour = hour % 12;
        hour = hour ? hour : 12;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
        
        document.getElementById('day').innerHTML = days[day]
        document.getElementById('hour').innerHTML = hour
        document.getElementById('min').innerHTML = min
        document.getElementById('sec').innerHTML = sec
    }
    setInterval(aaa, 0)
    // aaa()
  return (
    
    

    <div className='bigContainer'>
        <div id='container' className="container" style={{boxShadow:'0px 0px 10px black'}}>
            <img id='suraj' className='suraj' src={night} alt=""  />
            <img id='chand' className='chand' src={day} alt="" />
            <CiSearch onClick={doSomthing} onKeyDown={doSomthing} style={{position: 'absolute', top:'35px',right: '20px'}} />
            <input className='input' id='input' key={seed} onKeyDown={(e) => {
        if (e.key === "Enter")
        doSomthing();
        }} value={inputCity} onClick={(e) => {neww(e.target.value)}} onChange={(e)=>{setInputCity(e.target.value)}}  placeholder='Enter your city...' type="text" />
            <h1 id='temp' className='temp'>{((Data?.main?.temp) - 273.15).toFixed(1)}°C</h1>
            <h1 id='cityname' className='cityname'>{Data?.name} ({Data?.sys?.country}) </h1>

            <div id='smallconatiner-1' className='smallconatiner-1'>
                <h3>Weather: {Data?.weather?.[0]?.main}</h3>
                <h3>humidity: {Data?.main?.humidity}</h3>
            </div>

            <div id='weatherchange' className='weatherchange' >
                <img id='changeIcon1' className='changeIcon' src={cloudes} alt="" />
                <img id='changeIcon12' className='changeIcon' src={cloudes} alt="" />
                <img id='changeIcon2' className='changeIcon' src={rain} alt="" />
                <img id='changeIcon3' className='changeIcon' src={snow} alt="" />
                <img id='changeIcon4' className='changeIcon' src={haze} alt="" />
                <img id='changeIcon8' className='changeIcon' src={haze} alt="" />
                <img id='changeIcon11' className='changeIcon' src={haze} alt="" />
                <img id='changeIcon5' className='changeIcon' src={clear} alt="" />
                <img id='changeIcon6' className='changeIcon' src={Thunderstorm} alt="" />
                <img id='changeIcon7' className='changeIcon' src={smoke} alt="" />
                <img id='changeIcon9' className='changeIcon' src={drizzle} alt="" />
                <img id='changeIcon10' className='changeIcon' src={dust} alt="" />
                <img id='changeIcon13' className='changeIcon' src={Tornado} alt="" />
                <img id='changeIcon14' className='changeIcon' src={sand} alt="" />
            </div>

            <div id='tempcontainer' className="tempcontainer">
                <h4>Max-temp: {((Data?.main?.temp_max) - 273.15).toFixed(1)}°C | | Max-temp: {((Data?.main?.temp_min) - 273.15).toFixed(1)}°C</h4>

            </div>

            <div id='citynotfound'>
                <h1>City Not Found</h1>
                <img id='warning' className='warning' src={warning} alt="" />
            </div>
        </div>
        <div class="time">
        <div id="day" className='day'>day</div>
        <div class="hero">
            <div id="hour" className='hour'>04</div>
            <div id="bar1" className='bar1'>|</div>
            <div id="min" className='min'>45</div>
            <div id="bar2" className='bar2'>|</div>
            <div id="sec" className='sec'>09</div>
        </div>
        <div id="ampm"className='ampm'>AM</div>
    </div>

    </div>
    
  )
}