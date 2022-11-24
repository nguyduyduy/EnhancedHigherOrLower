
let valid_input = false;
let num_input, input; //declaring variables
let totalGuess = []; //initialize empty array

    while(!valid_input) {
        input = window.prompt('Enter a number');
        num_input = Number(input);
        Math.round(num_input);
        if (!isNaN(num_input) && num_input > 0) {
            valid_input = true;
            let max_number = document.getElementById('max-number');
            max_number.innerHTML = Math.round(num_input);
        
        }
    }

let num = Math.floor(Math.random() * num_input) + 1;

console.log(num);



function do_guess() {
    let guess = Number(document.getElementById("guess").value);
  
    let message = document.getElementById("message");
   

    if (guess == num) {
      message.innerHTML = `You got it! Good Guess! </br> It took you ${totalGuess.length+1} to get it right and your guesses were ${totalGuess}`
      console.log(`It took you ${totalGuess.length+ 1} guesses to get it right...`);
      console.log(totalGuess);
  
      totalGuess = [];
  
    } else if (guess <= 0) {
      message.innerHTML = "The number you entered is negative or 0, try again." //Guess is negative
      if (!totalGuess.includes(guess)) {
        totalGuess.push(guess);
      }
   
    } else if (guess > num) {
      message.innerHTML = "No, you guessed too high. Try a lower number!" // guessed too high
      if (!totalGuess.includes(guess)) {
        totalGuess.push(guess);
      }
  
    } else if (guess < num) {
      message.innerHTML = "No, you guessed too low. Try a higher number!" // Guessed too low
      if (!totalGuess.includes(guess)) {
        totalGuess.push(guess);
      }
    } else {
      message.innerHTML = "Please enter a number!" //Guessed any non number
  
    }
  }