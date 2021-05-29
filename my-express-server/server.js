const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
    res.send("hello");
});

app.get("/about", function(req,res){
    res.send("My name is Praveen Kumar And I am a Full Stack Doveloper.");

});
app.get("/hobbies", function(req,res){
    res.send("My name is Praveen Kumar And I am a Full Stack Doveloper.");

});

app.listen(3000,function(){
    console.log("Server started on port 3000.");
});