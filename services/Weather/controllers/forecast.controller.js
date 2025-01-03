import { fetchForecast } from '../utils/weatherAPI.js'
import aetherError from '../../../shared/utils/aetherError.js'
import aetherResponse from '../../../shared/utils/aetherResponse.js'

const getForecast = async (req, res) => {
  try {
    const { city } = req.query;
    if (!city) {
      return res.status(400).json(new aetherError('City is required'));
    }

    const forecastData = await fetchForecast(city);
    return res.status(200).json(new aetherResponse(forecastData));
  } catch (error) {
    return res.status(500).json(new aetherError(error.message));
  }
}

export default getForecast