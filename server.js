var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
var pool = require('pg').pool;
var config = {
    
    user:'srikanthmuthineni78',
    database:'srikanthmuthineni78',
    host:'db.imd.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};
var pool = new pool(config);
app.get('/test-db',function(req,res){
   pool.query('select * from test',function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           res.send(JSON.stringify(result.rows));
       }
   }) ;
});
//var crypto =require('crypto');
//var bodyparser = require('body-parser');
//var session = require('express-session');
app.use(morgan('combined'));
//app.use(bodyparser.json());


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names=[];
app.get('/submitname',function(req,res){
   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});
var count = 0;
app.get('/count',function(req,res){
   count = count + 1; 
   res.send(count.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
