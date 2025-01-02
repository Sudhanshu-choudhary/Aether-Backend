import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import aetherError from '../../../shared/utils/aetherError.js'
import { passGenForGoogle } from '../utils/passGenForGoogle.js'
import generateAccessAndRefreshToken from '../utils/generateAccessAndRefreshToken.js'
import User from '../models/user.models.js'
import passport from 'passport'
import { configDotenv } from 'dotenv'

configDotenv({path: './.env'})

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    callbackURL: `http:localhost:2000/api/v1/auth/google/callback`
  },
  async (accessToken, refreshToken, profile, done)=> {
    console.log("profile", profile)
    try {
      let user = await User.findOne({email: profile._json.email})
      if(!user){
        await User.create({
          fullname: profile._json.name,
          email: profile._json.email,
          image: profile.photos?.[0]?.value || '',
          password: passGenForGoogle(profile)
        }) 
      }
      const newUser = await User.findOne({ email: profile._json.email })
      const {accessToken, refreshToken} = generateAccessAndRefreshToken(newUser._id)
      return done(null, {newUser, accessToken, refreshToken})
    } catch (err) {
      return done(new aetherError(err.code || 500, err.message || `error in google-strategy`), false)
    }
  }
))