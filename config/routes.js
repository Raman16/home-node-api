
module.exports=(app)=>{
    app.get('/properties',(req,res)=>{
        res.send('show properties');
     });
     
     app.post('/properties',(req,res)=>{
       res.send('post properties');
     });
}

 