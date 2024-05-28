const btn = document.querySelector('i');
const mun = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const cont = document.querySelector('.container');

let tema = localStorage.getItem('tema');

if (!tema) {
  localStorage.setItem('tema', 'light');
}

if (tema === 'dark') {
  darkmod();
}
if (tema === 'light') {
  light();
}

function darkmod() {
  document.body.classList.add('darkmod');
  document.body.classList.remove('bgimg');
  cont.classList.add('darkmod');
  mun.classList.remove('hidden');
  sun.classList.add('hidden');
  localStorage.setItem('tema', 'dark');
}

function light() {
  document.body.classList.remove('darkmod');
  document.body.classList.add('bgimg');
  cont.classList.remove('darkmod');
  sun.classList.remove('hidden');
  mun.classList.add('hidden');
  localStorage.setItem('tema', 'light');
}

sun.addEventListener('click', () => {
  tema = localStorage.getItem('tema');
  if (tema === 'light') {
    darkmod();
  }
});
mun.addEventListener('click', () => {
  tema = localStorage.getItem('tema');
  if (tema === 'dark') {
    light();
  }
});
