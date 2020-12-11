const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const nodemon = require('nodemon');
const bodyParser = require('body-parser')

app.use(express.static(__dirname + 'public'))
app.use(bodyParser.json())



app.post('/',(req,res)=>{
  console.log(req.body)
  
})

app.listen(port,()=>{
    console.log('server is starting')
})

app.use('/',(req,res)=>{
  console.log('12313')
  res.sendFile(__dirname + '/public/index.html')
})