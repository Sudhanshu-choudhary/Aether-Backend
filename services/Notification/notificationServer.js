import log from '../../shared/utils/log.js'
import connectDB from '../../shared/db/connectDB.js'
import { NOTIFICATION_MONGO_URI, NOTIFICATION_PORT } from './config/config.js'
import notificationApp from './notificationApp.js'

connectDB(NOTIFICATION_MONGO_URI)
.then(()=> {
  notificationApp.listen(NOTIFICATION_PORT, () => {
    log.info(`🚀 NOTIFICATION SERVICE Running on ${NOTIFICATION_PORT}`)
  })
})
.catch((err) => {
  log.error("Connection failure", err)
  process.exit(1)
})