
let valid_input = false;
let num_input, input; //declaring variables
let totalGuess = []; //initialize empty array

    while(!valid_input) {
        input = window.prompt('Enter the max number for your game');
        num_input = Number(input);
        Math.round(num_input);
        if (!isNaN(num_input) && num_input > 0) {
            valid_input = true;
            let max_number = document.getElementById('max-number');
            max_number.innerHTML = Math.round(num_input);
        
        }
    }

let num = Math.floor(Math.random() * num_input) + 1; // setting num to randon number between 1 and whatever user inputs

console.log(num);



function do_guess() {

    let guess = Number(document.getElementById("guess").value); 
    let message = document.getElementById("message");
   

    if (guess == num) {
      message.innerHTML = `You got it! Good Guess! </br> It took you ${totalGuess.length+1} to get it right and your guesses were ${totalGuess}`
  
    //   totalGuess = [];
  
    } else if (guess <= 0) {
      message.innerHTML = "The number you entered is negative or 0, try again." //Guess is negative
   
    } else if (guess > num) {
      message.innerHTML = "No, you guessed too high. Try a lower number!" // guessed too high
      if (!totalGuess.includes(guess)) {
        totalGuess.push(guess);
      } else {
        message.innerHTML = 'You have already guessed this number'
      }
  
    } else if (guess < num) {
      message.innerHTML = "No, you guessed too low. Try a higher number!" // Guessed too low
      if (!totalGuess.includes(guess)) {
        totalGuess.push(guess);
      } else {
        message.innerHTML = 'You have already guessed this number'
      }
    } else {
      message.innerHTML = "Please enter a number!" //Guessed any non number
  
    }
  }