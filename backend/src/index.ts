import express from 'express'
import cors from 'cors'
import postsRouter from './routes/posts.js'
import database from './lib/database.js'
import messagesRouter from './routes/messages.js'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use("/posts", postsRouter)
app.use("/messages", messagesRouter)

app.listen(3000, async () => {
  console.log("Server listen at port 3000")
})