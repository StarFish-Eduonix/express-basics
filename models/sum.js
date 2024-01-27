import mongoose from "mongoose"; 

const sumSchema = mongoose.Schema({
    num1: {
        type: "Number",
        required: true
    }, 
    num2: {
        type: "Number",
        required: true
    }, 
    ans: {
        type: "Number",
        required: true
    }

})

  const Sum = mongoose.model("Sum", sumSchema)

  export default Sum

