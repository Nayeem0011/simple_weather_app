
import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Dhaka");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const  fetchWeather = async (cityName) =>{
    setLoading(true)
    setError('')
    setCity(cityName)

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=785031c36ca924071ccd714342084fe3&units=metric`)
      const data = await response.json()
      console.log(data)

      if (response.ok){
        setWeather(data)
      }else{
        setError(data.message || 'Fetching Weather Error')
      }

    } catch (error) {
      setError('Networ Error', error)
    }finally{
      setLoading(false)
    }
  }
  return (
    <WeatherContext.Provider value={{city, weather, loading, error, fetchWeather}}>
      {children}
    </WeatherContext.Provider>
  )
};