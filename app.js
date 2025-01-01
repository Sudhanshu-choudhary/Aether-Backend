import cors from 'cors'
import morgan from 'morgan'
import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(morgan('dev'))
app.use(cors({origin: '*'}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookieParser())


//Routes


export default app