// Simon Says game: 
let gameSeq = [];
let userSeq = [];
let his = [];
let start = false;
let level =0;
let h4 = document.querySelector("h4");
let colors = ["yellow", "red", "purple", "green"];
let h3 = document.querySelector("#dd");
let info = alert("How to Play: To play, click on the color that lights up. After each successful round, the game will add another color to the sequence. Click the colors in the right order to get more points!!")
let name = prompt("Enter your name: ");
name = name.toUpperCase();
h3.innerText = "Welcome "+ name;

document.addEventListener("keypress", function(){
    if(start == false){
        console.log("Game Started");
    }
    start = true;

    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
    if(level>=3){
        setTimeout(function(){
            btn.classList.remove("flash");
        },300);
    }
    if(level>=10){
        setTimeout(function(){
            btn.classList.remove("flash");
        },200);
    }
    if(level>=10){
        setTimeout(function(){
            btn.classList.remove("flash");
        },100);
    }
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

let body = document.querySelector("body");
function wrongGuess(){
    body.classList.add("redd");
    setTimeout(function(){
        body.classList.remove("redd");
    },200);
}


function levelUp(){
    userSeq= [];
    level++;
    h4.innerText = "Level: "+ level;
    let rndIndx = Math.floor(Math.random()* 4);
    let rndClr = colors[rndIndx];
    let rndbtn = document.querySelector(`.${rndClr}`);
    gameSeq.push(rndClr);
    console.log(gameSeq);
    btnFlash(rndbtn);
}

function checkAns(indx){
    if(gameSeq[indx] === userSeq[indx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h4.innerText = "Game over, "+name+ " your score was: "+ level;
        reset();
        let h2 = document.querySelector("h2");
        h2.innerText = "Previous records: "+his;
    }
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", function(){
        let btn = this;
        userFlash(btn);
        userFun = btn.getAttribute("id");
        userSeq.push(userFun);
        checkAns(userSeq.length-1);
    })
}

function reset(){
    his.push(level);
    wrongGuess();
    level = 0;
    gameSeq =[];
    userSeq= [];
    start = false;
}
