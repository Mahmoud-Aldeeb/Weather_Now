import React from "react";

const CurrentWeather = ({ data, system }) => {
  const temp = system === "metric" ? data.temp_c : data.temp_f;
  const feelsLike = system === "metric" ? data.feelslike_c : data.feelslike_f;
  const wind = system === "metric" ? data.wind_kph : data.wind_mph;
  const precip = system === "metric" ? data.precip_mm : data.precip_in;

  const tempUnit = system === "metric" ? "°C" : "°F";
  const windUnit = system === "metric" ? "km/h" : "mph";
  const precipUnit = system === "metric" ? "mm" : "in";

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-md text-center mb-6 border border-slate-700">
      <h2 className="text-2xl font-semibold text-blue-300 mb-2">
        {data.location}, {data.country}
      </h2>
      <img
        src={data.icon}
        alt={data.description}
        className="mx-auto w-20 h-20"
      />
      <p className="text-lg text-gray-300">{data.description}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 text-sm text-gray-400">
        <p>
          🌡️ Temp: {Math.round(temp)}
          {tempUnit}
        </p>
        <p>
          🤒 Feels Like: {Math.round(feelsLike)}
          {tempUnit}
        </p>
        <p>💧 Humidity: {data.humidity}%</p>
        <p>
          🌬️ Wind: {Math.round(wind)} {windUnit}
        </p>
        <p>
          🌧️ Precipitation: {Math.round(precip)} {precipUnit}
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
