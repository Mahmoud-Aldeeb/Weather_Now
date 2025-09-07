const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

console.log("API KEY:", process.env.REACT_APP_WEATHER_API_KEY);

export const fetchWeather = async (city) => {
  try {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`;
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200 || data.error) {
      throw new Error(data.error?.message || "Failed to fetch weather data");
    }

    const forecastDays = Array.isArray(data.forecast?.forecastday)
      ? data.forecast.forecastday
      : [];

    const hourlyData = forecastDays[0]?.hour?.slice(15, 23) || [];

    return {
      location: `${data.location.name}, ${data.location.country}`,
      date: data.location.localtime?.split(" ")[0] || "N/A",
      icon: data.current?.condition?.icon ?? "",
      description: data.current?.condition?.text ?? "Unknown",

      // درجات الحرارة والرياح والمطر بالقيمتين
      temp_c: data.current?.temp_c ?? "N/A",
      temp_f: data.current?.temp_f ?? "N/A",
      feelslike_c: data.current?.feelslike_c ?? "N/A",
      feelslike_f: data.current?.feelslike_f ?? "N/A",
      wind_kph: data.current?.wind_kph ?? "N/A",
      wind_mph: data.current?.wind_mph ?? "N/A",
      precip_mm: data.current?.precip_mm ?? "N/A",
      precip_in: data.current?.precip_in ?? "N/A",
      humidity: data.current?.humidity ?? "N/A",

      // التنبؤ اليومي
      daily: forecastDays.map((d) => ({
        name: new Date(d.date).toLocaleDateString("en-US", {
          weekday: "short",
        }),
        temp_c: d.day?.avgtemp_c ?? "N/A",
        temp_f: d.day?.avgtemp_f ?? "N/A",
        icon: d.day?.condition?.icon ?? "",
        text: d.day?.condition?.text ?? "Unknown",
      })),

      // التنبؤ الساعي
      hourly: hourlyData.map((h) => ({
        time: h.time?.split(" ")[1] ?? "N/A",
        temp_c: h.temp_c ?? "N/A",
        temp_f: h.temp_f ?? "N/A",
        icon: h.condition?.icon ?? "",
      })),
    };
  } catch (err) {
    console.error("Weather API error:", err.message);
    return null;
  }
};
