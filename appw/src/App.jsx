import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';
import WeatherCard from './components/WeatherCard'

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState(''); 
  const API_key = 'fbc2477fac241eda8296cc0cbba53eca'; 

  const defaultCity = 'New York'; 
  const defaultUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${API_key}&units=metric`;
  const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}&units=metric`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(searchUrl)
        .then((response) => {
          setData(response.data);
          setError('');  
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            setError('City not found. Please try again.');
          } else {
            setError('An error occurred. Please try again later.');
          }
        });
      setLocation(''); 
    }
  };

  useEffect(() => {
    axios.get(defaultUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching default weather data", error);
      });
  }, []); 

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 via-white to-gray-200 p-4">
      <div className="max-w-4xl w-full mx-auto p-8 bg-white bg-opacity-80 backdrop-blur-lg shadow-2xl rounded-3xl">
        {/* SearchBar component */}
        <SearchBar 
          location={location} 
          setLocation={setLocation} 
          handleSearch={searchLocation} 
        />
      
        {/* ErrorMessage component */}
        <ErrorMessage error={error} /> 

        {/* WeatherCard component */}
        <WeatherCard data={data} />
      </div>
    </div>
  );
}

export default App;
