import jwt from 'jsonwebtoken'
import User from '../models/user.models.js'
import aetherError from '../../../shared/utils/aetherError.js'

const getUserFromRefreshToken = async (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN)
    const user = await User.findById(decoded._id)

    if (!user || user.refreshToken !== refreshToken) throw new aetherError(404, 'Invalid or expired refresh token')

    return user
  } catch (error) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}

export default getUserFromRefreshToken