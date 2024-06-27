// const artigo01 = document.getElementById('artigo01');
// const artigo02 = document.getElementById('artigo02');
// const artigo03 = document.getElementById('artigo03');

// function carrossel01() {
//   artigo01.classList.add('aparece');
//   artigo03.classList.remove('aparece');
//   artigo03.classList.add('desaparece');
//   setTimeout(carrossel02, 4000);
// }

// function carrossel02() {
//   artigo02.classList.add('aparece');
//   artigo01.classList.remove('aparece');
//   artigo01.classList.add('desaparece');
//   setTimeout(carrossel03, 4000);
// }

// function carrossel03() {
//   artigo03.classList.add('aparece');
//   artigo02.classList.remove('aparece');
//   artigo02.classList.add('desaparece');
//   setTimeout(carrossel01, 4000);
// }

// carrossel01();

const images = document.querySelectorAll('.carousel-images img');

let space1control = 1;
let space2control = 2;
let space3control = 3;

function next() {
  let space1 = document.getElementById('space1');
  let space2 = document.getElementById('space2');
  let space3 = document.getElementById('space3');

  space1control++;
  space2control++;
  space3control++;

  if (space1control > 3) {
    space1control = 1;
  }

  if (space2control > 3) {
    space2control = 1;
  }

  if (space3control > 3) {
    space3control = 1;
  }

  space1.src = './assets/img/livro' + space1control + '.jpg';
  space2.src = './assets/img/livro' + space2control + '.jpg';
  space3.src = './assets/img/livro' + space3control + '.jpg';
}

function back() {
  let space1 = document.getElementById('space1');
  let space2 = document.getElementById('space2');
  let space3 = document.getElementById('space3');

  space1control--;
  space2control--;
  space3control--;

  if (space1control < 1) {
    space1control = 3;
  }

  if (space2control < 1) {
    space2control = 3;
  }

  if (space3control < 1) {
    space3control = 3;
  }

  space1.src = './assets/img/livro' + space1control + '.jpg';
  space2.src = './assets/img/livro' + space2control + '.jpg';
  space3.src = './assets/img/livro' + space3control + '.jpg';
}
