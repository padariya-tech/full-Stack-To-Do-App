const express = require('express')
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors')
const {mongoose} = require('mongoose');
const { DB_NAME } = require('./constant.js');
const cookieParser = require('cookie-parser');

mongoose.connect(`${process.env.MONGO_URL}${DB_NAME}`).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("Database not connected",err);
})

app.use(express.json())
app.use(cookieParser())
app.use('/users/',require('./routes/users.routes.js'))

app.listen(8000,()=>console.log("server is running on port 8000"))
