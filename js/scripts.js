$(document).ready(function(){
$("form#userInput").submit(function(event){
event.preventDefault();
var mug=$("input#userNum").val();
var a=1;
var b= parseInt(mug);//4
if(b===0){
  a=1;
}else{
for(var index=b; index>=1; index-=1){
a*=index;
}
}
console.log(a);
});
});


//a=a*4
//a=a*(4-1)
//
