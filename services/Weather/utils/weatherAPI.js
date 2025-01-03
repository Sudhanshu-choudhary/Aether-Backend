import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
const API_KEY = process.env.OPENWEATHER_API_KEY
const API_BASE_URL = process.env.API_BASE_URL

export const fetchCurrentWeather = async (city) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching current weather');
  }
}


export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching forecast');
  }
}