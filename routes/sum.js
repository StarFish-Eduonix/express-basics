import express from "express" 
const router = express.Router()

import Sum from "../models/sum.js"


router.post("/sum", (req, res)=>{
     let num1 = req.body.num1
     let num2 = req.body.num2
     
     if(!num1 || !num2){
        return res.json({message: "Please enter both numbers"})
     }

     let sum = num1+num2
     
     // store things to database: 
      
     const obj = new Sum({
        num1: num1,
        num2: num2, 
        ans: sum
     })

     obj.save()  // all database operation will be async in nature
     .then(response => {
        console.log(response)
        res.json(response)
    })
     .catch(err => console.log(err))

})


export default router