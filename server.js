var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'article-one':{
    tittle:'Article One & Srikanth',
    date:'aug 4,2017',
    content:`
     <p>this is my first content of my first article,this is my first content of my first articlethis is my first content of my first article</p>
            <p>this is my first content of my first articlethis is my first content of my first articlethis is my first content of my first article</p>
            <p>this is my first content of my first articlethis is my first content of my first articlethis is my first content of my first article</p>
            
    `
},
'article-two':{
    tittle:'Article Two & Srikanth',
    date:'aug 4,2017',
    content:`
     <p>this is my first content of my first article,this is my first content of my first articlethis is my first content of my first article</p>
            
            
    `
},
'article-three':{
    tittle:'Article Three & Srikanth',
    date:'aug 4,2017',
    content:`
     <p>this is my first content of my first article,this is my first content of my first articlethis is my first content of my first article</p>
            
            
    `
}
  
  
    
};
function createTemplate(data){
var tittle=data.tittle;
var date=data.date;
var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>${tittle}</title>
        <meta name="viewport" content="width=device-width,intial-scale=1"/>
       <link rel="stylesheet" href="/ui/style.css"/>
        
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>${tittle}</h3>
        <div>
          ${date}
            
        </div>
        <div>
            ${content}
        </div>
        
        </div>
    </body>
    
    
</html>
`;
return htmlTemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter);
});
app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});
app.get('/article-two', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
