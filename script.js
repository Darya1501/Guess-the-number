'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let play = function() {

  let countOfAttempts = 3;
  let secretNumber = Math.floor(Math.random() * 100) + 1;

  let getAnswer = function() {
    let userNumber = prompt('Угадай число от 1 до 100:');

    if (userNumber === null) {
      return;

    } else if (!isNumber(userNumber)) {

      alert('Введи число!');

    } else if (userNumber > secretNumber) {

      countOfAttempts--;
      alert(`Загаданное число МЕНЬШЕ, оставшееся число попыток: ${countOfAttempts}`);

    } else if (userNumber < secretNumber) {

      countOfAttempts--;
      alert(`Загаданное число БОЛЬШЕ, оставшееся число попыток: ${countOfAttempts}`);

    } else {

      let playAgain = confirm('Поздравляю, Вы угадали!!! Хотите сыграть ещё?');
      if (playAgain) {
        play();
      } else {
        return;
      }

    }

    if (countOfAttempts === 0) {
      let playAgain = confirm('Попытки закончились! Хотите сыграть ещё?');
      if (playAgain) {
        play();
      } else {
        return;
      }
    }

    getAnswer();
  };

  getAnswer();
  
};

play();
alert('Игра окончена');