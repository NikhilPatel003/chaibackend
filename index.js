require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Nikhil is a genious')
})
app.get('/home',(req,res)=>{
    res.send('nikhildotcom')
})
app.get('/login',(req,res) =>{
    res.send("<h1>Please login to my page</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})