import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherDisplay = () => {
  const { city, weather, loading, error } = useContext(WeatherContext);

  if (loading) {
    return <p className="text-center text-blue-700 text-lg">Loading weather...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 bg-red-100 px-4 py-2 rounded-md font-medium">
        {error}
      </p>
    );
  }

  if (!weather) return null;

  const sunriseTime = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className="mt-8 max-w-md w-full mx-auto bg-white rounded-3xl shadow-xl p-6 text-gray-800 space-y-6">

      {/* City & Weather Icon */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-blue-700">{city}, {weather.sys.country}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="w-20 h-20"
        />
        <p className="capitalize text-lg text-gray-600">{weather.weather[0].description}</p>
      </div>

      {/* Temperature */}
      <div className="text-center">
        <p className="text-5xl font-extrabold text-blue-800">
          {Math.round(weather.main.temp)}°C
        </p>
        <p className="text-sm text-gray-500">
          Feels Like: {Math.round(weather.main.feels_like)}°C
        </p>
      </div>

      {/* Weather Stats Grid */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <p className="font-medium">Humidity</p>
          <p>{weather.main.humidity}%</p>
        </div>
        <div>
          <p className="font-medium">Wind Speed</p>
          <p>{weather.wind.speed} m/s</p>
        </div>
        <div>
          <p className="font-medium">Wind Gust</p>
          <p>{weather.wind.gust || 'N/A'} m/s</p>
        </div>
        <div>
          <p className="font-medium">Pressure</p>
          <p>{weather.main.pressure} hPa</p>
        </div>
        <div>
          <p className="font-medium">Sea Level</p>
          <p>{weather.main.sea_level || 'N/A'} hPa</p>
        </div>
        <div>
          <p className="font-medium">Ground Level</p>
          <p>{weather.main.grnd_level || 'N/A'} hPa</p>
        </div>
        <div>
          <p className="font-medium">Cloudiness</p>
          <p>{weather.clouds.all}%</p>
        </div>
        <div>
          <p className="font-medium">Rain (1h)</p>
          <p>{weather.rain?.['1h'] || 0} mm</p>
        </div>
      </div>

      {/* Sunrise & Sunset */}
      <div className="flex justify-between text-sm text-gray-600 pt-2 border-t mt-4">
        <div>
          <p className="font-medium">Sunrise</p>
          <p>{sunriseTime}</p>
        </div>
        <div>
          <p className="font-medium">Sunset</p>
          <p>{sunsetTime}</p>
        </div>
      </div>

      {/* Coordinate */}
      <p className="text-xs text-center text-gray-500 pt-2">
        Location: [{weather.coord.lat}, {weather.coord.lon}]
      </p>
    </div>
  );
};
export default WeatherDisplay;