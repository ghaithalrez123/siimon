
var gamePattern=[];
var userClickedPattern=[];
var buttoncolor=["red","blue","green","yellow"];
var Level=0;

function nextSequence(){
    userClickedPattern=[];
    Level++;
    $("h1").text("Level "+Level);
    var randomNumber = Math.floor(Math.random()*4);
    
    var randomChosenColour=buttoncolor[randomNumber];
    gamePattern.push(randomChosenColour);

    setTimeout(function(){
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);    
},500);
    
}



$(".btn").click(function(){
   var userChosenColour = $(this).attr("id");
   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   
   if(checkAnswer(userClickedPattern.length-1)&&(userClickedPattern.length===gamePattern.length)){
        nextSequence();
   } 
});


function playSound(name){
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
}


function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")}
        ,100);

}


$(document).keypress(function(event){
    if(Level==0&&event.key==='a'){
        nextSequence();

    }
})


function checkAnswer(index){
    console.log("hhh");
    if(gamePattern[index]===userClickedPattern[index]){
        console.log("sucess");
        return true;
    }
    else{
        console.log("wrong");
        gameOver();
        return false;
    }
}


function gameOver(){
    gamePattern=[];
    userClickedPattern=[];
    Level=0;
    $("h1").text("Game Over !");
    $("body").addClass("game-over");
    var audio = new Audio('sounds/wrong.mp3');
    audio.play();
    setTimeout(function(){
    $("body").removeClass("game-over");
     nextSequence();
    },1000);

}