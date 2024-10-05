import React from 'react';

const WeatherCard = ({ data }) => {
  // weather icon code
  const iconCode = data.weather ? data.weather[0].icon : null;
  const iconUrl = iconCode ? `http://openweathermap.org/img/wn/${iconCode}@4x.png` : '';

  return (
    <div className="text-center mt-5 ">
      {data.name && <h1 className="text-4xl font-semibold ">{data.name}, {data.sys?.country}</h1>}
      
      {data.main ? (
        <div className="bg-gradient-to-r from-indigo-200 ..mt-6 bg-white bg-opacity-20 p-8 rounded-xl shadow-xl backdrop-blur-sm flex flex-col items-center">
          {/* Weather Icon */}
          {iconCode && (
            <img
              src={iconUrl}
              alt="Weather Icon"
              className="w-32 h-32 animate-pulse"
            />
          )}

          {/* Temperature */}
          <p className="text-5xl font-bold mt-4">{Math.round(data.main.temp)}°C</p>

          {/* Weather Description */}
          <p className="text-2xl text-gray-700 mt-2 capitalize">{data.weather[0].description}</p>

          {/* Additional Information */}
          <div className="flex justify-between w-full mt-6">
            <div className="flex flex-col items-center">
              <p className="text-lg text-gray-600">Humidity</p>
              <p className="text-2xl font-semibold">{data.main.humidity}%</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg text-gray-600">Wind Speed</p>
              <p className="text-2xl font-semibold">{data.wind.speed} km/h</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg text-gray-600">Pressure</p>
              <p className="text-2xl font-semibold">{data.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-400 mt-6">Please enter a city to get weather information</p>
      )}
    </div>
  );
};

export default WeatherCard;
