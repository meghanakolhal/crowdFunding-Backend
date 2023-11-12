// require("dotenv").config();
const express= require('express');
const app= express();
const fundRaiserRouter=require('./routes/crudRoute');
const userRouter=require('./routes/usersRoute');
// const cors = require('cors');
const {mongoose} = require('mongoose');
const PORT = process.env.PORT|| 8090;
app.use(express.json());
// app.use(cors)
app.use('/',fundRaiserRouter);
app.use('/',userRouter);

app.listen(PORT,()=>{
    console.log('Server started listening on port', PORT)
})
mongoose
  .connect(
    "mongodb+srv://meghanakolhalnagappa:meghanakolhal@cluster0.2bdtodf.mongodb.net/Crowdfunding?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("MongoDb connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });