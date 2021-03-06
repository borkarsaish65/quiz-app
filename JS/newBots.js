let answer = Math.floor(Math.random() * 20) + 1;
const question = document.querySelector('.question');
const submitBtn = document.querySelector('.submit');
let min = 1;
let max = 20;
let userScore = localStorage.getItem('userScore');
let botOneScore = localStorage.getItem('botOneScore');
let botTwoScore = localStorage.getItem('botTwoScore');
let botThreeScore = localStorage.getItem('botThreeScore');

// Retrieves local storage username
document.getElementById("playerNameFromLS").innerHTML = localStorage.getItem("createUsername");

console.log('CORRECT ANSWER IS: ' + answer);

function botOneTurn() {
  
  setTimeout(() => {
    let botOneGuess = Math.floor(Math.random() * (max - min)) + min;
    console.log('Bot 1 guesses: ' + botOneGuess)
  
    if(botOneGuess == answer){
        question.innerHTML = `Bot 1 is the winner`;  
        botOneScore++;
        localStorage.setItem('botOneScore', botOneScore);
        document.getElementById("bot1Answer").innerHTML = botOneGuess;
        console.log(botOneScore);
        console.log(`Bot 1 is the winner`); 

        //spelet stoppas, skickas till Game Over screen
  
    } else if (botOneGuess < answer) {
        question.innerHTML = `Bot 1's answer is too low`; 
        document.getElementById("bot1Answer").innerHTML = botOneGuess;
        console.log(`Bot 1's answer is too low`);  
        min = botOneGuess + 1;  
        userTurn();   
  
    } else {
        question.innerHTML = `Sorry Bot 1! That is too high`;
        document.getElementById("bot1Answer").innerHTML = botOneGuess;
        console.log(`Sorry Bot 1! That is too high`); 
        max = botOneGuess - 1;
        userTurn();
    }
    return botOneGuess;
  }, 2000);
}




function userTurn() {

  startTimer();

  function startTimer() {

    // TIMER
    var sec = 15;
    var timer = setInterval( () => {
      if (sec <= 9) {
        document.getElementById('timer').innerHTML='00:0'+sec;
      } else {
        document.getElementById('timer').innerHTML='00:'+sec;
      }
      sec--;

      //om tiden blir mindre än noll
      if (sec < 0) {
        clearInterval(timer);
        document.getElementById('timer').innerHTML="00:15";
        botTwoTurn();
      }
  
    }, 1000);

    //KOLLAR OM SVARET ÄR KORREKT, FÖR LÅGT ELLER FÖR HÖGT

    console.log('USER, it is your turn')
    
    submitBtn.addEventListener('click', () => {
  
      let userGuess = parseInt(document.getElementById('inputUser').value);
      console.log('User guesses: ' + userGuess);
  
      if(userGuess == answer){
          question.innerHTML = `User is the winner`;  
          console.log(`User is the winner`); 
          userScore++;
          console.log(userScore);
          document.getElementById("playerAnswer").innerHTML = userGuess;
          clearInterval(timer);
          document.getElementById('timer').innerHTML="00:15"
          //spelet stoppas, skickas till Game Over screen
    
      } else if (userGuess < answer) {
          question.innerHTML = `User's answer is too low`; 
          console.log(`User's answer is too low`);   
          min = userGuess + 1; 
          clearInterval(timer);
          document.getElementById("playerAnswer").innerHTML = userGuess;
          document.getElementById('timer').innerHTML="00:15"
          botTwoTurn();   
    
      } else {
          question.innerHTML = `Sorry User! That is too high`;
          console.log(`Sorry User! That is too high`); 
          document.getElementById("playerAnswer").innerHTML = userGuess;
          max = userGuess - 1;
          clearInterval(timer);
          document.getElementById('timer').innerHTML="00:15"
          botTwoTurn();
      }
    })     
  }
}


