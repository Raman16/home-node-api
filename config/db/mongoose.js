var mongoose=require('mongoose');
const fs=require('fs');
const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
const MONGO_URI = process.env.MONGODB_URI || LOCAL_MONGO;
mongoose.Promise=global.Promise;
mongoose.connect(MONGO_URI)
.then((res)=>{ })
.catch((err)=>{ 
    fs.appendFileSync('log',`${err}\n`);       
});