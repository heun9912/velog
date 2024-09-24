import { useState } from "react";
import { useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState();
  function getLocation() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const pos = position.coords;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=4e6e1f3312fe0fe7951705df82584d28&units=metric`
      );
      const data = await response.json();
      setWeather({ temp: data.main.temp, city: data.name });
    });
  }
  useEffect(() => {
    getLocation();
  }, []);
  return <p>오늘의 온도는 {weather?.temp}도 입니다.</p>;
}
export default Weather;
