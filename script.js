let totalA = 0
let totalB = 0
document.getElementById("counterA").textContent = totalA
document.getElementById("counterB").textContent = totalB
let running = false;
let time = (3*60*1000)-1000
let updatedTime
let timerEL = document.getElementById("timer")



function addA(){    
    running = false
    clearInterval(updatedTime)
    totalA = totalA+1
    document.getElementById("counterA").textContent = totalA
    
}

function addB(){    
    running = false
    clearInterval(updatedTime)
   totalB +=1
   document.getElementById("counterB").textContent = totalB
    
}
function sustractA(){
    running = false
    clearInterval(updatedTime)
    totalA -=1 
    if(totalA < 0){        
        totalA=0
    }
    document.getElementById("counterA").textContent = totalA    
}

function sustractB(){    
    running = false
    clearInterval(updatedTime)
    totalB -= 1
    if(totalB < 0){
        totalB = 0
    }
    document.getElementById("counterB").textContent = totalB    
}

function reset(){
    totalA=0;
    totalB=0;
    document.getElementById("counterA").textContent= totalA;
    document.getElementById("counterB").textContent= totalB;
    clearInterval(updatedTime)
    time = (3*60*1000)-1000
    timerEL.textContent = "START"
    running = false
}

function startTimer() {    

    if (time > 0) {
        let minutes = Math.floor(time / 1000 / 60)
        let seconds = Math.floor((time / 1000) % 60)
        seconds = seconds < 10 ? '0' + seconds : seconds
        timerEL.textContent = `0${minutes} : ${seconds}`        
        time= time - 1000;
    } else {
        clearInterval(updatedTime)
        timerEL.textContent = "Finish"
    }
}

function updateTimer() {
    if (!running){
    running = true
    updatedTime = setInterval(startTimer, 1000) 
    } else{
        clearInterval(updatedTime)
        running = false
    }
}

let player1Name = document.getElementById("player1-name")
player1Name.addEventListener("click", changeName1)
function changeName1(){
    let newName1 = prompt("Please, enter your name: ")
    if (newName1.length > 10){
        alert("The player's name must be less than 10 characters")
        player1Name.textContent = "PLAYER 1"
    }else{
        player1Name.textContent = newName1
    }
} 
let player2Name = document.getElementById("player2-name")
player2Name.addEventListener("click", changeName2)
function changeName2(){
    let newName2 = prompt("Please, enter your name: ")
    if (newName2.length > 10){
        alert("The player's name must be less than 10 characters")
        player2Name.textContent = "PLAYER 2"
    }else{
        player2Name.textContent = newName2
    }
} 
