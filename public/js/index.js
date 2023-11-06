const barsBtn = document.querySelector('#bars');
const closeBtn = document.querySelector('#close');
const deskDOM = document.querySelector('.desk')

barsBtn.addEventListener('click', () => {
    deskDOM.classList.add('show');
    barsBtn.style.display = 'none';
    closeBtn.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    closeBtn.style.display = 'none'
    barsBtn.style.display = 'block'
    deskDOM.style.display = 'none'
})
