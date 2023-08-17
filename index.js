const express = require("express");

const app = express();


const quote = require("./quotes.json")

app.get("/",(req,resp)=>{

    resp.send("this is homepage")


});




app.get("/api",(req,resp)=>{

    resp.send(quote)


});

console.log(quote.length);

app.get("/randomApi",(req,resp)=>{

    const randomNum =  Math.floor(Math.random() * 46);



    resp.send(quote[randomNum])


});

app.listen(5000);