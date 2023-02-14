const joke = document.querySelector("#joke");
const jokebtn = document.querySelector("#jokebtn");

const container = document.getElementById("container");

const genretejokes = () => {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", setHeader)
    .then((response) => response.json())
    .then((data) => (joke.innerHTML = `${data.joke}`));
};
// joke.addEventListener
jokebtn.addEventListener("click", genretejokes);
genretejokes();
