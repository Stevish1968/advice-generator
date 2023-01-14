const adviceID = document.getElementById("advice-id");
const advice = document.getElementById("advice");

const cardBody = document.getElementById("card");
const dice = document.getElementById("dice");

// function getAdvice() {
//   fetch("https://api.adviceslip.com/advice")
//   .then((response) => {
//     return response.json();
//   })
// }
//  console.log(getAdvice());

//     let adviceJSON = getAdvice();
//     const id = adviceJSON.slip.id;
//     const advice = adviceJSON.slip.advice;

//     const card = `<div class="card-body">
//  <h5>Advice #<span id="advice-id">${id}</span></h5>
//  <p class="advice" id="advice"><q>${advice}</q></p>
//  <div class="divider"><img src="images/pattern-divider-desktop.svg" alt="divider Image" /></div>
// </div>`;

//     cardBody.innerHTML = card;

dice.addEventListener('click', () =>{loadJSON("https://api.adviceslip.com/advice")});
loadJSON("https://api.adviceslip.com/advice");
async function loadJSON(fname) {
  var response = await fetch(fname);
  var adviceJSON = await response.json();

  const id = adviceJSON.slip.id;
  const advice = adviceJSON.slip.advice;
  const card = `<div class="card-body">
 <h5>Advice #<span id="advice-id">${id}</span></h5>
 <p class="advice" id="advice"><q>${advice}</q></p>
 <div class="divider"><img src="images/pattern-divider-desktop.svg" alt="divider Image" /></div>
</div>`;

  cardBody.innerHTML = card;
}
