const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

let turnedCards = [];

addEventListener('load', event => { // window.addEventListener, mas não precisa escreve window - loop pra definir cards
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" card-name="${pic.name}">
                <div class="back" name="${pic.img}"></div>
                <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
             </div>`;
  });

  // add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // bind the click event of each element to a function 
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (card) => {
        card.target.parentNode.classList.add("turned"); // vira o card que o loop ta iterando sobre
        turnedCards.push(card.target.parentNode) // bota esse card no array de turnedcards
        if (turnedCards.length == 2) { // se dois cards tão virados
          setTimeout(() => {
            if (memoryGame.checkIfPair(turnedCards[0].getAttribute("card-name"), turnedCards[1].getAttribute("card-name")) == false) { // se não tiver o mesmo nome, remove o turn
              turnedCards[0].classList.remove("turned");
              turnedCards[1].classList.remove("turned");
            }
            turnedCards = [] // empties the array
            document.querySelector("#pairs-clicked").innerHTML = memoryGame.pairsClicked; // putting the numbers
            document.querySelector("#pairs-guessed").innerHTML = memoryGame.pairsGuessed;
            if (memoryGame.isFinished()) alert('YASSS');
          }, 500) // delay pra virar de volta
      }
    });
  });

})