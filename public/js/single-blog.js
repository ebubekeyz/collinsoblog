const barsBtn = document.querySelector('#bars');
const closeBtn = document.querySelector('#close');
const deskDOM = document.querySelector('.desk')

barsBtn.addEventListener('click', () => {
    deskDOM.classList.toggle('show');
    barsBtn.style.display = 'none';
    closeBtn.classList.toggle('show')
})

closeBtn.addEventListener('click', () => {
    closeBtn.classList.remove('show')
    barsBtn.style.display = 'block'
    deskDOM.classList.remove('show')
})


const submitBtn = document.querySelector('#submit');
const inputControl = document.querySelector('.input-control')

submitBtn.addEventListener('click', () => {
    inputControl.classList.add('show')
})

let date3 = new Date()
const footerYearDOM = document.querySelector('.footer-year')
const footerYear = date3.getFullYear()
date3 = date3.toLocaleString()
footerYearDOM.textContent = footerYear;

const timeDOM = document.querySelector('.time')

timeDOM.innerHTML = `<li>${date3}</li>`


// const params2 = window.location.search
// const urlID = new URLSearchParams(params2).get('id')

// /api/v1/product/${urlID}