import aetherError from "../../../shared/utils/aetherError.js";
import aetherResponse from "../../../shared/utils/aetherResponse";
import Task from "../models/task.models.js";

const updateTask = async(req, res)=> {
  try {
    const userId = req.user._id;
    const { id } = req.params;
    const { title, body, dueDate, priority, status } = req.body;
    if(!title || !body || !dueDate || !priority || !status) throw new aetherError(301, "atleast update one thing about the task!!")

    if(!id) throw new aetherError(301, "id not found!!")

    const task = await Task.findById(id);
    if(!task){
      res.status(401).json(new aetherResponse.error(301, "Task not Found"))
    }
    if(!task.user.equals(userId)){
      res.status(401).json(new aetherResponse.error(401, "not authorized to view this"))
    }

    task.title = title || task.title;
    task.body = body || task.body;
    task.dueDate = dueDate || task.dueDate;
    task.priority = priority || task.priority;
    task.status = status || task.status;

    await task.save();
    return res.status(200).json(new aetherResponse(200, task, "Updation Successful"))
  } catch (err) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}