import aetherError from "../../../shared/utils/aetherError.js";
import aetherResponse from "../../../shared/utils/aetherResponse";
import Task from "../models/task.models.js";

const getTask = async (req, res)=> {
  try {
    const userId = req.user._id;
    const { id } = req.params;
    if(!id) throw new aetherError(301, "id not found!!")

    const task = await Task.findById(id);
    if(!task){
      res.status(401).json(new aetherResponse.error(301, "Task not Found"))
    }
    if(!task.user.equals(userId)){
      res.status(401).json(new aetherResponse.error(401, "not authorized to view this"))
    }

    res.status(201).json(new aetherResponse.success(201, task, "Task Found!!"))
  } catch (err) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}

export default getTask