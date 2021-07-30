const { Socket } = require('dgram');

const app = require('express')();
const server=require('http').createServer(app);
const io = require('socket.io')(server);


app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`)
})

io.on('connection',(socket)=>{
    console.log('Un utilisateur s\'est connecté.');
    socket.on('Chat message',(msg)=>{
    console.log('message : ' + msg)
})


})

server.listen(4300,()=>{
    console.log('server is running on 4300...')
})
