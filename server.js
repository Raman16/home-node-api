const fs=require('fs');
const express= require('express');

const {mongoose}=require('./config/db/mongoose');
const {Users}=require('./app/models/Users');

const port=process.env.PORT || 3000;


var app=express();
module.exports=app;
require('./config/routes')(app);


var server=app.listen(port,()=>{
   console.log(`Started on  port ${port}`);   
});
//Error log file below
 server.on('error',(err)=>{
   fs.appendFileSync('log',`${err}\n`);
 });

