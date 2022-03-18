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

  firstRow.className.add("first-row");
  cardContainer.className.add("card-container");
  frontCard.className.add("front-card");

  img1.src =
    "https://image.shutterstock.com/image-vector/trendy-lettering-queen-gold-crown-260nw-1748371328.jpg";

  cardContainer.appendChild(frontCard);
  firstRow.appendChild(cardContainer);
  build.appendChild(firstRow);
};
