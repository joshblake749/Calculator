var btn = document.getElementsByClassName('btn');
var output = document.getElementById('output').innerHTML
for(var i =0; i < btn.length; i++){
   btn[i].addEventListener('click', function(){
       if(document.getElementById('output').innerHTML == '0'){
      document.getElementById('output').innerHTML = this.id;
       }
      else{
        document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + this.id;
      }
})}
function reset(){
    document.getElementById('output').innerHTML = '0';
}
var ctrlbuttons = document.getElementsByClassName('ctrl');
for(var i =0; i < ctrlbuttons.length; i++){
    ctrlbuttons[i].addEventListener('click', function(){
        if(document.getElementById('output').innerHTML.includes('.') && this.id == '.'){
            return;
        }
        else{
        document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + this.id;
}})}
    var equal = document.getElementById('equal');
    equal.addEventListener('click', function(){
     var t = eval(document.getElementById('output').innerHTML);
     document.getElementById('output').innerHTML = t;
 })
function back(){
    var x = document.getElementById('output').innerHTML;
    document.getElementById('output').innerHTML = x.slice(0, x.length -1);
}

