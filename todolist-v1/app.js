const express = require("express");
const bodyParser = require("body-parser");
const date = require("/home/praveen/Web-Dovelopment/todolist-v1/date.js");

const app = express();
app.use(express.static("public"));
let items = ['Buy Food','Cook Food','Study'];
let workItems = [];
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');


app.get("/" , function(req,res){
    let day = date.getDate();

    res.render("list", {listTitle: day , newListItems : items});
});

app.post("/",function(req,res){
    let item = req.body.newItem;

    if (req.body.list === "work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        item.push(item);
        res.redirect("/");
    }
    
   
});

app.get("/work" , function(req,res){
    res.render("list",{listTitle: "Work List" , newListItems : workItems})
});





app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});