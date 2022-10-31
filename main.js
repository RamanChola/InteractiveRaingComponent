let circularRatingIcons = document.querySelectorAll(".rating");
const button = document.querySelector(".submit-button");

button.setAttribute("disabled", "");

circularRatingIcons.forEach(function (circularRatingIcon) {
  circularRatingIcon.addEventListener("mouseenter", function () {
    circularRatingIcon.classList.add("rating-circular-icon-active");
  });
  circularRatingIcon.addEventListener("mouseleave", function () {
    circularRatingIcon.classList.remove("rating-circular-icon-active");
  });
  circularRatingIcon.addEventListener("click", function () {
    let prevSelectedRating = document.querySelector(
      ".rating-circular-icon-selected"
    );
    if (prevSelectedRating) {
      prevSelectedRating.classList.remove("rating-circular-icon-selected");
    }

    circularRatingIcon.classList.add("rating-circular-icon-selected");
    button.removeAttribute("disabled");
  });
});

button.addEventListener("click", function () {
  let selectedRating = document.querySelector(".rating-circular-icon-selected");
  let card = document.querySelector(".card");
  let thankyouCard = document.querySelector(".thankyou-card");
  let ratingText = document.querySelector(".rating-text");
  card.style.display = "none";
  thankyouCard.style.display = "flex";
  ratingText.innerHTML = `You selected ${selectedRating.innerHTML} out of 5`;
});
