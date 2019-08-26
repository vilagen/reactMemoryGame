var score = 0;
var characterArr = [];


$(document).ready(function() {
    $("#score").text(score)
    console.log(score)
})


$(document).on("click", ".friends", function() {
    // if(!matchArr.includes($(this).attr("data-id")))
    let charName = $(this).attr("data-id")
    console.log(charName)

    if(!characterArr.includes(charName)) {
        addToArray(charName)
        console.log(characterArr)
    } 
    
    else {
        gameOver()
    }
})

// add name to array when player clicks on different character
addToArray = (character) => {
    characterArr.push(character);
    score++;
    $("#score").text(score)
    console.log(score)

    if(score === 12) {
        alert("You Win!");
        score = 0;
        characterArr = [];
        $("#score").text(score)
    }
}

// end game when player clicks on character already guessed
gameOver = () => {
    alert("You Lose!");
    score = 0;
    characterArr = [];
    $("#score").text(score)
}