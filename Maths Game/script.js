//javascript.js
var playing = false;
var score;
var action;
var timeRemaining;
var correctAns;

//if we click on the start/reset

document.getElementById("startreset").onclick = function(){
    if(playing == true){
        location.reload();
    } else{
        score = 0;
		playing = true;
        document.getElementById("scorevalue").innerHTML = score;
        showElement("timeRem");
		timeRemaining = 60;
		hideElement("gameOver");
		document.getElementById("timeVal").innerHTML = timeRemaining;
		
		//change button reset
		document.getElementById("startreset").innerHTML = "Reset Game";
		
		//start countdown
		startCountdown();
		
		//generate Q & A
		generateQA();
        
    }
}

for(i = 1; i < 5; i++)
{
	document.getElementById("box"+i).onclick = function(){
	if(playing == true)
	{
		if(this.innerHTML == correctAns)
		{
			//correct answer
			score = score +1;
			document.getElementById("scorevalue").innerHTML = score;
			//hide wrong box
			hideElement("wrong");
			showElement("correct");
			setTimeout(function()
			{
				hideElement("correct");
			}, 1000);
			generateQA();
			
		}
		
		else
		{
			hideElement("correct");
			showElement("wrong");
			setTimeout(function()
			{
				hideElement("correct");
			}, 1000);
		}
	}
}
}

function startCountdown(){
	action = setInterval(function(){
		timeRemaining = timeRemaining -1;
		document.getElementById("timeVal").innerHTML = timeRemaining;
		if(timeRemaining == 0)
		{
			stopCountdown();
			showElement("gameOver");
			document.getElementById("gameOver").innerHTML = "<p>GAME OVER!</p><p>Your Score is " +score + "</p>";
			hideElement("timeRem");
			hideElement("correct");
			hideElement("wrong");
			playing = false;
			document.getElementById("startreset").innerHTML ="Start Game";
		}
	}, 1000);
	
}

function stopCountdown(){
	clearInterval(action);
}

function hideElement(id){
	document.getElementById(id).style.display = "none";
}

function showElement(id)
{
	document.getElementById(id).style.display = "block";
}
function generateQA()
{
	var x = Math.round(Math.random() * 9) +1;
	var y = Math.round(Math.random() * 9) +1;
	correctAns = x * y;
	document.getElementById("question").innerHTML = x + "*" + y;
	var position = Math.round(Math.random() * 3) +1;
	document.getElementById("box"+position).innerHTML = correctAns;
	var answers = [correctAns];
	for(i=1; i<5; i++)
	{
		if(i !=  position)
		{
			var wrongAns;
			do{
				var a = Math.round(Math.random() * 9) +1;
				var b = Math.round(Math.random() * 9) +1;
				wrongAns =  a * b;	
			}while(answers.indexOf(wrongAns)>-1)
			
			document.getElementById("box"+i).innerHTML =  wrongAns;
			answers.push(wrongAns);
		}
	}
}



