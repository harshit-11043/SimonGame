let gameSeq=[];
let userSeq=[];

let colors=["yellow","green","purple","red"];

let started =false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("Game started");
        started=true;
    }
    levelUp();
});
function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
}
function checkAns(idx)
{
    
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length===gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
        console.log("Same value");
    }
    else
    {
        h2.innerHTML=`Game Over!Your Score was <b>${level}</b><br> Press any key to restart the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
    // console.log("curr level is",level);
}
function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    // random number
    let randIndx=Math.floor(Math.random()*3);
    let randColor=colors[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
    
}

function BtnPress()
{
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",BtnPress);
}
function reset()
{
    userSeq=[];
    gameSeq=[];
    level=0;
    started=false;
}