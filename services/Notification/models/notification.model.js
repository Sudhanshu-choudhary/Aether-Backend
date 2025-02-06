import mongoose from 'mongoose'

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  service: { type: String, required: true },
  type: { type: String, required: true },  //needs to be reviewed
  message: { type: String, required: true },
  read: { type: Boolean, default: false }
},
{timestamps: true})

export default mongoose.model('Notification', notificationSchema)