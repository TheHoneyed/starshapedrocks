const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const response = document.getElementById("response");

// Handle 'Yes' button click
yesButton.addEventListener("click", () => {
  response.textContent = "Yay! 🥳 I knew you'd say yes! 💕";
  noButton.style.display = "none";
});

// Handle 'No' button click
noButton.addEventListener("click", () => {
  noButton.style.display = "none";
  response.textContent = "Nuh uh! Please reconsider... NOW";
});
