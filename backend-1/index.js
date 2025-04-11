import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import "dotenv/config";
import express from "express";


const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.get("/",(req,res)=>{
  //  return res.json({
    //    name:"piyush",
      //  age:"21",


    //});
//})


app.post("/",async(req,res)=>{
    const {searchTerm}=req.body;
    try {
        const genAI = new GoogleGenerativeAI("AIzaSyC8T-cRtrSY8xfWulbwA8KvRZ36rrlv1uc");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(searchTerm);
        const response = result.response.text();
        if (response) {
            return res.json(response);
        }
        return res.json({
            message: "not result"
        })
    } catch (error) {
        console.log(error);
    }
    console.log(searchTerm)
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})