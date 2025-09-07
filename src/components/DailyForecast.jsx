import React from "react";

const DailyForecast = ({ days, system }) => {
  const tempUnit = system === "metric" ? "°C" : "°F";

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Daily Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
        {days.map((day, i) => (
          <div key={i} className="bg-slate-600 rounded-md p-3 text-center">
            <p className="font-medium">{day.name}</p>
            <img src={day.icon} alt={day.text} className="mx-auto w-8 h-8" />
            <p className="text-sm">{day.text}</p>
            <p className="text-sm">
              Temp: {Math.round(system === "metric" ? day.temp_c : day.temp_f)}
              {tempUnit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
