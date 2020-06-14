const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

const showAnswer = () => {
  h1.textContent = "Poznać piękną kobietę..."
  h2.textContent = "...o imieniu Ewelina:-)"
}


btn.addEventListener('click', showAnswer);