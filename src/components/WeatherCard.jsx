import React from "react";

const WeatherCard = ({ data, system }) => {
  const temp = system === "metric" ? data.temp_c : data.temp_f;
  const tempUnit = system === "metric" ? "°C" : "°F";

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl p-6 shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-2">{data.location}</h2>
      <p className="text-sm text-gray-300 mb-4">{data.date}</p>
      <div className="flex items-center justify-between">
        <img src={data.icon} alt={data.description} className="w-16 h-16" />
        <p className="text-6xl font-bold text-white">
          {Math.round(temp)}
          {tempUnit}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
