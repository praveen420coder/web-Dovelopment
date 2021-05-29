const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    
    res.sendFile(__dirname +"/index.html");
    
    

  

});
app.post("/",function(req,res){
    const city = req.body.cityName;
    const apiKey = "fa2c4c17727fd8d36f0c23dee09933be";
    const unit = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units="+unit+"";
    https.get(url,function(response){
        console.log(response.statusCode);
    
        response.on("data",function(data){
            const whetherData = JSON.parse(data);
            const temp = whetherData.main.temp;
            const whetherDescription = whetherData.weather[0].description;
            const whetherIcon = whetherData.weather[0].icon;
            const imageUrl = " http://openweathermap.org/img/wn/"+whetherIcon+"@2x.png";
            
            res.write("<p>The weather is currently " + whetherDescription + "</p>");
            res.write("<h1>The tempreture in "+ city+ " is " + temp + " degree Celcius.</h1>");
            res.write("<img src="+imageUrl+">");
            res.send();
        }); 
    });
    
});











app.listen(3000,function(){
    console.log("Server is running on port 3000");
});