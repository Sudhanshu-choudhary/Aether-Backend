import rateLimit from 'express-rate-limit'

const authRateLimiter = (max=6)=> {
  return rateLimit({
    windowMs: 1 * 60 * 1000,
    max,
    message: {
      success: false,
      message: 'Too many requests. Please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
  })
}


export default authRateLimiter