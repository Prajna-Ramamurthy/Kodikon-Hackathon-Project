var a1=document.getElementById("audio");
a1.onended=function()
{
    // console.log("fo")
    var a2=document.getElementById("audio2");
    a2.play();
    // console.log("jfhd")
}
var a2=document.getElementById("audio2");
a2.onended=function()
{
    var a3=document.getElementById("audio3");
    a3.play();
}