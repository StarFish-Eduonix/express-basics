// const express = require("express")
import express from "express" 
import "./config/db.js" // execute the file db.js

import Sum from "./models/sum.js"

import router from "./routes/sum.js"


const app =  express()
const PORT = 5000




app.use(express.json()) 

app.use(router)



// this will convert JSon data into js data
// api in Node js 

// hello word api: 

// get, post, put, patch, delete 

// app.get("/hello", (req, res)=>{
//      res.json({"message": "Hello World, Welcome to Node and Express"})
// })

// app.post("/sum", (req, res)=>{
//     // console.log(req.body)
//     //  let num1 = req.body.num1
//     //  let num2 = req.body.num2

//     // console.log(req.query)
//     //  let num1 = +(req.query.num1)
//     //  let num2 = +req.query.num2

//     console.log(req.headers)
//     let num1 = +(req.headers.num1)
//     let num2 = +(req.headers.num2)
//      let sum = num1+num2
//      res.json({"sum": sum })
// })











  
app.listen(5000, ()=>{console.log(`Server has started at port ${PORT}`)})

