import express from 'express'
import weatherRoutes from './routes/weatherRoutes.js'

const weatherApp = express()
weatherApp.use(express.json())

weatherApp.use('/api/v1/weather', weatherRoutes)

export default weatherApp