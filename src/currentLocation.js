import React, { Component } from 'react'


export default class currentLocation extends Component {


    
    state = { 
        lat: undefined,
        lon: undefined
    }
    componentDidMount(){
        if(navigator.geolocation){
            this.getPosition()
            .then((position) => {
                // console.log(position);
                this.getWeather(position.coords.lat, position.coords.lon)
                // console.log(this.props.handlelnput)
                
            })
            // .catch((err) => {
                //     alert('hewjd')
                // })
                
            }
            
        }
        getPosition = (Options) => {
            return new Promise(function (resolve, reject ){
                navigator.geolocation.getCurrentPosition(resolve, reject, Options)
            })
    
        }
    
        getWeather = async(lat,lon) =>{
            const locationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1624c037434dbe318833d7c175b56cb8`
            const response = await fetch(locationUrl);
            const jsonData = await response.json();
            console.log(jsonData);
            // console.log(response);
            
            this.setState({
                lat: lat,
                lon: lon
            })
        }
    render() {
       return (
      <>
      
      </>
    )
  }
}
