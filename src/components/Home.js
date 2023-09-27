import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import redumbrella from '../redumbrella.jpg';


function Home() {
    const [city,setCity] = useState("");
    const navigate = useNavigate();

     const handleSubmit =(e)=>{
        e.preventDefault();
        if(city){
            navigate(`/weather?city=${city}`);
        }
     }
  return (
    <div className="card mx-auto shadow p-3 mb-5 bg-body rounded" style={{ maxWidth: '30rem' }}>
    <div className="card-body">
      <div className="card-title animate-character">Weather App</div>
      <div className="row">
        <div className="col">
          <input
            size={20}
            type="search"
            placeholder="Enter city name"
            className="form-control"
            aria-label="search"
            aria-describedby="search-addon"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleSubmit}
          >
            Search
          </button>
          </div>
          <img src={redumbrella} alt='weather' style={{width:350}} className="img-fluid"/>
      </div>
    </div>
  </div>
  )
}

export default Home















// import React, { useState } from 'react'
// import Axios from 'axios'
// import { useNavigate } from 'react-router-dom';

// const KEY ='95a7df8a003357d948e8bbc2fe7955c5';
// function Home() {

//     const [city,setCity] = useState("");
//     const [data,setData] = useState("");

//   const fetchData= async ()=>{
//     try{
//       const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
//      setData(response.data);
//     } 
//    catch(err){
//     alert('error in api call');
//    }
//   }

//   return (
//   <div className='card mx-auto' style={{width:'25rem'}} >
//       <div className='card-body'>
//       <h1 className='card-title'>Weather App</h1>
//         <div className='mb-3'>
//           <label for="input" className='form-label'></label>
//         <input type='text' className='form-control' id='input'
//         placeholder='enter the city name'
//         value={city}
//         onChange={e=> setCity(e.target.value)}></input>
//         <br></br>
//             <button onClick={fetchData} className='btn btn-primary'>
//             Fetch
//             </button>
//         <div>
//           {data && (
//             <div className='container'>
//              <h1 className='city-name'> {data.name}, {data.sys.country}</h1>
//              <div className='weather-info'>
//               {Math.round(data.main.temp)} C
//              </div>
//              <div className='coordinates'>
//              <div>Latitude - {data.coord.lat}</div>
//              <div>Longitude - {data.coord.lon}</div>
//              </div>
//             </div>
//           )}
//         </div>
//         </div>
//         </div>
//         </div>
//   )
// }

// export default Home