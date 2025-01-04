import dotenv from 'dotenv'
dotenv.config({path: '../.env'})

export const PORT = process.env.PORT || 4000
export const NEWS_API_KEY = process.env.NEWS_API_KEY