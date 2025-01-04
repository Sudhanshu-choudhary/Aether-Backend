import dotenv from 'dotenv'
import newsApp from './newsApp.js'
import log from '../../shared/utils/log.js'
import connectDB from '../../shared/db/connectDB.js'
import { PORT } from './config/config.js'

dotenv.config({ path: './.env'})

const MONGO_URI = process.env.NEWS_MONGO_URI || `mongodb+srv://sudhanshuchoudhary0405:UuyZJPBlVW3fmeNm@youtube.nzkakta.mongodb.net`
connectDB(MONGO_URI)
.then(() => {
    newsApp.listen(PORT, () => {
        log.info(`🚀 NEWS SERVICE Running on ${PORT}`)
    })
})
.catch((err) => {
    log.error("Connection failure", err)
    process.exit(1)
})