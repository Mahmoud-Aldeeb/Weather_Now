import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import CurrentWeather from "./components/CurrentWeather";
import { fetchWeather } from "./utils/fetchWeather";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [system, setSystem] = useState("metric");

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white px-4 py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Header system={system} setSystem={setSystem} />
          <SearchBar onSearch={handleSearch} />
          {weather && (
            <>
              <WeatherCard data={weather} system={system} />
              <CurrentWeather data={weather} system={system} />
              <WeatherDetails data={weather} system={system} />
              <DailyForecast days={weather.daily} system={system} />
            </>
          )}
        </div>
        {weather && <HourlyForecast hours={weather.hourly} system={system} />}
      </div>
    </div>
  );
};

export default App;
