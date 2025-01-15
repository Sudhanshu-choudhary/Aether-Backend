import log from '../../shared/utils/log.js'
import connectDB from '../../shared/db/connectDB.js'
import { PORT, TASK_MONGO_URI } from './config/config.js'
import taskManagerApp from './taskManagerApp.js'

connectDB(TASK_MONGO_URI)
.then(()=> {
  taskManagerApp.listen(PORT, () => {
    log.info(`🚀 AUTH SERVICE Running on ${PORT}`)
  })
})
.catch((err) => {
  log.error("Connection failure", err)
  process.exit(1)
})