import express from 'express'
import cors from 'cors'

const taskManagerApp = express()
taskManagerApp.use(express.json())
taskManagerApp.use(cors({origin: '*'}))

//Routes

export default taskManagerApp