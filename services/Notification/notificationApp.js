import express from 'express'
import cors from 'cors'

const notificationApp = express()
notificationApp.use(express.json())
notificationApp.use(cors({origin: '*'}))

//Routes

export default notificationApp