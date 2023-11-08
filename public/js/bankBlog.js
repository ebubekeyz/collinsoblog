const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const weekdays = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sat',
  ];

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


let date3 = new Date()
const footerYearDOM = document.querySelector('.footer-year')
const footerYear = date3.getFullYear()
date3 = date3.toLocaleString()
footerYearDOM.textContent = footerYear;

const timeDOM = document.querySelector('.time')

timeDOM.innerHTML = `<li>${date3}</li>`

const submitBtn = document.querySelector('#submit');
const inputControl = document.querySelector('.input-control')

submitBtn.addEventListener('click', () => {
    inputControl.classList.add('show')
})



window.addEventListener('DOMContentLoaded', async() => {
    try {
        const response = await fetch(`/api/v1/article`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        let article = data.article

        

    }
    catch(error){
        console.log(error)
    }
})



