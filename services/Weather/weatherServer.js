import dotenv from 'dotenv'
import weatherApp from './weatherApp.js'
import log from '../../shared/utils/log.js'

dotenv.config({ path: './.env'})

weatherApp.listen(process.env.WEATHER_PORT || 3000, () => {
  log.info(`🚀 WEATHER SERVICE Running on ${process.env.WEATHER_PORT}`)
})