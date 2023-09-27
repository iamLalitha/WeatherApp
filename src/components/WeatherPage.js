import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import cold from '../cold.png';
import drizzling from '../drizzle.gif';
import sunny from '../sungif.gif';
import warm from '../warm.gif';
import './WeatherPage.css';

function WeatherPage() {
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    const apiKey = '95a7df8a003357d948e8bbc2fe7955c5';
    const city = new URLSearchParams(location.search).get('city');
    console.log('City:', city);

    if (city) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((response) => {
          setData(response.data);
          console.log('Weather Data:', response.data); 
          updateBodyBackground(response.data.main);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [location.search]);

  function getTemperatureImage(temperature) {
    if (temperature < 10) {
      return cold;
    } else if (temperature >= 10 && temperature < 20) {
      return drizzling;
    } else if (temperature >= 20 && temperature < 30) {
      return warm;
    } else {
      return sunny;
    }
  }

  
  function updateBodyBackground(mainData) {
    const temperature = mainData ? Math.round(mainData.temp - 273.15) : null;
    let bodyClass = '';

    if (temperature !== null) {
      if (temperature < 10) {
        bodyClass = 'cold-bg';
      } else if (temperature >= 10 && temperature < 20) {
        bodyClass = 'cool-bg';
      } else if (temperature >= 20 && temperature < 30) {
        bodyClass = 'warm-bg';
      } else {
        bodyClass = 'hot-bg';
      }
    }

    document.body.className = bodyClass;
  }

  const temperature = data.main ? Math.round(data.main.temp - 273.15) : null;
  
  return (
    <div className='card mx-auto shadow p-3 mb-5 bg-body rounded' style={{width:'30rem'}}>
    <div className="card-body">
    <h2 className='card-title animate-character' >{data.name}, {data.sys?.country}</h2>
    
      {data.main ? (
        <>
          <p className='card-subtitle mb-2' style={{fontFamily:'courier'}}>{new Date(data.dt * 1000).toLocaleString()}</p>
          <img src={getTemperatureImage(temperature)} alt="waether" style={{width:'200px'}}/>
          <br></br>
          <div className='row'>
            <div className='col'>
              <br></br>
          <p style={{fontFamily:'courier'}}>Temperature: {Math.round(data.main?.temp - 273.15)}°C</p>
          <p style={{fontFamily:'courier'}}>Rain: {data.weather?.[0].description}</p>
          <p style={{fontFamily:'courier'}}>Wind Speed: {data.wind?.speed} m/s</p>
          </div>
          <div className='col-auto'>
            <br></br>
          <p style={{fontFamily:'courier'}}>Humidity: {data.main?.humidity}%</p>
          <p style={{fontFamily:'courier'}}>Latitude: {data.coord?.lat}</p>
          <p style={{fontFamily:'courier'}}>Longitude: {data.coord?.lon}</p>
          </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      </div>
      
  </div>
  
  
  );
}

export default WeatherPage;




