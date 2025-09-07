# 🌤️ Weather Now

**Weather Now** is a sleek, responsive weather application built with React and Tailwind CSS. It allows users to search for any city worldwide and view current weather conditions, hourly forecasts, and a 7-day outlook — all wrapped in a modern dark-themed interface. The app supports both Metric and Imperial units, giving users full control over how data is displayed.

---

## 🚀 Features

- 🔍 Search for any city globally
- 🌡️ View current temperature, feels-like, humidity, wind speed, and precipitation
- 📅 7-day daily forecast with weather icons and temperature highs
- ⏱️ Hourly forecast from 4 PM to 10 PM
- 🧭 Toggle between Metric (°C, km/h, mm) and Imperial (°F, mph, in)
- 🎨 Dark mode UI with responsive layout for mobile and desktop
- 🛡️ Defensive programming to handle missing or undefined API data

---

## 🛠️ Tech Stack

- **React JS** – Component-based frontend framework
- **Tailwind CSS** – Utility-first CSS for rapid UI development
- **WeatherAPI.com** – External API for real-time weather data
- **JavaScript (ES6+)** – Logic, state management, and API integration

---

## 📦 Installation

```bash

# Install dependencies
npm install

# Add your WeatherAPI key in a .env file
REACT_APP_WEATHER_API_KEY=your_api_key_here

# Start the development server
npm start


src/
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   ├── CurrentWeather.jsx
│   ├── WeatherDetails.jsx
│   ├── DailyForecast.jsx
│   ├── HourlyForecast.jsx
├── utils/
│   └── fetchWeather.js
├── App.jsx
├── index.js
├── index.css



```

📐 Unit System
Users can switch between:

Metric: Celsius (°C), kilometers/hour (km/h), millimeters (mm)

Imperial: Fahrenheit (°F), miles/hour (mph), inches (in)

The selected unit system updates all components dynamically.

🧠 Smart Error Handling
API errors are caught and logged gracefully

UI components are protected against undefined or missing data

All numeric values are rounded for clean display

👨‍💻 Developer
Mahmoud Frontend developer passionate about building clean, responsive interfaces with React and Tailwind. 📍 Alexandria, Egypt
