const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')


const app = express();
dotenv.config();


const port = process.env.PORT || 3000

app._get('/',(req,res) => {
    res.sendfile(__dirname ="/pages/index.html")
})


app.post("/register", (req,res) => {
    try{
        const {name,email,password} =  req.body;
    }
    catch{

    }
})

app.listen(port,()=> {
    console.log(`server is ruuning on port ${port}`)
})