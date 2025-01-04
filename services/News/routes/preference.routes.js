import express from 'express'
import { savePreferences, getPreferences } from '../controllers/preferencesController.js'

const router = express.Router()

router.post('/', savePreferences)
router.get('/', getPreferences)

export default router