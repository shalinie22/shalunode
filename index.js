const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const port = process.env.PORT || 4000;
let student_details = [];
let staff_details = [];
app.listen(port, () => {
  console.log("hello",port);});
  app.post("/student", (req, res) => {
    student_details.push(req.body);
    console.log("allllllllllll")
    res.json({"msg":"no issue"})
  });
  app.post("/staff", (req, res) => {
    staff_details.push(req.body);
    console.log(staff_details);
    res.json({
      message: "staff-details are created",});
  });
  app.get("/staffget", (req, res) => {
    res.json(staff_details);
  });

  app.get("/studentget", (req, res) => {
    student_details.push(req.body);
    console.log("students data is created");
    res.json(student_details);
  });