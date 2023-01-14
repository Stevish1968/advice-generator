const cardBody = document.getElementById("card");
const dice = document.getElementById("dice");


const loader = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) {
      throw new Error(`${res.status}: ${await res.text()}`);
    }
    const data = await res.json();
    const card = `<div class="card-body">
                  <h5>Advice #<span id="advice-id">${data.slip.id}</span></h5>
                  <p class="advice" id="advice"><q>${data.slip.advice}</q></p>
                  <div class="divider"><img src="images/pattern-divider-desktop.svg" alt="divider Image" /></div></div>`;

    cardBody.innerHTML = card;

  } catch (err) {
    console.log(err);
  }
};

loader();

dice.addEventListener('click', () =>loader());