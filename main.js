let startButton;    
let stopButton;     
let resetButton;    
let showTime;       

let timer;              
let startTime;          
let elapsedTime = 0;    
let holdTime = 0;       

window.onload = function () {
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");
    showTime = document.getElementById("time");
}

function start(){
    startTime = Date.now();
    measuringTime();

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

function stop(){
    clearInterval(timer);

    holdTime += Date.now() - startTime;

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function reset(){
    clearInterval(timer);

    elapsedTime = 0;
    holdTime = 0;
    showTime.textContent = "00:00";

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}


function measuringTime() {
    

    timer = setTimeout(function () {
        elapsedTime = Date.now() - startTime + holdTime;
        showTime.textContent = new Date(elapsedTime).toISOString().slice(14, 19);
        
        
        measuringTime();
    }, 10);
}