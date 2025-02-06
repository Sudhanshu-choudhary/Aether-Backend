import dotenv from 'dotenv'
import Redis from 'ioredis'
import admin from 'firebase-admin'

dotenv.config({path: '../.env'})

export const NOTIFICATION_PORT = process.env.NOTIFICATION_PORT || 6000
export const NOTIFICATION_MONGO_URI = process.env.NOTIFICATION_MONGO_URI

export const redisConnection = new Redis(process.env.REDIS_URI)

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_CREDENTIALS))
})
export default admin