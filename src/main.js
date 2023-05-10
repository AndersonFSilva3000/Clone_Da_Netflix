document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll(`[data-faq-question]`);


  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', openAndCloseAnswer)
  }
});

function openAndCloseAnswer(element) {
  const classe = 'faq__questions__item--is-open';
  const elementFather = element.target.parentNode;

  elementFather.classList.toggle(classe)
}