var wins = 0;
var losses = 0;
var totalGuess = 9;
var validChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomPhrases = ['cat in a hat','my lazy dog','math is fun','the sky is blue','random phrases','help me','welcome home','awesome'];
var correctArray = [];
var userGuessArray = [];
var correctArrayUnique = [];

function play() {
    var audio = document.getElementById('audio');
    audio.play();
}

function startGame() {

        document.getElementById('gameBox').style.display = 'block';
        document.getElementById('remainGuess').innerHTML = totalGuess;

        var compPhrase = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
        var textTest;
  
        console.log(compPhrase);
        console.log(compPhrase.length);
        var spaceCount = 0;
        var correct = 0;
       for (var i = 0; i < compPhrase.length; i++){
           // count the numbers of spaces in a phrase
        if (compPhrase[i] === " ") {
            textTest = '&nbsp;';
            spaceCount++;
        } else {
            textTest = compPhrase[i];
        };
        //for values not equal to space, create a div called box
        if (textTest !== '&nbsp;') {
            var boxDiv = document.createElement('div');
            boxDiv.id = 'box';
            boxDiv.style.display = 'inline-block';
            boxDiv.style.border = 'thin solid white';
            boxDiv.style.height = '50px';
            boxDiv.style.width = '50px';
            boxDiv.style.textAlign = 'center';
            boxDiv.style.paddingTop = '0px'
            boxDiv.style.borderBottom = 'medium solid black'
            boxDiv.style.margin = '5px';
            boxDiv.style.backgroundColor = 'grey';
  
        } else {
            var boxDiv = document.createElement('div');
            boxDiv.id = 'box';
            boxDiv.style.display = 'inline-block';
            boxDiv.style.margin = '2%';
        };
            //create a div with class name based on the value of [i]
            var textDiv = document.createElement('div');
            textDiv.className = compPhrase[i];
            textDiv.style.dsiplay = 'inline-block';
            textDiv.style.fontSize = '45px';
            textDiv.style.fontWeight = 'bold';
            textDiv.style.color = 'grey';
            textDiv.innerHTML = textTest;
            textDiv.style.paddingTop = '0px';
            textDiv.style.margin = 'auto';
            document.getElementById('gameBox').appendChild(boxDiv).appendChild(textDiv);

            document.onkeyup = function(input) { //first onkeyup start
                var userInput = input.key.toLowerCase();
                for (var h = 0; h < validChar.length; h++){ //validate user input against validChar array
                    if(userInput === validChar[h]){
                        userGuessArray.push(userInput); //add user input to userGuessArray
                    }   
                }
                // check if chosen letter is in the phrase and add to correct count
                for (var j = 0; j < compPhrase.length; j++){ //start forloop
                    if (userInput === compPhrase[j]) {
                        correctArray.push(userInput);
                        correct++;
                // go through all element with class name of [j] and set color property to red
                    var all = document.getElementsByClassName(compPhrase[j]);
                    for (var a = 0; a < all.length; a++) {
                        all[a].style.color = 'white';
                        };                       
                    };
                };//end forloop

                // loop through correctArray and eliminate duplicates
                $.each(correctArray, function(i, el){
                if($.inArray(el, correctArrayUnique) === -1) correctArrayUnique.push(el);
                });

                
                function wrongGuess(a, b) { //return difference between user's guesses and correct guesses
                    return a-b;
                }
                wrongGuess(userGuessArray.length,correctArrayUnique.length);

                var guessRemain;
                guessRemain = totalGuess - wrongGuess(userGuessArray.length,correctArrayUnique.length);

               
             


                document.getElementById('remainGuess').innerHTML = guessRemain;
                document.getElementById('uGuessed').innerHTML = userGuessArray;

  //here         
            if (guessRemain === 0){
                alert('You ran out of lives, click New Game to play again.');
                $('#gameBox').css('background-image','url(../images/lost.jpg)');
            };

     
            var correctCount = correctArray.length - (compPhrase.length - spaceCount);
            if (guessRemain > 0 && correctCount === 0) {
                   alert('You Win!');
               }; 
            console.log('correctCount: '+ correctCount);
            console.log('wrong guess: '+wrongGuess(userGuessArray.length,correctArrayUnique.length));
                
              
            console.log('correct unqiue: '+correctArrayUnique);
            console.log('correct: '+correct);
            console.log('comp phrase: '+compPhrase.length);
            console.log('space count: '+spaceCount);
            console.log('correct unique length: '+correctArrayUnique.length);
            console.log('user guess count: '+userGuessArray.length);
            console.log('lives remain '+guessRemain);
            console.log('correct array '+correctArray);

            }; // onkeyup end

       }

 }


