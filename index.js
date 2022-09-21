var gamePattern = [];

var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;

var level = 0;

$("#startButton").click(function () {
  animatePress($(this).attr("id"));
  if (!started) {
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);

  animatePress(userChosenColor);
  if (checkAnswer(userClickedPattern.length - 1)) {
    playSound(userChosenColor);
  }
});

function nextSequence() {
  userClickedPattern = [];

  var randomNumber = Math.floor(4 * Math.random());

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  // console.log(randomChosenColor);
  $("#" + randomChosenColor)
    .delay(100)
    .fadeOut()
    .fadeIn("slow");

  playSound(randomChosenColor);
  console.log(gamePattern);
  $("#level-title").text("Level " + level);
  level++;
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function () {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(nextSequence, 1000);
      return 1;
    }
  } else {
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    playSound("wrong");
    $("h1").text("Game Over, Press  Restart");

    $("#restart").click(function () {
      animatePress($(this).attr("id"));
      startOver();

      nextSequence();
      // started = false;
    });

    return 0;
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  // started = false;
}
