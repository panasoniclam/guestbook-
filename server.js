const app = require('./app')
require('dotenv').config()
const server = require('http').Server(app);
server.listen(process.env.PORT,()=>console.log("connect server running :"+process.env.PORT))