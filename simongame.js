let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250);
}




function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random btn
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randColor);
    btnFlash(randBtn);
    gameSeq.push(randColor);

}

function checkAns(idx){
    // console.log("current level :", level);
    // let idx = level-1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else {

        h2.innerHTML = `Game Over! And  Your score was <b>${level}<b> Press any key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        },250)
        reset();
        
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1); 
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset (){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}