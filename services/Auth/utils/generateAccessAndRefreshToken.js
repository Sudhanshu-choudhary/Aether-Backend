import aetherError from "../../../shared/utils/aetherError.js"
import User from "../models/user.models.js"

const generateAccessAndRefreshToken = async(userId) =>{
  try {
      const user = await User.findById(userId)
      const accessToken = user.generateAccessToken()
      const refreshToken = user.generateRefreshToken()

      user.refreshToken = refreshToken
      await user.save({ validateBeforeSave: false })

      return {accessToken, refreshToken}


  } catch (error) {
      throw new aetherError(500, "Something went wrong while generating refresh and access token")
  }
}

export default generateAccessAndRefreshToken