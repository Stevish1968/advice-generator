// const adviceID = document.getElementById('advice-id');
// const advice = document.getElementById('advice');

const cardBody = document.getElementById("card");

fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let adviceJSON = data;
    const id = adviceJSON.slip.id;
    const advice = adviceJSON.slip.advice;

    const card = `<div class="card-body">
 <h5>Advice #<span id="advice-id">${id}</span></h5>
 <p class="advice" id="advice"><q>${advice}</q></p>
 <div class="divider"><img src="images/pattern-divider-desktop.svg" alt="divider Image" /></div>
</div>`;

    cardBody.innerHTML = card;
  });
