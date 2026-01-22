const form = document.getElementById("form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const age = ageInput.value;
  const name = nameInput.value;

  if (!age || !name) {
    alert("Please enter valid details"); // no dot
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  promise
    .then(msg => alert(msg))
    .catch(msg => alert(msg));
});
