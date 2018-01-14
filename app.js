var questionNum = 1;
var score = 0;

//submit form
function submitA() {
	$("#js-qform").submit(function(event) {
		event.preventDefault();
		checkAns();
		if (questionNum >= 10) {
			finishedQuiz();
		} else {
			update();
			questionNum++;
		}
	});
}

// check whether the corect option is chosen
function checkAns() {
	var c_ans = [4, 2, 3, 1, 3, 2, 3, 1, 2, 4]; 
	var ans = parseInt($('input[name=option]:checked', '#js-qform').val());
	if (ans === c_ans[questionNum-1]) {
		displayAns(true);
	} else {
		displayAns(false);
	}
}

//display with the correct answer
function displayAns(corr) {
	if (corr === true) {
		score++;
		alert("true")
	} else {
		alert("false");
	}
}

//chnage to the new question
function update () {

	//array of questions
	var questions = [ null, 
		"What was the name of the sci fi show in USS Calister?",
		"What is the UK news show that frequently appears in Black Mirror?",
		"What is the name of the AI device in White Christmas?",
		"What is the name of simulated reality where the deceased can live permanently?",
		"What's the name of the cartoon political candidate in Season 2?",
		"What was the protagonist searching for in Metalhead?",
		"What sort of game was being trialed in Playtest?",
		"What was the final text message in Shut Up and Dance?",
		"How long did the trial last in Playtest?" ];

	//nested array of options to questions
	var options = [	null,
					["Star Trek", "Space Fleet", "Star Fleet", "Space Wars"],
					["UKNBC", "news.uk", "UKN", "today uk"],
					["Cookie", "Biscuit", "Cake", "Muffin"],
					["San Fansisco", "Resort Island", "San Junipero", "Long Island"],
					["Rolo Haynes", "Waldo", "Wario", "Wally"],
					["A box of kittens", "A young boy", "A box of teddy bears", "A safehaven"],
					["A horror game", "Bioshock", "A shooter", "A football game"],
					["\"Fight to the death\"", "A troll face", "A photo of his mother", "Game over"],
					["10.54m", "4.33s", "0.33s", "0.04s"],
					];


	$(".js-question").html(questions[questionNum]); //-1 not needed because increment is after
	$(".js-ans1").html(options[questionNum][0]);
	$(".js-ans2").html(options[questionNum][1]);
	$(".js-ans3").html(options[questionNum][2]);
	$(".js-ans4").html(options[questionNum][3]);

	$(".js-score").html(score); //update score
}

//display the finished quiz screen
function finishedQuiz() {
	$("#js-qform").hide();
	$("#js-final").show();
}

$(function() {
	submitA();
});