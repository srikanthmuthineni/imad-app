console.log('Loaded!');
//var element=document.getElementById('main-text');
//element.innerHTML="new value";
//var img=document.getElementById('madi');
//var marginLeft = 0;
//function moveRight(){
   // marginLeft = marginLeft + 5;
    //img.style.marginLeft= marginLeft + 'px';
//}
//img.onclick=function(){
    //var interval = setInterval(moveRight,50);
//};

var button=document.getElementById('counter');
var counter = 0;
button.onclick=function()
{
    var request =new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var counter=request.responseText;
                 var span = document.getElementById('count');
    span.innerHTML=counter.toString();
            }
        }
        
    };
    request.open('GET','http://srikanthmuthineni@sh.imad.hasura-app.io/counter',true);
    request.send(null);
};

var nameInput = document.getElementById('name');
var value = nameInput.value;
var submit = document.getElementById('sumbit-btn');
sumbit.onclick = function(){
    var name = ['name1','name2','name3'];
    var list = "";
    for(var i=0;i<name.length;i++)
    {
        list += '<li>'+name[i]+'</li>';
    }
    var ul= document.getElementById('namelist');
    ul.innerHTML = list;
};