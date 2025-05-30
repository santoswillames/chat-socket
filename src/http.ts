import "reflect-metadata";
import express from "express";
import path from "path";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";

const app = express();

const server = createServer(app);

mongoose.connect(
  "mongodb://root:root@localhost:27017/chatsocket?authSource=admin"
);

app.use(express.static(path.join(__dirname, "..", "public")));

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Socket", socket.id);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

export { server, io };
