import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './shared/db/connectDB.js'
import log from './shared/utils/log.js'

dotenv.config({ path: './.env' })

connectDB(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT || 1000, () => {
        log.info(`Server is running at port : ${process.env.PORT || 1000}`);
    })
})
.catch((err) => {
    log.error("Connection Failure! ", err)
})