let sliderX = document.getElementById('sliderX');
let sliderY = document.getElementById('sliderY');
let resultadoX = document.getElementById('resultadoX');
let resultadoY = document.getElementById('resultadoY');

let color = document.getElementById('color');
let resultadoColor = document.getElementById('resultadoColor');

let cuadro = document.getElementById('cuadro');

let spread = document.getElementById('spread');
let resultadospr = document.getElementById('resultadospr');

let blur = document.getElementById('blur');
let resultadoblur = document.getElementById('resultadoblur');
let opacity = document.getElementById('opacity');
let resultadoopacity = document.getElementById('resultadoopacity');

let hover = document.querySelector('.hover');
let sides = document.querySelector('.sides');
let button= document.querySelector('.button');
let mirrors = document.querySelector('.mirrors');


sliderX.addEventListener('input', function () {

    //alert("Hola mundo");
    resultadoX.innerHTML = sliderX.value;
    cuadro.style.boxShadow = sliderX.value + 'px ' + sliderY.value + 'px 8px ' + color.value;
});

sliderY.addEventListener('input', function () {

    //alert("Hola mundo");
    resultadoY.innerHTML = sliderY.value;
    cuadro.style.boxShadow = sliderX.value + 'px ' + sliderY.value + 'px 8px ' + color.value;
});

color.addEventListener('input', function () {

    resultadoColor.innerHTML = color.value;
    cuadro.style.boxShadow = sliderX.value + 'px ' + sliderY.value + 'px 8px ' + color.value;

});

spread.addEventListener('input', function(){
    resultadospr.innerHTML= spread.value + "px";
    cuadro.style.boxShadow= spread.value + '2px 2px ' + spread.value + '1px 1px' + color.value;
});

blur.addEventListener('input', function(){
    resultadoblur.innerHTML=  blur.value + "px";
    cuadro.style.boxShadow= blur.value + '5px 5px ' + spread.value + '1px 1px' + color.value;
});

opacity.addEventListener('input', function(){
    resultadoopacity.innerHTML=  blur.value + "8px";
    cuadro.style.boxShadow= blur.value + '8px 8px ' + spread.value + '8px 8px' + color.value;
});

hover.addEventListener('click', function(){
    cuadro.style.boxShadow = "0px 10px 13px -7px #000000";
    cuadro.style.background = "#1C6EA4";
    cuadro.style.color = "white";

    textArea.value = "box-shadow: 0px 10px 13px -7px #000000";
});

sides.addEventListener('click', function(){
    cuadro.style.boxShadow = "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000";
    cuadro.style.background = "#1C6EA4";
    cuadro.style.color = "white";

    textArea.value = "box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000";
});

button.addEventListener('click', function(){
    cuadro.style.boxShadow = "inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E"; 
    cuadro.style.background = "#1C6EA4";
    cuadro.style.color = "white";

    textArea.value = "box-shadow: inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E";
});

mirrors.addEventListener('click', function(){
    cuadro.style.boxShadow = "inset 2px 2px 2px 2px #1C6EA4, inset 11px 11px 2px 0px #2285C7, inset 20px 20px 2px 1px #289DEA, inset 29px 29px 2px 1px #57BBEA"; 
    cuadro.style.background = "#1C6EA4";
    cuadro.style.color = "white";

    textArea.value = "box-shadow: inset 2px 2px 2px 2px #1C6EA4, inset 11px 11px 2px 0px #2285C7, inset 20px 20px 2px 1px #289DEA, inset 29px 29px 2px 1px #57BBEA";
});