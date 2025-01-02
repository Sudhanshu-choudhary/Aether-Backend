import dotenv from 'dotenv'
dotenv.config({path: '../.env'})
export const Auth_PORT = process.env.Auth_PORT || 2000
export const AUTH_MONGO_URI = process.env.AUTH_MONGO_URI
export const ACCESS_TOKEN = process.env.ACCESS_TOKEN
export const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY
export const REFRESH_TOKEN = process.env.REFRESH_TOKEN
export const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY
export const GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID
export const GMAIL_CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET
export const ROLES_PERMISSION = process.env.ROLES_PERMISSION