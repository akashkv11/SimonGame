var gamePattern = [];

var buttonColors = ["red", "blue","green","yellow"];

function nextSequence(){
    
    
    var randomNumber = Math.floor(4 * Math.random());
    
    var randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);

    // console.log(randomChosenColor);
    $('#' + randomChosenColor).delay(100).fadeOut().fadeIn('slow')

        
    switch (randomChosenColor) {
        case "blue":
            var blueSound  = new Audio("/sounds/blue.mp3");
            
            blueSound.play();
            break;
            
            case "green":
                var greenSound  = new Audio("/sounds/green.mp3");
                greenSound.play();

            
            break;
    
            case "red":
                var redSound  = new Audio("/sounds/red.mp3");
                redSound.play();
            
            break;
    
        case "yellow":
            var yellowSound  = new Audio("/sounds/yellow.mp3");
            yellowSound.play();
            break;
    
        default:
            break;
    }
}

$("#" + ran).animateHighlight("#dd0000", 1000);