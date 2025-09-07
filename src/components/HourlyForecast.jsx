import React from "react";

const HourlyForecast = ({ hours, system }) => {
  const tempUnit = system === "metric" ? "°C" : "°F";

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Hourly Forecast</h3>
      <div className="space-y-3">
        {hours.map((hour, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-slate-700 rounded-md p-2"
          >
            <p>{hour.time}</p>
            <img src={hour.icon} alt="Icon" className="w-6 h-6" />
            <p>
              {Math.round(system === "metric" ? hour.temp_c : hour.temp_f)}
              {tempUnit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
