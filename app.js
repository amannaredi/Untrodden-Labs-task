const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/formDB", { useNewUrlParser: true , useUnifiedTopology: true } );

const dataSchema = {
  name : String,
  Class : String,
  year : String,
  contact : String,
  subjects : Array,
  societies : Array,
}

const Data = new mongoose.model("Data", dataSchema)

mongoose.set('useFindAndModify', false);


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/",  function(req, res){

  const name = req.body.name ;
  const contact= req.body.contact;
  const year = req.body.year ;
  const Class = req.body.class;
  const subjects = req.body.subject;
  const societies = req.body.society;

console.log(name,contact, year, Class, subjects, societies);

 data.save()

})


app.listen(3000, function(){
  console.log("Server at port 3000")
})
