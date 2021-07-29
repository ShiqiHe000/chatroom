const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// static file
app.use(express.static("public"));

// socket set up
io.on('connection', (socket) => {
    console.log('a user is connected');
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    }); 

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    })
})


server.listen(5000, () => {
    console.log("Server listens on port 5000");
});
