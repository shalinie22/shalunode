

const express = require("express");

const bodyparser=require("body-parser")

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyparser.json())
var student_details=[{
    "id":1,
    "name":"sha",
    "email":"shalushalinie22@gmail.com",
    "staff_id":10
}]

var staff_details=[{
    "id":10,
    "name":"shalu",
    "email":"shalu@gmail.com"
}]
app.listen(4000,()=>{
    console.log("hello",port)
});

app.post("/staffdetails",(req,res)=>{
    staff_details.push(...req.body)
})
app.post("/student",(req,res)=>{
    student_details.push(...req.body)
    console.log("okkkk")
})

app.get("/user",(req,res)=>{
    res.send(student_details)
   // console.log(student_details)
})
app.get("/ssttaa",(req,res)=>{
    res.send(staff_details)
   // console.log(student_details)
})