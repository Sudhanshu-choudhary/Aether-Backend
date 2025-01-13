import aetherError from '../../../shared/utils/aetherError.js'
import aetherResponse from '../../../shared/utils/aetherResponse.js'
import { topHeadlinesUrl, NEWS_API_KEY } from '../config/config.js'
import axios from 'axios'

const getTopHeadlines = async (req, res)=> {
  try {
    const { country='india', page=1 , pageSize=10 } = req.query
    const params = { apiKey: NEWS_API_KEY, country, page, pageSize }
    if(!apiKey){
      throw new aetherError(401, 'Api key not found or expired!!')
    }
    
    const { data } = await axios.get(topHeadlinesUrl, {params})
    if(data.status !== 'ok'){
      throw new aetherError(501, 'Failed during fetching headlines')
    }

    return res.status(200).json(new aetherResponse.success(201, data))

  } catch (err) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}

export default getTopHeadlines;