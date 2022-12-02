const express = require("express");
const app= express();
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
mongoose.connect("mongodb://localhost:27017/merndb");


app.get("/getusers", (req,res) => {
    UserModel.find({} , (err, result,) =>{
        console.log(result,err)
        if (err) {
            res.json(err);
        }else {
            res.json(result);

        }
    })
})


app.listen(3001,() => {
    console.log("Hello")
});