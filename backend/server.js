const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_CON_URL).then(()=>{
  app.listen(PORT,(()=>console.log("Server running at port"+PORT)))
}).catch((err)=> console.log(err))