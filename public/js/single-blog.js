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

const submitBtn = document.querySelector('#submit');
const inputControl = document.querySelector('.input-control');

let date3 = new Date();
const footerYearDOM = document.querySelector('.footer-year');
const footerYear = date3.getFullYear();
date3 = date3.toLocaleString();
footerYearDOM.textContent = footerYear;

const timeDOM = document.querySelector('.time');

// timeDOM.innerHTML = `<li>${date3}</li>`;

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
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

const articleInput = document.querySelector('#article');

const params2 = window.location.search;
const urlID = new URLSearchParams(params2).get('id');

window.addEventListener('load', () => {
  window.localStorage.clear();
});
const getArticle = async () => {
  try {
    const response = await fetch(`/api/v1/article/${urlID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    let article = data.article;

    const { _id: id, title, category, description, image } = article;

    // let singleFilter = article.filter((single) => {
    //     if(single.category === 'news'){
    //         return single
    //     }
    // })

    const descDOM = document.querySelector('.desc');
    const bannerImgDOM = document.querySelector('.banner-img');

    articleInput.value = id;

    let articleId = (articleInput.value = id);
    console.log(articleId);
    const idStore = localStorage.setItem('articleId', articleId);

    if (response.status === 200) {
      const titleDOM = document.querySelector('.title');

      bannerImgDOM.innerHTML = `<img src="${image}"class="banner-image img" alt=""> `;

      titleDOM.textContent = title;
      descDOM.textContent = description;

      window.reload();
    }
  } catch (error) {
    console.log(error);
  }
};

getArticle();
// window.addEventListener('DOMContentLoaded', async() => {

// })

const commentInput = document.querySelector('#comment-input');
const commentBtn = document.querySelector('#comment-btn');
const nameDOM = document.querySelector('.name');
const dateDOM = document.querySelector('.date');
const commentDOM = document.querySelector('.comment');

commentBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  const message = commentInput.value;
  const article = articleInput.value;

  try {
    commentBtn.textContent = 'sending..';
    const response = await fetch('/api/v1/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, article }),
    });
    const data = await response.json();

    if (response.status === 201) {
      commentInput.value = '';
      commentBtn.textContent = 'comment';

      location.reload();
    } else {
      commentBtn.textContent = 'comment failed';
    }
  } catch (error) {
    console.log(error);
    commentBtn.textContent = 'comment failed';
    window.location = '/login';
  }
});

//     window.addEventListener('DOMContentLoaded', async() => {

// })

const mapComment = async () => {
  const artId = localStorage.getItem('articleId');

  console.log(artId);
  try {
    const response = await fetch(`/api/v1/comment/${artId}/article`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    const comment = data.comment;
    console.log(comment);

    const commentInfo = document.querySelector('#comment-info');

    commentInfo.innerHTML = comment
      .map((comment) => {
        const {
          _id: id,
          message,
          user: {
            name: name,
            facebook: facebook,
            tiktok: tiktok,
            image: image,
          },
          createdAt,
        } = comment;

        let commentDate = new Date(createdAt);

        let commentMonth = commentDate.getMonth();
        commentMonth = months[commentMonth];
        const commentYear = commentDate.getFullYear();
        const commentDay = commentDate.getDate();
        console.log(commentMonth, commentDay, commentYear);

        return `
            <div class="comment-image">
                <img src="${image}" class="comment-img img" alt="">
            </div>

            <div class="comment-text">
                <p class="name">${name}</p>

                <h4 class="comment-socials">
                    <a href="${facebook}"><span><i class="fab fa-facebook"></i></span></a>
                <a href="${tiktok}"><span><i class="fab fa-whatsapp"></i></span></a>
                </h4>

                <p class="date">${commentMonth} ${commentDay}, ${commentYear}</p>
                <p class="comment">${message}</p>
            </div>
            `
      }).join();
  } catch (error) {
    console.log(error);
  }
};

mapComment();
