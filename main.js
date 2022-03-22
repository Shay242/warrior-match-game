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


  firstRow.classList.add("first-row");
  cardContainer.classList.add("card-container");
  frontCard.classList.add("front-card");

  img1.src =
    "https://image.shutterstock.com/image-vector/trendy-lettering-queen-gold-crown-260nw-1748371328.jpg";

  cardContainer.appendChild(frontCard);
  firstRow.appendChild(cardContainer);
  build.appendChild(firstRow);
};

const buildHtml = () => {
  const build2 = document.getElementById("build2");
  const secondRow = document.createElement("div");
  const cardContainer = document.createElement("div");
  const frontCard = document.createElement("div");
  const img1 = document.createElement("img");
  const backCard = document.createElement("div");

  //   for (let i = 0; i < 3; i++ ) {
  //       const div = document.createElement("div")
  //      cardContainer.appendChild(`div${i}`);
  //   }

  secondRow.classList.add("second-row");
  cardContainer.classList.add("card-container");
  frontCard.classList.add("front-card");

  img1.src =
    "https://image.shutterstock.com/image-vector/trendy-lettering-queen-gold-crown-260nw-1748371328.jpg";

  cardContainer.appendChild(frontCard);
  secondRow.appendChild(cardContainer);
  build.appendChild(secondRow);
};

const buildHtml = () => {
  const build3 = document.getElementById("build3");
  const thirdRow = document.createElement("div");
  const cardContainer = document.createElement("div");
  const frontCard = document.createElement("div");
  const img1 = document.createElement("img");
  const backCard = document.createElement("div");

  //   for (let i = 0; i < 3; i++ ) {
  //       const div = document.createElement("div")
  //      cardContainer.appendChild(`div${i}`);
  //   }

  thirdRow.classList.add("third-row");
  cardContainer.classList.add("card-container");
  frontCard.classList.add("front-card");

  img1.src =
    "https://image.shutterstock.com/image-vector/trendy-lettering-queen-gold-crown-260nw-1748371328.jpg";

  cardContainer.appendChild(frontCard);
  thirdRow.appendChild(cardContainer);
  build.appendChild(thirdRow);
};

const buildHtml = () => {
  const build4 = document.getElementById("build4");
  const fourthRow = document.createElement("div");
  const cardContainer = document.createElement("div");
  const frontCard = document.createElement("div");
  const img1 = document.createElement("img");
  const backCard = document.createElement("div");

    // for (let i = 0; i < 3; i++ ) {
    //     const div = document.createElement("div")
    //    cardContainer.appendChild(`div${i}`);
    // }

  fourthRow.classList.add("fourth-row");
  cardContainer.classList.add("card-container");
  frontCard.classList.add("front-card");

  img1.src =
    "https://image.shutterstock.com/image-vector/trendy-lettering-queen-gold-crown-260nw-1748371328.jpg";

  cardContainer.appendChild(frontCard);
  fourthRow.appendChild(cardContainer);
  build.appendChild(fourthRow);
};