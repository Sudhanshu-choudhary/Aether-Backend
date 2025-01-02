import aetherResponse from "../../../shared/utils/aetherResponse.js"
import { cookieOptions } from "../utils/cookieOptions.js"

const logoutUser = async (req, res) =>{
  try {
    await User.findByIdAndUpdate(req.user._id, { $unset: {refreshToken: 1} }, { new: true })
  
    return res.status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new aetherResponse.success(200, {}, "logged out successfully"))

  } catch (err) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}

export default logoutUser