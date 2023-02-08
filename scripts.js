

document.getElementById("boton1").addEventListener("click", function() 
   {
    document.getElementById("Ptext").style.color = "#ffffff"; 
    document.getElementById("h4s").style.color = "#ffffff"; 
    document.getElementById("footer1").style.color = "#DAD7CD";
    document.getElementById("elemento1").style.color = "#4d645c";
    document.getElementById("elemento2").style.color = "#4d645c";
    document.getElementById("grid1").style.backgroundColor = "#a3b18a";
    document.getElementById("grid2").style.backgroundColor= "#a3b18a";
    document.getElementById("grid3").style.backgroundColor = "#a3b18a";
    document.getElementById("grid4").style.backgroundBlendMode = "darken";
    document.getElementById("body").style.backgroundBlendMode = "difference";
    document.getElementById("body").style.backgroundColor = "#012216";
    document.getElementById("boton1").style.visibility = "hidden";
    document.getElementById("boton2").style.visibility = "visible";
    
    
    

})

document.getElementById("boton2").addEventListener("click", function() 
{   document.getElementById("boton2").style.visibility = "hidden"; 
    document.getElementById("boton1").style.visibility = "visible";
    document.getElementById("body").style.backgroundBlendMode = "normal";
    document.getElementById("body").style.backgroundColor = "#ffffff";
    document.getElementById("grid1").style.backgroundColor = "#ffffff";
    document.getElementById("grid2").style.backgroundColor= "#ffffff";
    document.getElementById("grid3").style.backgroundColor = "#ffffff";
    document.getElementById("Ptext").style.color = "#023321"; 
    document.getElementById("h4s").style.color = "#023321";
    document.getElementById("grid4").style.backgroundBlendMode = "screen";
    document.getElementById("elemento1").style.color = "#344E41";
    document.getElementById("elemento2").style.color = "#21211F";
    document.getElementById("footer1").style.color = "#000000";
    document.getElementById("parrafos").style.color = "#344E41";



})










