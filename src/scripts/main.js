document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll(`[data-faq-question]`);

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', openAndCloseAnswer)
  }

  input = document.querySelectorAll('#input-email');
  label = document.querySelectorAll('#label');
  
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', () => {
      label[i].classList.add('up-label');
    });
  }
  
  for (let i = 0; i < input.length; i++) {
    document.addEventListener('click', (e) => {
      const isClickInside = input[i].contains(e.target);
  
      if(!isClickInside) {
        label[i].classList.remove('up-label');
        input[i].value = "";
      }
    })
  }
});

function openAndCloseAnswer(element) {
  const classe = 'faq__questions__item--is-open';
  const elementFather = element.target.parentNode;

  elementFather.classList.toggle(classe)
}

