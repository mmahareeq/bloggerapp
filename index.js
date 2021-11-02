const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');//Data
const userRoute = require('./routes/Users');//Data
const PostRouter = require('./routes/Posts')//Data
const CategoryRouter = require('./routes/Categories')//Data
const multer = require("multer")//form-data ==> used for uploading files
dotenv.config();
app.use(express.json())
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
                           
})
.then(console.log("Connectrd to MongoDB"))
.catch((err)=>{console.log(err)})
const storage = multer.diskStorage(
{
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{
      cb(null,"hello.jpeg") 
    }
});
const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json(" file has been iploaded ...")
})
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts" ,PostRouter)
app.use("/api/categories",CategoryRouter)

app.listen("5000",()=>{
    console.log("backend is running")
})