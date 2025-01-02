import generateAccessAndRefreshToken from '../utils/generateAccessAndRefreshToken.js'
import aetherResponse from '../../../shared/utils/aetherResponse.js'
import aetherError from '../../../shared/utils/aetherError.js'
import { cookieOptions } from '../utils/cookieOptions.js'
import User from '../models/user.models.js'

const loginUser = async (req, res)=> {
  try {
    const {email, password} = req.body
    if(!email) throw new aetherError(300, `username is required`)

    const user = User.findOne({email})
    if(!user) throw new aetherError(300, `no such user exist`)

    const validPass = await user.isPasswordCorrect(password)
    if(!validPass) throw new aetherError(300, "incorrect password")

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    return res.status(200)
    .cookie("AccessToken", accessToken, cookieOptions)
    .cookie("RefreshToken", refreshToken, cookieOptions)
    .json(new aetherResponse.success(201, {loggedInUser, accessToken, refreshToken}, `login Successful`))
  } catch (err) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}

export default loginUser