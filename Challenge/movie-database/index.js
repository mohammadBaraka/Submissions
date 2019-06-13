  
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
    }
     else {
    res.send({status:500, error:true, message:"you have to provide a search"}) } } );
   
   
    app.get('/movies/create',(req,res)=>{})
    app.get('/movies/read',(req,res)=>{res.send({status:200, data: movie})})
    
    app.get('/movies/read/by-date', (req,res)=>{  res.send({status:200, data:movie.sort(function(a,b) {
    return a.year - b.year;
    })
    })
    })

    app.get('/movies/read/by-rating',(req,res)=>{res.send({status:200, data: movie.sort(function(a,b) {       
    return b.rating - a.rating;
    })
    })
    })

    app.get('/movies/read/by-title',(req,res)=>{
    res.send({status:200, data:
    movie.sort(function(a,b) {
    var x = a.title.toLowerCase();
    var y = b.title.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
    })
    })
    })
    app.get('/movies/update',(req,res)=>{})
    app.get('/movies/delete',(req,res)=>{})

    const movie = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
    ]
