console.log('Loaded!');
var moveleft = 0;
function moveright()
{
    moveleft = moveleft + 10;
    img.style.marginLeft = moveleft +'px';
}

var img = document.getElementById('madi');
img.onclick = function(){
var interval = setInterval(moveright,100);
};

var counter = 0;
var button = document.getElementById("counter");
button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE)
      {
          if(request.status === 200)
          {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
    };
    request.open('GET','http://srikanthmuthineni78.imad.hasura-app.io/count',true);
    request.send(null);
};


/*var submit = document.getElementById('submit-btn');
submit.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
              if(request.status === 200)
              {
                 console.log('user loged ');
                 alert('logged in successfully');
              }
              else if(request.status === 403)
              {
                  alert('username/password is incorrect');
              }
               else if(request.status === 500)
               {
                   alert('someone went wrong on the security');
               }
                  
              
        }
        
    };
    var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
console.log(username);
console.log(password);
    request.open('POST','http://srikanthmuthineni78.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username,password: password}));
};*/

