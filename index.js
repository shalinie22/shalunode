

const express = require("express");

const bodyparser=require("body-parser")

const app = express();
const port = process.env.PORT || 3000;
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
app.listen(3000,()=>{
    console.log("hello",port)
});

app.post("/staffdetails",(req,res)=>{
    staff_details.push(...req.body)
})
app.post("/student",(req,res)=>{
    student_details.push(...req.body)
   
    console.log("okkkk")
})

// app.put("/staff",(req,res)=>{

// // const ids = student_details.map((a,staff_details)=>
// // {return a.staff_id==staff_details.id})
// // res.send(ids)

// const ids=student_details.map((a)=>{
//    const sids = staff_details.filter((b)=>{
//         if( b.id==a.staff_id ) {
//             //console.log(b.id)
//            return b.id }    
//     })
//     return sids
// })

// const add=staff_details.push({"student_count":ids.length})
//  res.sendStatus(add)
//      console.log(add)
// console.log(ids)
// })

app.get("/user",(req,res)=>{
    res.send(student_details)
   // console.log(student_details)
})
app.get("/ssttaa",(req,res)=>{
    res.send(staff_details)
   // console.log(student_details)
})