const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value;
  greeting.textContent = `Hi, ${name}! Welcome to our Yearbook Website.`;
  nameForm.reset();
});
