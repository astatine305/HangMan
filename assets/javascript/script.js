var wins = 0;
var losses = 0;
var guessRemain = 9;
var validChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomPhrases = ['cat in a hat','my lazy dog','math is fun','the sky is blue','random phrases','help me','welcome home','awesome'];
var correctArray = [];
var userGuessArray = [];


function startGame() {


        document.getElementById('start').innerHTML = 'Game Start';
        document.getElementById('gameBox').style.display = 'block';
        document.getElementById('remainGuess').innerHTML = guessRemain;

        var compPhrase = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
        var textTest;
  
        console.log(compPhrase);
        console.log(compPhrase.length);
        var correct = 0;
        var count = 0;
       for (var i = 0; i < compPhrase.length; i++){
        if (compPhrase[i] === " ") {
            count++; //count the numbers of spaces in a phrase
            textTest = '&nbsp;';
        } else {
            textTest = compPhrase[i];
        };
        if (textTest !== '&nbsp;') {
            var boxDiv = document.createElement('div');
            boxDiv.id = 'box';
            boxDiv.style.display = 'inline-block';
            boxDiv.style.border = 'thin solid white';
            boxDiv.style.height = '80px';
            boxDiv.style.width = '80px';
            boxDiv.style.textAlign = 'center';
            boxDiv.style.paddingTop = '20px'
            boxDiv.style.borderBottom = 'medium solid black'
            boxDiv.style.margin = '5px';
            boxDiv.style.backgroundColor = 'grey';
  
        } else {
            var boxDiv = document.createElement('div');
            boxDiv.id = 'box';
            boxDiv.style.display = 'inline-block';
            boxDiv.style.margin = '2%';
        };
            var textDiv = document.createElement('div');
            textDiv.className = compPhrase[i];
            textDiv.style.dsiplay = 'inline-block';
            textDiv.style.fontSize = '45px';
            textDiv.style.fontWeight = 'bold';
            textDiv.innerHTML = textTest;
            textDiv.style.paddingTop = '25px';
            textDiv.style.margin = 'auto';
            document.getElementById('gameBox').appendChild(boxDiv).appendChild(textDiv);


            document.onkeyup = function(input) { //first onkeyup start

                var userInput = input.key.toLowerCase();
                userGuessArray.push(userInput);

                // check if chosen letter is in the phrase and add to correct count
                for (var j = 0; j < compPhrase.length; j++){
                    if (userInput === compPhrase[j]) {
                        correctArray.push(1);
                        correct++;
                    var all = document.getElementsByClassName(compPhrase[j]);
                    for (var a = 0; a < all.length; a++) {
                        all[a].style.color = 'red';
                        };    
                        
                        
                    }       
                };//end forloop
               function checksForLetter() {
                var existsInWord = false;
                for(var i = 0; i < compPhrase.length; i++){
                if (userInput !== compPhrase[i]){
                    existsInWord = false;
                    }
                };//end for loop
                if(existsInWord == false){
                    guessRemain--;
                }
                else {
                    existsInWord = true;
                }
               }
               checksForLetter();
            

                console.log('correct: '+correct);
                console.log('user count: '+userGuessArray.length);
                console.log('lives remain '+guessRemain);
                console.log('correct array '+correctArray);
                // console.log('incorrect: '+incorrectArray);


                document.getElementById('remainGuess').innerHTML = guessRemain;
                document.getElementById('uGuessed').innerHTML = userGuessArray;


                if ((compPhrase.length - count) === correct) {
                    alert('You win!!');
                    $('body').clear();
                    

                }

                        
                // var unique = arr.filter(function(elem, index, self) {
                //     return index === self.indexOf(elem);
                // })


            } // first onkeyup end

       }

 }


