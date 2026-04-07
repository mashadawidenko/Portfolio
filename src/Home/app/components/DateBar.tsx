import { useState, useEffect } from "react";

interface WeatherData {
  temp: number;
  city: string;
  condition: string;
}

export function DateBar() {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔽 Обновляем время каждую секунду
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 🔽 Получаем погоду по геолокации (БЕЗ API КЛЮЧА!)
  useEffect(() => {
    const getWeather = async () => {
      try {
        // 1. Запрашиваем геолокацию
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 5000,
            maximumAge: 600000,
          });
        });

        const { latitude, longitude } = position.coords;

        // 2. Получаем погоду через Open-Meteo (БЕСПЛАТНО, без API key!)
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );

        // 3. Получаем название города через обратное геокодирование
        const geoResponse = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );

        const [weatherData, geoData] = await Promise.all([
          weatherResponse.json(),
          geoResponse.json(),
        ]);

        setWeather({
          temp: Math.round(weatherData.current_weather.temperature),
          city: geoData.city || geoData.locality || "Your location",
          condition: getWeatherCondition(weatherData.current_weather.weathercode),
        });

        setLoading(false);
      } catch (err) {
        // Если геолокация запрещена — показываем погоду для Лондона (по умолчанию)
        const fallbackWeather = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true"
        );
        const data = await fallbackWeather.json();
        
        setWeather({
          temp: Math.round(data.current_weather.temperature),
          city: "London",
          condition: getWeatherCondition(data.current_weather.weathercode),
        });
        setLoading(false);
      }
    };

    getWeather();
  }, []);

  // 🔽 Расшифровка кодов погоды Open-Meteo
  const getWeatherCondition = (code: number): string => {
    if (code === 0) return "Clear";
    if (code >= 1 && code <= 3) return "Cloudy";
    if (code >= 45 && code <= 48) return "Foggy";
    if (code >= 51 && code <= 67) return "Rainy";
    if (code >= 71 && code <= 77) return "Snowy";
    if (code >= 80 && code <= 82) return "Rainy";
    if (code >= 85 && code <= 86) return "Snowy";
    if (code >= 95) return "Thunderstorm";
    return "Clear";
  };

  // 🔽 Иконка погоды по условию
  const getWeatherIcon = (condition: string): string => {
    switch (condition) {
      case "Clear": return "☀️";
      case "Cloudy": return "☁️";
      case "Foggy": return "🌫️";
      case "Rainy": return "🌧️";
      case "Snowy": return "❄️";
      case "Thunderstorm": return "⛈️";
      default: return "🌤️";
    }
  };

  const dateStr = time.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const timeStr = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="border-b border-[#dadada] py-6 px-6 md:px-10 lg:px-[20px]">
      <div className="max-w-[auro mx-auto flex items-center justify-between">
        {/* Дата */}
        <span className="font-['Inter',sans-serif] font-medium text-[#161616] text-[14px] md:text-[16px] leading-[28px]">
          {dateStr}
        </span>

        {/* Погода + Время */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Погода */}
          {loading ? (
            <span className="font-['Inter',sans-serif] text-[#999] text-[14px] md:text-[16px]">
              Loading...
            </span>
          ) : weather ? (
            <div className="flex items-center gap-2">
              <span className="text-xl">{getWeatherIcon(weather.condition)}</span>
              <span className="font-['Inter',sans-serif] font-medium text-[#161616] text-[14px] md:text-[16px]">
                {weather.temp}°C {weather.city}
              </span>
            </div>
          ) : null}

          {/* Время */}
          <span className="font-['Inter',sans-serif] font-medium text-[#161616] text-[14px] md:text-[16px] leading-[28px]">
            {timeStr}
          </span>
        </div>
      </div>
    </div>
  );
}