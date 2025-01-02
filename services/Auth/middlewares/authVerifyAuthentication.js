import aetherError from '../../../shared/utils/aetherError.js'
import log from '../../../shared/utils/log.js'
import User from '../models/user.models.js'
import jwt from 'jsonwebtoken'

const verifyJWT = async (req, _, next)=> {
  try {
    const token = req.cookies?.AccessToken || req.header("Authorization")?.replace("Bearer ", "")
    if(!token){
      log.error(`[AUTH FAILED]: Missing or invalid authorization header from IP: ${req.ip}`)
      throw new aetherError(403, 'Unauthorized request')
    }
    const decode = jwt.verify(token, process.env.ACCESS_TOKEN)
    if (!decode?._id) {
      log.error(`[AUTH FAILED]: Invalid token structure from IP: ${req.ip}`)
      throw new aetherError(401, 'Invalid token structure.')
    }
    const user = await User.findById(decode?._id).select("-password -refreshToken")
    if(!user) throw new aetherError(401, 'Invalid Access Token')

    log.info(`[AUTH SUCCESS]: User ${decode.email} authenticated successfully from IP: ${req.ip}`)
    req.user = user
    next()
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      log.warn(`[AUTH FAILED]: Invalid token from IP: ${req.ip}. Reason: ${err.message}`)
      return next(new aetherError(401, 'Invalid token.'))
    }
    if (err instanceof jwt.TokenExpiredError) {
      log.warn(`[AUTH FAILED]: Expired token from IP: ${req.ip}.`)
      return next(new aetherError(401, 'Token has expired.'))
    }
    log.error(`[AUTH ERROR]: Unexpected error during authentication from IP: ${req.ip}. Reason: ${err.message}`)
    return next(new aetherError(500, 'Authentication error.'))
  }
}

export default verifyJWT