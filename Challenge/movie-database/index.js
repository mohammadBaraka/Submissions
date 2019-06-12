const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {res.send('ok')})
app.get('/test',(req,res)=>{res.send({status:200, message:"ok"})})
app.get('/time',(req,res)=>{res.send({status:200, message:new Date().getHours()+':'+new Date().getSeconds()})})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/hello/:id?', (req, res) =>{ 
    if(req.params.id !== undefined){ res.send ({ status:200, message:"Hello," + req.params.id })} 
    else { res.send ({ status:200, message:"Hello," })} });

    app.get('/search', (req, res) =>{ 
        if(req.query.s !== undefined && req.query.s !== ""){
        res.send({status:200, message:"ok", data:req.query.s})
        } else {
        res.send({status:500, error:true, message:"you have to provide a search"}) } } );