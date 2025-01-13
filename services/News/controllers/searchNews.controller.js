import aetherError from '../../../shared/utils/aetherError.js';
import aetherResponse from '../../../shared/utils/aetherResponse.js';
import { NEWS_API_KEY, newsSearchUrl } from '../config/config.js';
import axios from 'axios';

const searchNews = async (req, res)=> {
  try {
    const { searchQuery } = req.body;
    if(!searchQuery) throw new aetherError(301, 'Enter some keyword to search!!')

    const params = { apikey: NEWS_API_KEY, q: searchQuery, sortBy: relevancy }

    const { data } = await axios.get(newsSearchUrl, { params })
    if(!data){
      throw new aetherError(501, 'does not match any news searches')
    }

    return res.status(200).json(new aetherResponse.success(201, data))
  } catch (err) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}

export default searchNews;