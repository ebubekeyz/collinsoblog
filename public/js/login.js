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


const passIconBtn = document.querySelector('#pass-icon');
const passwordInput = document.querySelector('#password');

passIconBtn.addEventListener('click', function(){
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text'
    }
    else{
        passwordInput.type = 'password'
    }
})

