//sound file links
let flashSnd = [
  new Audio('audio/apple.m4a'), 
  new Audio('audio/dog.m4a'),
  new Audio('audio/chair.m4a'),
  new Audio('audio/city.m4a')
]

let cards = document.getElementsByClassName('card');
    
//Card vocabulary show-hide toggle
for (let cardIndex in cards) {
      let button = cards[cardIndex].querySelector('.card-button');
      button.addEventListener('click', function(event){
        let currentButton = event.target;
        let currentCard = currentButton.parentNode;
        let currentAnswer = currentCard.querySelector('.card-answer');
        if (currentButton.innerHTML == 'Show') {
          currentAnswer.style.display = 'Block';
          currentButton.innerHTML = 'Hide';
        } else if (currentButton.innerHTML == 'Hide') {
          currentAnswer.style.display = 'None';
          currentButton.innerHTML = 'Show';
        }
      })
    }