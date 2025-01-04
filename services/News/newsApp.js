import express from 'express'

const newsApp = express()
newsApp.use(express.json())

//routes

export default newsApp