function botTwoTurn() {
  
  setTimeout(() => {

    let botTwoGuess = Math.floor(Math.random() * (max - min)) + min;
    console.log('Bot 2 guesses: ' + botTwoGuess)
  
    if(botTwoGuess == answer){
        question.innerHTML = `Bot 2 is the winner`;  
        console.log(`Bot 2 is the winner`);
        botTwoScore++;
        localStorage.setItem('botTwoScore', botTwoScore);
        document.getElementById("bot2Answer").innerHTML = botTwoGuess;
        console.log(botTwoScore); 
        //spelet stoppas, skickas till Game Over screen
  
    } else if (botTwoGuess < answer) {
        question.innerHTML = `Bot 2's answer is too low`; 
        console.log(`Bot 2's answer is too low`);   
        min = botTwoGuess + 1;  
        document.getElementById("bot2Answer").innerHTML = botTwoGuess;
        botThreeTurn();   
  
    } else {
        question.innerHTML = `Sorry Bot 2! That is too high`;
        console.log(`Sorry Bot 2! That is too high`); 
        max = botTwoGuess - 1;
        document.getElementById("bot2Answer").innerHTML = botTwoGuess;
        botThreeTurn();
    }

  }, 2000);

}

function botThreeTurn() {
  
  setTimeout(() => {

    let botThreeGuess = Math.floor(Math.random() * (max - min)) + min;
    console.log('Bot 3 guesses: ' + botThreeGuess)
  
    if(botThreeGuess == answer){
        question.innerHTML = `Bot 3 is the winner`;  
        console.log(`Bot 3 is the winner`); 
        botThreeScore++;
        localStorage.setItem('botThreeScore', botThreeScore);
        document.getElementById("bot3Answer").innerHTML = botThreeGuess;
        console.log(botThreeScore);
        //spelet stoppas, skickas till Game Over screen
  
    } else if (botThreeGuess < answer) {
        question.innerHTML = `Bot 3's answer is too low`; 
        console.log(`Bot 3's answer is too low`);
        min = botThreeGuess + 1;
        document.getElementById("bot3Answer").innerHTML = botThreeGuess;   
        botOneTurn();   
  
    } else {
        question.innerHTML = `Sorry Bot 3! That is too high`;
        console.log(`Sorry Bot 3! That is too high`); 
        max = botThreeGuess - 1;
        document.getElementById("bot3Answer").innerHTML = botThreeGuess;
        botOneTurn();
    }
    
  }, 2000);

}








// function userTurn() {

//   startTimer();

//   console.log('USER, it is your turn')
  
//   submitBtn.addEventListener('click', () => {

//     let userGuess = parseInt(document.getElementById('inputUser').value);
//     console.log('User guesses: ' + userGuess);

//     if(userGuess == answer){
//         question.innerHTML = `User is the winner`;  
//         console.log(`User is the winner`); 
//         userScore++;
//         console.log(userScore);
//         //spelet stoppas, skickas till Game Over screen
  
//     } else if (userGuess < answer) {
//         question.innerHTML = `User's answer is too low`; 
//         console.log(`User's answer is too low`);   
//         min = userGuess + 1; 
//         console.log('New min is: ' + min); 
//         botTwoTurn();   
  
//     } else {
//         question.innerHTML = `Sorry User! That is too high`;
//         console.log(`Sorry User! That is too high`); 
//         max = userGuess - 1;
//         console.log('New max is: ' + max); 
//         botTwoTurn();
//     }
//   })

// }

// function startTimer() {

//     var sec = 15;

//     var timer = setInterval( () => {
//       if (sec <= 9) {
//         document.getElementById('timer').innerHTML='00:0'+sec;
//       } else {
//         document.getElementById('timer').innerHTML='00:'+sec;
//       }

//       sec--;

//       if (sec < 0) {
//           clearInterval(timer);
//           botTwoTurn();
//       }
//     }, 1000);

// }