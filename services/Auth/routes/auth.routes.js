import registerUser from '../controllers/register.controller.js'
import loginUser from '../controllers/login.controller.js'
import logoutUser from '../controllers/logout.controller.js'
import renewAccessToken from '../controllers/renewAccessToken.js' 
import googleController from '../controllers/google.controller.js'
import '../config/google-strategy.js'
import passport from 'passport'


import { Router } from 'express'
import verifyJWT from '../middlewares/authVerifyAuthentication.js'
const router = Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", verifyJWT,logoutUser)
router.post("/newAccessToken", renewAccessToken)
router.get('/google', passport.authenticate('google', {session: false, scope: ['profile', 'email']}))
router.get('/google/callback', passport.authenticate('google', {session: false, failureRedirect: '/login'}), googleController)
// router.post("/req-reset-pass", resetPassReq)
// router.post("/reset-pass/:token", setNewPass)
// router.post("/send-verification-email", sendEmailVerification)
// router.get("/verify-email/:token", verifyEmail)
// router.get("/checkAccessToken", isAccessTokenValid)

export default router