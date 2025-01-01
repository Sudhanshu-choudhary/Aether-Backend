import mongoose from 'mongoose'
import log from '../utils/log.js'

const connectDB = async (MONGO_URI)=> {
  try {
    await mongoose.connect(MONGO_URI)
    log.info('✅ Database connected successfully')
  } catch (err) {
    log.error('❌ Database connection error: ', err)
    process.exit(1)
  }
}

export default connectDB