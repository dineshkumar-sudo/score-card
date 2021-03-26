var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two")
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five")
var six = document.getElementById("sixer");
var seven = document.getElementById("seven");
var boundary = document.getElementById("boundary");
var reset = document.getElementById("reset");
var save = document.getElementById("save");
var target = document . getElementById("target");
var flag = 0;
var team1 = document.getElementById("team1");
var team2 = document.getElementById("team2");
var hname = prompt("what is host team name?");
var vname = prompt("What is visting name name?");
var result = document.getElementById("result");
var myvideo = document.getElementById("mvideo");
//reset.disabled = false


team1.textContent = hname.toUpperCase();
team2.textContent = vname.toUpperCase();
var scoreboard = document.getElementById("scoreboard");

zero.addEventListener("click", function(){
        scoreboard.textContent = Number(scoreboard.textContent) + 0;
        boundary . textContent = "GOOD ONE FROM BOWLER!";
        if(flag == 1){
                target.textContent = (save.textContent - scoreboard.textContent) + 1;
               
        }

});

one.addEventListener("click", function(){
        scoreboard.textContent = Number(scoreboard.textContent) + 1;
        boundary . textContent = "NOT BAD!";
        if(flag == 1){
                target.textContent = (save.textContent - scoreboard.textContent) + 1;
                if (scoreboard.textContent > save.textContent ){
                        alert( team2.textContent  + "won the match");
                }
              
        }

});

two.addEventListener("click", function(){
        scoreboard.textContent = Number(scoreboard.textContent) + 2;
        boundary . textContent = "BATSMAN ARE RUNNING ENDTO END!";
        if(flag == 1){
                target.textContent = (save.textContent - scoreboard.textContent) + 1;
                if (scoreboard.textContent > save.textContent ){
                        alert( team2.textContent  + "won the match");
                }
                
        }
});

three.addEventListener("click" , function(){
        scoreboard . textContent = Number(scoreboard.textContent) + 3;
        boundary . textContent = "WOW! WHAT A GREAT RUNNING!";
        if(flag == 1){
                target.textContent = (save.textContent - scoreboard.textContent) + 1;
                if (scoreboard.textContent > save.textContent ){
                        alert( team2.textContent  + "won the match");
                }
               
        }
});

four.addEventListener("click" , function(){
        scoreboard . textContent = Number(scoreboard.textContent) + 4;
        boundary . textContent = "ITS A MARVELLOUS FOUR!";
        if(flag == 1){
                target.textContent = (save.textContent - scoreboard.textContent) + 1;
                if (scoreboard.textContent > save.textContent ){
                        alert( team2.textContent  + "won the match");
                }
                
        }
        
});

five.addEventListener("click" , function(){
        scoreboard . textContent = Number(scoreboard.textContent) + 5;
        boundary . textContent = "!Yeah EXTRA AND A FOUR!";
        if(flag == 1){
                target.textContent = (save.textContent - scoreboard.textContent)+1;
                if (scoreboard.textContent > save.textContent ){
                        alert( team2.textContent  + "won the match");
                }
               
        }
});

six.addEventListener("click" , function(){
        scoreboard . textContent = Number(scoreboard.textContent) + 6;
        boundary . textContent = "HURRAYYYYY ! BALL INTO THE CROWD!";
        if(flag == 1){
                target.textContent = (save.textContent - scoreboard.textContent) + 1;
                if (scoreboard.textContent > save.textContent ){
                        alert( team2.textContent  + "won the match");
                }
                
        }
});

seven.addEventListener("click" , function(){
        scoreboard . textContent = Number(scoreboard.textContent) + 7;
        
        boundary . textContent = "PRESSURE ON THE BOWLER!";
        if(flag == 1){
                target.textContent = (save.textContent - scoreboard.textContent) + 1;
                if (scoreboard.textContent > save.textContent ){
                        alert( team2.textContent  + "won the match");
                }
               
        }
});

reset.addEventListener("click", function(){
        save.textContent = Number(scoreboard.textContent);
        scoreboard.textContent = 0;
        boundary . textContent = " ";
        alert("2 nd SECOND INNINGS Started!");
        flag = 1;
        reset.disabled = true
        function playvid(){
                myvideo.play();
        }




});
result.textContent = team2.textContent;













