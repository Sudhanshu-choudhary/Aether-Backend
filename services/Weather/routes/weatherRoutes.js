import express from 'express'
import getCurrentWeather from '../controllers/currentWeather.controller.js'
import getForecast from '../controllers/forecast.controller.js'

const router = express.Router()

router.get('/current', getCurrentWeather)

router.get('/forecast', getForecast)

export default router