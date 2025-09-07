import React from "react";

const WeatherDetails = ({ data, system }) => {
  const feelsLike = system === "metric" ? data.feelslike_c : data.feelslike_f;
  const wind = system === "metric" ? data.wind_kph : data.wind_mph;
  const precip = system === "metric" ? data.precip_mm : data.precip_in;

  const tempUnit = system === "metric" ? "°C" : "°F";
  const windUnit = system === "metric" ? "km/h" : "mph";
  const precipUnit = system === "metric" ? "mm" : "in";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm text-gray-400">
      <div className="bg-slate-600 rounded-md p-3 text-center">
        Feels Like: {Math.round(feelsLike)}
        {tempUnit}
      </div>
      <div className="bg-slate-600 rounded-md p-3 text-center">
        Humidity: {data.humidity}%
      </div>
      <div className="bg-slate-600 rounded-md p-3 text-center">
        Wind: {Math.round(wind)} {windUnit}
      </div>
      <div className="bg-slate-600 rounded-md p-3 text-center">
        Precipitation: {Math.round(precip)} {precipUnit}
      </div>
    </div>
  );
};

export default WeatherDetails;
