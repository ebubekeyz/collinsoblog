const barsBtn = document.querySelector('#bars');
const closeBtn = document.querySelector('#close');
const deskDOM = document.querySelector('.desk');

barsBtn.addEventListener('click', () => {
  deskDOM.classList.toggle('show');
  barsBtn.style.display = 'none';
  closeBtn.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  closeBtn.classList.remove('show');
  barsBtn.style.display = 'block';
  deskDOM.classList.remove('show');
});

let date3 = new Date();
const footerYearDOM = document.querySelector('.footer-year');
const footerYear = date3.getFullYear();
date3 = date3.toLocaleString();
footerYearDOM.textContent = footerYear;

const timeDOM = document.querySelector('.time');

timeDOM.innerHTML = `<li>${date3}</li>`;
