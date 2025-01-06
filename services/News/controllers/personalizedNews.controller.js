import aetherError from '../../../shared/utils/aetherError.js'
import aetherResponse from '../../../shared/utils/aetherResponse.js'
import userPreferences from '../utils/userPreferences.js'

const getPersonalizedNews = async (req, res)=> {
  try {
    const userId = req.user.id
    const { page = 1, pageSize = 10 } = req.query
    


  } catch (err) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}