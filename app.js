const express = require('express')
const bodyParser = require('body-parser');
const logger = require('morgan')
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();
mongoose.connect(
    process.env.DATABASE_URL,{
        useNewUrlParser:true
    },()=>console.log('connect ahihi')
)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(logger('dev'))


module.exports = app;