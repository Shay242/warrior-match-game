// const card = document.querySelector(".card");
// card.addEventListener("click", () => {
//     card.classList.toggle("flipcard");
// })
const buildHtml = () => {
  const build = document.getElementById("build");
  const firstRow = document.createElement("div");
  const cardContainer = document.createElement("div");
  const frontCard = document.createElement("div");
  const img1 = document.createElement("img");
  const backCard = document.createElement("div");


  // for (let i = 0; i < 3; i++ ) {
  //     const div = document.createElement("div")
  //    cardContainer.appendChild(`div${i}`); 


const buildInnerHtml = (el) => {
  const wordsArr = ["shay", "luna", "sky", "moon"];
  for (let i = 0; i < 4; i++) {
    const build = document.getElementById(el);
    const cardContainer = document.createElement("div");
    const frontCard = document.createElement("div");
    const img1 = document.createElement("img");
    const backCard = document.createElement("div");

    cardContainer.classList.add(`card-container${i + 1}`);
    cardContainer.classList.add("flip-card");
    frontCard.classList.add("front-card");
    backCard.classList.add("back-card");
    backCard.innerHTML = wordsArr[i];
    img1.src =
      "https://image.shutterstock.com/image-vector/trendy-lettering-queen-gold-crown-260nw-1748371328.jpg";

    frontCard.appendChild(img1);
    cardContainer.appendChild(frontCard);
    cardContainer.appendChild(backCard);
    build.appendChild(cardContainer);
  }
}

const buildHtml = () => {
  const buildIds = ["build1", "build2", "build3", "build4"];
  for (let i = 0; i < 4; i++) {
    buildInnerHtml(buildIds[i]);
  }
};
const cardContainer = document.getElementById("");
cardContainer.classList.add("flip-card");
