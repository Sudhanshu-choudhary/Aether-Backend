//category and tags to be implemented

import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  priority: {
    type: String,
    enum: ['low', 'regular', 'high'],
    default: 'regular',
  },
  dueDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['pending', 'in progress', 'completed'],
    default: 'pending',
  }
}, {timestamps: true})

const Task = mongoose.model('Task', taskSchema)
export default Task