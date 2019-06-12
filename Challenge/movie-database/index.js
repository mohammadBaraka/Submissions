const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {res.send('ok')})
app.get('/test',(req,res)=>{res.send({status:200, message:"ok"})})
app.get('/time',(req,res)=>{res.send({status:200, message:new Date().getHours()+':'+new Date().getSeconds()})})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
