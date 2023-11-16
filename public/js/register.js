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

const passIconBtn = document.querySelector('#pass-icon');
const passwordInput = document.querySelector('#password');

passIconBtn.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const facebookInput = document.querySelector('#facebook');
const tiktokInput = document.querySelector('#tiktok');
const passInput = document.querySelector('#password');
const imageInput = document.querySelector('#image');
const subBtn = document.querySelector('#sub-btn');

let imageValue;
imageInput.addEventListener('change', async (e) => {
  const imageFile = e.target.files[0];

  const formData = new FormData();
  console.log(formData);
  formData.append('image', imageFile);
 
  try {
    const {
      data: {
        image: { src },
      },
    } = await axios.post('/api/v1/article/uploadImageCloud', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    imageValue = src;
    console.log(imageValue);
  } catch (error) {
    imageValue = null;
    console.log(error);
  }
});

subBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passInput.value;
  const phone = phoneInput.value;
  const facebook = facebookInput.value;
  const tiktok = tiktokInput.value;
  let image = imageInput.value;

  image = imageValue;

  try {
    const info = { name, email, phone, facebook, tiktok, password, image };
    subBtn.innerHTML = `<div class="loading"></div>`;

    const response = await fetch('/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(info),
    });

    const data = await response.json();

    if (response.status === 201) {
      nameInput.value = '';
      nameInput.value = '';
      phoneInput.value = '';
      facebookInput.value = '';
      tiktokInput.value = '';
      imageInput.value = '';
      subBtn.textContent = 'Successfully Registered';
    }
  } catch (error) {
    console.log(data.msg);
    subBtn.textContent = 'Register';
  }
});
