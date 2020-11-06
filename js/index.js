var basketDiv = document.getElementById('basketDiv'),
basket = document.getElementById('basket'),
playBtn = document.getElementById("play"),
playAgain = document.getElementById("playAgain"),
gameOver = document.getElementById("gameOver"),
basketScore = document.getElementById("basketScore"),
score = document.getElementById("score"),
life = document.getElementById("life"),
egg1 = document.getElementById("egg1-img"),
egg2 = document.getElementById("egg2-img"),
egg3 = document.getElementById("egg3-img"),
brokenEgg1 = document.getElementById("brokenEgg1"),
brokenEgg2 = document.getElementById("brokenEgg2"),
brokenEgg3 = document.getElementById("brokenEgg3"),
gameIntro = document.getElementById("gameIntro"),
scoreFinal = document.getElementById("scoreFinal"),
pos = 0,
pos1=0,
pos2=0,
pos3=0,
lifeScore = 10; 
var scoreAudio = document.getElementById("scoreAudio");
var playAudio = document.getElementById("playAudio");
var notScoreAudio = document.getElementById("notScoreAudio");
var gameOverAudio = document.getElementById("gameOverAudio");

var eggTop;

document.body.addEventListener("mousemove",function(e){ 
    basketDiv.style.left=e.clientX;
    if(e.clientX >1280){
        basketDiv.style.left=1280+"px"
    }
})
var moveEgg1;
var moveEgg2;
var moveEgg3;
var pos;

playBtn.addEventListener("click",function(){
    egg1.style.display= "flex"
    egg2.style.display= "flex"
    egg3.style.display= "flex"
    basketScore.innerHTML = 0;
    moveEgg1 = setInterval(moveEggg1,500);
    moveEgg2 = setInterval(moveEggg2,400);
    moveEgg3 = setInterval(moveEggg3,300);

    playAudio.play();
    gameIntro.style.display = "none"
})
playAgain.addEventListener("click",function(){
    life.innerHTML = 10;
    pos1=pos2=pos3=0;
    scoreFinal.innerHTML= 0 ;
    score.innerHTML = 0;
    basketScore.innerHTML = "";
    brokenEgg1.style.opacity = 0;
    brokenEgg2.style.opacity = 0;
    brokenEgg3.style.opacity = 0;
    gameOver.style.display = "none"
    gameIntro.style.display = "block"
    
})
var numScore = 0;
function checkPos(egg,basket){
    
    var eggTop = Math.round(egg.getBoundingClientRect().top);
    var basketTop = Math.round(basket.getBoundingClientRect().top);
    var basketHigh = Math.round(basket.getBoundingClientRect().height);
    var basketY = basketHigh + basketTop ;


    var eggLeft = Math.round(egg.getBoundingClientRect().left);
    var basketLeft = Math.round(basket.getBoundingClientRect().left);
    var basketWidth = Math.round(basket.getBoundingClientRect().width);
    var basketX = basketLeft + basketWidth ;


    if ( eggTop >= basketTop && eggTop <=basketY && eggLeft >= basketLeft && eggLeft <= basketX)
    {
            return true;
    }
    else if(eggTop > basketY){
            return false;
    }
}
function moveEggg1(){
    
    pos1 = pos1+20;
    
    
    egg1.style.top = pos1+"px";
    
    if(checkPos(egg1,basket))
    {
        incrementScore();
        pos1 = 0;
        egg1.style.top = pos1+"px";
    }
    else if (checkPos(egg1,basket)==false)
    {
        decremntLife();
        pos1 = 0;
        egg1.style.top = pos1+"px";
        brokenEgg1.style.opacity = 100;
        
       
    }
    
    
}

function moveEggg2(){
    
    pos2 = pos2+20;
    
    
    egg2.style.top = pos2+"px";
    
    if(checkPos(egg2,basket))
    {
        incrementScore();   
        pos2 = 0;
        egg2.style.top = pos2+"px";
    }
    else if (checkPos(egg2,basket)==false)
    {
        decremntLife();
        pos2 = 0;
        egg2.style.top = pos2+"px";
        brokenEgg2.style.opacity = 100;
       
    }
    
    
}

function moveEggg3(){
    
    pos3 = pos3+20; 
    
    egg3.style.top = pos3+"px";
    
    if(checkPos(egg3,basket))
    {
        incrementScore();
        pos3 = 0;
        egg3.style.top = pos3+"px";
    }
    else if (checkPos(egg3,basket)==false)
    {
        decremntLife();
        pos3 = 0;
        egg3.style.top = pos3+"px";
        brokenEgg3.style.opacity = 100;

    }
    
}

function incrementScore(){
    scoreAudio.play();
    numScore ++;
    basketScore.innerHTML = numScore;
    scoreFinal.innerHTML = numScore;
    score.innerHTML = numScore;
    brokenEgg1.style.opacity = 0;
    brokenEgg2.style.opacity = 0;
    brokenEgg3.style.opacity = 0;
}
function decremntLife(){
    notScoreAudio.play();
    lifeScore --;
    life.innerHTML = lifeScore;
    if(lifeScore == 0){
        life.innerHTML = lifeScore;
        clearInterval(moveEgg1);
        gameOverAudio.play();
        lifeScore = 10;
        numScore =0 ;
        gameOver.style.display="block"
        egg1.style.display = "none"
        egg2.style.display = "none"
        egg3.style.display = "none"
    }
}