console.log('Loaded!');
var counter = 0;
var button = document.setElementById('counter');
button.onclick = function(){
    counter = counter + 1;
    var span = document.setElementById('count');
    span.innerHTML = counter.toString();
};
