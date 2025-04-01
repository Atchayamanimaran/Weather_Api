import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = "9334f65eac03523d11970a00b1a5db7c";

    const getWeather = async () => {
        if (!city) return;
        try {
            const { data } = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );
            setWeatherData(data);
        } catch (error) {
            alert("City not found! Please enter a valid city.");
        }
    };

    return (
        <div className="app-container">
            <h1> Weather Finder🌦️</h1>
            <input
                type="text"
                placeholder="Enter city "
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={getWeather}>Get Weather</button>

            {weatherData && (
                <div className="weather-details">
                    <h2>{weatherData.name}</h2>
                    <p>🌡 Temperature: {weatherData.main.temp}°C</p>
                    <p>🌥 Condition: {weatherData.weather[0].description}</p>
                    <p>💨 Wind Speed: {weatherData.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
};

export default App;