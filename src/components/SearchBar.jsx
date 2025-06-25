import React, { Fragment, useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const { fetchWeather } = useContext(WeatherContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      fetchWeather(input.trim());
      setInput('');
    }
  };

  return (
    <Fragment>
      <form
        onSubmit={submitHandler}
        className="flex items-center gap-2 w-full max-w-xl bg-white border border-blue-300 rounded-full px-5 py-2 shadow-md focus-within:ring-2 focus-within:ring-blue-400 transition"
      >
        <input
          type="text"
          placeholder="Address, City or Zip Code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow outline-none bg-transparent text-gray-800 placeholder-gray-500 text-base"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 text-sm rounded-full transition font-medium"
        >
          Search
        </button>
      </form>
    </Fragment>
  );
};

export default SearchBar;

