import React, { useState } from "react";

const Header = ({ system, setSystem }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (value) => {
    setSystem(value);
    setOpen(false);
  };

  return (
    <header className="flex justify-between items-center mb-6 relative">
      <h1 className="text-3xl font-bold text-white">Weather Now</h1>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="text-white border border-slate-500 px-3 py-1 rounded-md"
        >
          Units ⌄
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-600 rounded-md shadow-lg z-10">
            <button
              onClick={() => handleSelect("metric")}
              className={`block w-full text-left px-4 py-2 text-white hover:bg-slate-700 ${
                system === "metric" ? "bg-slate-700" : ""
              }`}
            >
              Metric (°C, km/h, mm)
            </button>
            <button
              onClick={() => handleSelect("imperial")}
              className={`block w-full text-left px-4 py-2 text-white hover:bg-slate-700 ${
                system === "imperial" ? "bg-slate-700" : ""
              }`}
            >
              Imperial (°F, mph, in)
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
