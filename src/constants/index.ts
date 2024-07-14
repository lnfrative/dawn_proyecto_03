const forecastMainTags: Record<string, string> = {
  "temp": 'Temperatura',
  "feels_like": 'Sensación térmica',
  "temp_min": 'Temperatura mínima',
  "temp_max": 'Temperatura máxima',
  "pressure": 'Presión',
  "sea_level": 'Nivel del mar',
  "grnd_level": 'Nivel de arena',
  "humidity": 'Humedad',
}

export const openWeatherMap = {
  apiKey: "0b9c873bf4e75364c8553ff67f4aacf9",
  forecastEndpoint: "https://api.openweathermap.org/data/2.5/forecast",

  forecastMainTags
}

