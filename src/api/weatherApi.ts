import axios from 'axios'

const API_KEY = '33a5fa5ead30d15eb3a2070a744ffa85'
const weatherApiClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
})

export const fetchWeather = async (city: string) => {
  try {
    const response = await weatherApiClient.get('/weather', {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'nl',
      },
    })
    return response.data
  } catch (error) {
    console.error('Fout bij het ophalen van het weer:', error)
    return null
  }
}
