import cors from 'cors'
import helmet from 'helmet'
import express from 'express'
import authRoutes from './routes/auth.routes.js'

const authApp = express()


authApp.use(express.json())
authApp.use(helmet())
authApp.use(cors({origin: '*'}))

// Authentication routes
authApp.use('/api/v1/auth', authRoutes)

export default authApp