import express from 'express'
//authenticateMiddleware to be added
//controllers routes

const router = express.Router()

router.post('/', createTask)
router.get('/', getTasks)
router.get('/:id', getTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router