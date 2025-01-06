import aetherError from '../../../shared/utils/aetherError.js'
import aetherResponse from '../../../shared/utils/aetherResponse.js'

const getTopHeadlines = async (req, res)=> {
  try {
    const {country='india', page=1 , pageSize=10} = req.query
    const params = { apiKey: NEWS_API_KEY, country, page, pageSize }
  } catch (err) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}