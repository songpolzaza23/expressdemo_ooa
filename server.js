const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CoinRouter = require('./routes/CoinRouter');

app.listen(port, function(){
    console.log('Node js Express js Tutorial at port', port);
  });
  
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
 });
 
app.use('/coins', CoinRouter);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://pop:suriwong123@ds019886.mlab.com:19886/expressdemo');




