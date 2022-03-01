function BOSS() {
  let randomNumber = Math.floor(Math.random() * 8 );
  let colors = [
    "red",
    "orange",
    "violet",
    "yellow",
    "white",
    "blue",
    "green",
    "purple",
  ];
  console.log(colors[randomNumber]);
  document.body.style.backgroundColor = colors[randomNumber];
}
// BOSS();

let button1 = document.querySelector(".try");
button1.addEventListener("click", BOSS);
