const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://althafmuhmmed321:ALTHAF321@cluster0.mcd1frf.mongodb.net/collage?retryWrites=true&w=majority")
.then(()=>{console.log("db connected")
})
.catch(err=> console.log(err));
const studentsschema=new mongoose.Schema({
    admissionno:Number,
    Name:String,
    age:Number,
    course:String,

});
var studentmodel=mongoose.model("student",studentsschema)
module.exports=studentmodel;