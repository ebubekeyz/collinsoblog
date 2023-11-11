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

// timeDOM.innerHTML = `<li>${date3}</li>`;

const passIconBtn = document.querySelector('#pass-icon');
const passwordInput = document.querySelector('#password');

passIconBtn.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#password');
const subBtn = document.querySelector('#sub-btn');

subBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passInput.value;
  console.log(email, password);
  try {
    subBtn.innerHTML = `<div class="loading"></div>`;
    const response = await fetch(`/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      withCredentials: true,
    });

    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      emailInput.value = '';
      passInput.value = '';
      subBtn.textContent = 'You have Successfully Logged In';
      window.location = '/';
    } else {
      subBtn.textContent = data.msg;
      subBtn.textContent = 'Login';
    }


    if(data.user.role === 'owner' || data.user.role === 'admin'){
      window.location = '/dashboard'
    }

    if(body.user.role === 'user'){
      window.location = '/'
    }
  } catch (error) {
    console.log(error);
  }
});
