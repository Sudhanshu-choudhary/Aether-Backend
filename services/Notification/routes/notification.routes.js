import express from 'express'


const router = express.Router()

router.post('/', createNotification)
router.get('/:userId', getNotifications)
router.patch('/:id/read', markAsRead)

export default router