const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;
const MONGO_URL = "mongodb://127.0.0.1:27017/expense-tracker"
const { connectToDB } = require('./database');
const userRouter = require('./routes/user')

connectToDB(MONGO_URL).then(()=>{console.log("Database Connected")}).catch((err)=>{console.log(err)});

app.use("/user", userRouter);

app.listen(PORT, (req,res)=>{
    console.log(`Listening on the Port ${PORT}`);
    
})