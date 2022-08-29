var slide=document.getElementsByClassName("slide");
var imgmain=document.getElementById("img_main");
function show(n){
    var x=document.getElementsByClassName("img")[n].src;
    imgmain.src=x;
}