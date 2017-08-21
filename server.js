var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
var Pool = require('pg').Pool;
var crypto =require('crypto');
var bodyparser = require('body-parser');
var session = require('express-session');
app.use(morgan('combined'));
app.use(bodyparser.json());


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles ={
 'articleone' : {
    title:'atricle one & srikanth',
    heading:'articleone',
    date:'agu 4,2016',
    content:'<p>this is article-one content</p>'
    
},
'articletwo' : {
    title:'atricle two & srikanth',
    heading:'articletwo',
    date:'agu 4,2016',
    content:'<p>this is article-one content</p>'
    
}

};




function createtemplate(data)
{
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmltemplate=`
        
<html>
    <title>${title}</title>
    <body>
        <div>
        <a href="/">Home</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>
            
    ${date}
        </div>
        <div>${content}</div>
    </body>
    
</html>
`;
return htmltemplate;
    }  

app.get('/:articlename',function(req,res){
    var articlename = req.params.articlename;
   
    res.send(createtemplate(articles[articlename]));
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
