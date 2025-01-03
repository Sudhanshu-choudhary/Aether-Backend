import { fetchCurrentWeather } from '../utils/weatherAPI.js'
import aetherError from '../../../shared/utils/aetherError.js'
import aetherResponse from '../../../shared/utils/aetherResponse.js'

const getCurrentWeather = async (req, res) => {
  try {
    const { city } = req.query
    if (!city) {
      return res.status(400).json(new aetherError('City is required'));
    }
    
    const weatherData = await fetchCurrentWeather(city);
    return res.status(200).json(new aetherResponse(weatherData));
  } catch (error) {
    return res.status(500).json(new aetherError("what the fuck" || error.message));
  }
}

export default getCurrentWeather