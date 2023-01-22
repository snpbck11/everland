const donatorTemplate = document.querySelector("#support-list-item").content;
const donatorElement = donatorTemplate.querySelector(".support__list-item");

function createDonator(name, sum, time) {
  const newDonator = donatorElement.cloneNode(true);

  const nameDonator = newDonator.querySelector(".photo-grid__image");

  imageCard.src = imgSrc;
  imageCard.alt = titleCardValue;
  newCard.querySelector(".support__list-name").textContent = name;
  newCard.querySelector(".support__list-sum").textContent = sum;
  newCard.querySelector(".support__list-sum").textContent = sum;

  newCard
    .querySelector(".button-like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("button-like_active");
    });

  newCard
    .querySelector(".button-delete-card")
    .addEventListener("click", function (evt) {
      newCard.remove();
    });

  newCard
    .querySelector(".photo-grid__image")
    .addEventListener("click", function (evt) {
      openPopUp(popUpPicCard);
      popUpPicImg.src = imgSrc;
      popUpPicImg.alt = titleCardValue;
      popUpPicCaption.textContent = titleCardValue;
    });
  return newCard;
}

function renderCard(newCard) {
  cardsContainer.prepend(newCard);
}

// initialCards.forEach(function (element) {
  // renderCard(createCard(element.link, element.name));
// });
