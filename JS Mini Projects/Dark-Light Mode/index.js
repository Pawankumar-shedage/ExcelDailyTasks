var icon = document.getElementById("icon");


// Code for dark mode
icon.onclick = function(){
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        icon.src = "./Images/sunf2.avif"
    }
    else{
        icon.src = "./Images/moon.png"
    }
}


//preloader Loading symbol!.

let loader = document.getElementById("preloader");

window.addEventListener("load",function(load){
    window.removeEventListener('load',load,false);
    setTimeout(function(){
        loader.style.display = 'none';
    }, 2000);

},false);

setTimeout(preload, 3000);

function preload(){
    var loadS = document.getElementById("preloader");
    // document.write("<h1> My name is khan</h1>")
   
}