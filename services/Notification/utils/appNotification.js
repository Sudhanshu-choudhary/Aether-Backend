import Notification from '../models/notification.model.js'

export const sendAppNotification = async(userId, service, type, message, read = false)=> {
  try {
    return await Notification.create({userId, service, type, message, read})
  } catch (err) {
    throw new aetherError(401, 'some error in appNotification.js util !!')
  }
}