const express = require('express')
const app = require('express')()
const mongoose = require("mongoose");
const mongoDB = 'mongodb://localhost:27017/';

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose.connect(mongoDB, { useNewUrlParser: true })
    .then(() => {
        console.log("連線成功");
    })
    .catch(err => {
        console.log("連線失敗", err);
    });

module.exports = {
    path: '/api/',
    handler: app
}