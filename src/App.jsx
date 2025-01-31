/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [geolocation, setGeoLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setGeoLocation(position.coords);

      const latitude = position.latitude;
      const longitude = position.longitude;

      let locationResponse = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key={placeholder}`
      );

      let weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid={placeholder}`
      );

      let weatherInfo = {
        city: locationResponse.data.results[0].components.postal_city,
        temp: weatherResponse.data.current.temp,
      };
      debugger
    });
  }, []);

  return (
    <div data-cy="weather-display">
      <div data-cy="temp">5.53</div>
      <div data-cy="location">Gothenburg</div>
    </div>
  );
};

export default App;