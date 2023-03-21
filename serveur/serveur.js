const dotenv = require("dotenv")
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

dotenv.config();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error',(error) => { console.error(error)})
db.once('open', () => { console.log("connection to data base bd_Boss")})

app.use(express.json())

const Route = require('./routes/routes')
app.use('/bd_Boss', Route)

app.listen(port,()=>{
    console.log("server is starting on port 3000");
})