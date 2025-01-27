import aetherError from "../../../shared/utils/aetherError.js";
import aetherResponse from "../../../shared/utils/aetherResponse";
import Task from "../models/task.models.js";

const getTasks  = async (req, res)=>{
  try {
    const userId = req.user._id;
    if(!userId) throw new aetherError(401, "User not authenticated")

    const tasks = await Task.find({ user: userId });
    res.status(201).json(new aetherResponse.success(201, tasks, "Tasks fetched successfully"))
  } catch (err) {
    res.status(err.code || 501).json(new aetherResponse.error(err.code, err.message))
  }
}

export default getTasks