import aetherResponse from '../../../shared/utils/aetherResponse.js'
import { cookieOptions } from '../utils/cookieOptions.js'

const googleController = async (req, res)=> {
  try {
    const {_, accessToken, refreshToken} = req.user
    res.status(200)
    .cookie("AccessToken", accessToken, cookieOptions)
    .cookie("RefreshToken", refreshToken, cookieOptions)
    .json(new aetherResponse.success(201, {accessToken, refreshToken}, `login through google Successful`))

    res.redirect('/')    //frontend host url 
  } catch (err) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code || 501, err.message || `error in google controller`))
  }
}

export default googleController