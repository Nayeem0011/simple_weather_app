import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 flex flex-col items-center justify-start p-6">
        <h1 className="text-white text-4xl font-extrabold mb-8 drop-shadow-lg">
          Weather App
        </h1>

        <div className="w-full max-w-md bg-white bg-opacity-90 rounded-3xl p-6 shadow-xl">
          <SearchBar />
          <WeatherDisplay />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;

