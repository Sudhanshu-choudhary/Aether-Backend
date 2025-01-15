import Task from '../models/task.models.js'
import aetherError from '../../../shared/utils/aetherError.js'
import aetherResponse from '../../../shared/utils/aetherResponse.js'

const createTask = async(req, res)=> {
  try {
    const {title, body, priority, dueDate} = req.body
    const userId = req.user.id
  
    if(!title || !body || !dueDate) throw new aetherError(301, 'something missing in structure of task')
    if(!userId) throw new aetherError(301, 'unauthorized access')
  
    const task = new Task({ userId, title, body, priority, dueDate })
    await task.save()
  } catch (err) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}

export default createTask