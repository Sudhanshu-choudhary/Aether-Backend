import dotenv from 'dotenv'
dotenv.config({path: '../.env'})

export const PORT = process.env.PORT
export const TASK_MONGO_URI = process.env.TASK_MANAGER_MONGO_URI