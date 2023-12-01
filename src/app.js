const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const Middlewares = require('./middleware')

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Middlewares)

//Write POST endpoint to get the sum of two number
app.post("/add", (req, res)=>{
  const {num1, num2} = req.body;
  console.log(typeof num1);
  const total = num1+num2;
  result(total, res)
})

//Write POST endpoint to get the differance of two number
app.post("/subtract", (req, res)=>{
  const {num1, num2} = req.body;
  const total = num1-num2;
  result(total, res)
})

//Write POST endpoint to get the multiplication of two number
app.post("/multiply", (req, res)=>{
  const {num1, num2} = req.body;
  const total = num1*num2;
  result(total, res)
})

//Write POST endpoint to check if the num2 is 0 or not and to get the result after dividing two number
app.post("/divide", (req, res)=>{
  const {num1, num2} = req.body;
  if(num2 == 0){
    return res.status(400).send("Cannot divide by zero");
  }
  const total = num1/num2;
  result(total, res)
})
function result(num, res){
  if(num < -1000000){
    return res.status(400).json({"message": "Underflow"});
  }
  else if(num > 1000000){
    return res.status(400).json({"message": "Overflow"});
  }
  return res.json({"result": num});
}

const server = app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
    
module.exports = app;
