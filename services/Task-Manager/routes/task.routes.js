import express from 'express'
//authenticateMiddleware to be added
//controllers routes

const router = express.Router()

router.post('/', createTask)
router.get('/', getTasks)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router