import aetherError from '../../../shared/utils/aetherError.js'
import aetherResponse from '../../../shared/utils/aetherResponse.js'
import newsPreference from '../models/newsPreference.model.js'

export const getPreferences = async (req, res)=> {
  try {
    const {userId, categories, languages, sources } = req.body
    //logic of extracting user from userId needs to be done
    //corrected logic-- userId === req.user._id
    if(!userId) throw new aetherError(300, "UserId is required")
    
    if(!categories && !languages && !sources) throw new aetherError(301, "atleast one preference is needed")

    let preferences = await newsPreference.findOne({ userId })
    if(preferences){
      //adding mechanism
    }else{
      preferences = new newsPreference({ userId, categories, languages, sources })
      await preferences.save()
    }

  } catch (error) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}