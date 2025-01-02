import jwt from 'jsonwebtoken'
import aetherError from '../../../shared/utils/aetherError.js'
import aetherResponse from '../../../shared/utils/aetherResponse.js'
import getUserFromRefreshToken from '../utils/userFromRefreshToken.js'

const renewAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.body

    if (!refreshToken) {
      throw new aetherError(400, 'Refresh token not found')
    }

    // Retrieve user based on the refresh token
    const user = await getUserFromRefreshToken(refreshToken);
    if (!user) throw new aetherError(401, 'Invalid or expired refresh token')

    // Generate a new access token
    const newAccessToken = jwt.sign(
      { _id: user._id, email: user.email }, // Add other user info as needed
      process.env.ACCESS_TOKEN,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    )

    // Send response with new access token
    res.status(200).json(new aetherResponse(200, { accessToken: newAccessToken }, 'Access token renewed successfully'))
  } catch (error) {
    // Handle errors and respond accordingly
    res.status(error.code || 500).json(new aetherResponse(error.code, error.message))
  }
}

export default renewAccessToken
