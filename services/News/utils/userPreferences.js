import aetherError from '../../../shared/utils/aetherError.js'
import newsPreference from '../models/newsPreference.model.js'

const userPreferences = async (userId)=> {
  if(!userId) throw new aetherError(301, 'User ID not provided/ Authentication problem')
  
  const preferences = await newsPreference.findOne({userId}).lean()
  if(!preferences) throw new aetherError(301, 'Preferences not set')

  return preferences
}

export default userPreferences


//caching to be implemented