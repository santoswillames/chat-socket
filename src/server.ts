import express from 'express'
import {createServer} from 'node:http'
import {Server} from 'socket.io'

const app = express()

const server = createServer(app)

const io = new Server(server)

app.get('/', (req, res) => {
    res.send('hello world')
})

server.listen(3333, () => console.log('Server is runnig 🚀'))