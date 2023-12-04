const express =require("express");
const cors=require("cors")

const app =new express(); 

const studentmodel=require('./model/student');

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());



app.post('/new',(request,response)=>{
    console.log(request.body)
    new studentmodel(request.body).save();
    response.send("Record saved")

})
app.get('/',(request,response)=>{
response.send("hi");

})
app.get('/view',async(request,response) => {
    var data=await studentmodel.find();
    console.log(data)
    response.send(data)
}
)


app.listen(3010,(request,response)=>{
    console.log("port is runing 3010")

})
