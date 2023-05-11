const rand = max => Math.floor(Math.random() * max);

const game = (numCards = 4) => {
  let winNum = rand(numCards);
  let hasWon = false;
  let h2 = document.querySelector("h2");
  h2.textContent = "Good luck!";
  let counter = 0;
  let container = document.querySelector("#container");
  container.innerHTML = "";
  for (let i = 0; i < numCards; i++) {
    let text = i === winNum ? "O" : "X";

    let div = document.createElement("div");
    div.classList.add("flip-card");
    div.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front"></div>
        <div class="flip-card-back">
          <div class="back-top"><span>${text}</span><span>${text}</span></div>
          <h1 class="back-center">${text}</h1>
          <div class="back-bottom"><span>${text}</span><span>${text}</span></div>
        </div>
      </div>`;
    container.appendChild(div);

    div.addEventListener("click", function () {
      if (hasWon) return;
      if (div.classList.contains("clicked")) return;
      div.classList.add("clicked");
      counter++;
      const letter = div.querySelector("h1").textContent;
      if (letter === "O") {
        div.classList.add("shadow");
        hasWon = !hasWon;
        h2.textContent = `You won in ${counter} ${counter == 1 ? "try" : "tries"
          }!`;
      } else {
        h2.textContent = `You've used ${counter} ${counter == 1 ? "try" : "tries"
          }.`;
      }
    });
  }
};

let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  game(input.value);
});

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    game(input.value);
  }
});

game();
