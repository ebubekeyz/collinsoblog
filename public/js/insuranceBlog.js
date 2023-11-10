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

let date3 = new Date();
const footerYearDOM = document.querySelector('.footer-year');
const footerYear = date3.getFullYear();
date3 = date3.toLocaleString();
footerYearDOM.textContent = footerYear;

const timeDOM = document.querySelector('.time');

timeDOM.innerHTML = `<li>${date3}</li>`;

const submitBtn = document.querySelector('#submit');
const inputControl = document.querySelector('.input-control');

const searchInput = document.querySelector('#search-input');
const subBtn = document.querySelector('#submit');

const searchFunc = async () => {
  try {
    const response = await fetch(`/api/v1/article`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    const article = data.article;
    // console.log(article)

    const eventFilter = article.filter((event) => {
      if (event.category === 'insurance') {
        return event;
      }
    });

    const value = searchInput.value;
    if (value) {
      const searchStore = eventFilter.filter((search) => {
        let { title } = search;
        title = title.toLowerCase();
        if (title.startsWith(value)) {
          return search;
        }
      });

      console.log(searchStore);
      const eventDOM = document.querySelector('#insurance');

      eventDOM.innerHTML = searchStore
        .map((searchMap) => {
          let {
            _id: id,
            title,
            description,
            image,
            category,
            user: { name: name },
            createdAt,
          } = searchMap;

          let eventDate = new Date(createdAt);

          let eventMonth = eventDate.getMonth();
          eventMonth = months[eventMonth];
          const eventYear = eventDate.getFullYear();
          const eventDay = eventDate.getDate();
          console.log(eventMonth, eventDay, eventYear);

          return `
      <article class="blog">
      <div class="blog-img">
        <img
          src="${image}"
          class="main-img img"
          alt="blog-img"
        />

        <span class="tag">${category.toUpperCase()}</span>
        <a href="/single-article?id=${id}" class="tag2 main-btn btn">Read More</a>
      </div>

      <div class="inner">
        <a href="/single-article?id=${id}"
          ><h3>
            ${title}
          </h3></a
        >

        <div class="info">
          <p>${name}</p>
          <p>${eventMonth} ${eventDay}, ${eventYear}</p>
        </div>
      </div>
    </article>
      `;
        })
        .join();
    }
  } catch (error) {
    console.log(error);
  }
};

searchFunc();

searchInput.addEventListener('keyup', searchFunc);


submitBtn.addEventListener('click', () => {
  inputControl.classList.add('show');
  submitBtn.style.display = 'none'
});

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch(`/api/v1/article`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    const article = data.article;

    const eventFilter = article.filter((insurance) => {
      if (insurance.category === 'insurance') {
        return insurance;
      }
    });

    const eventDOM = document.querySelector('#insurance');
    eventDOM.innerHTML = eventFilter
      .map((events) => {
        let {
          _id: id,
          title,
          description,
          image,
          category,
          user: { name: name },
          createdAt,
        } = events;

        let eventDate = new Date(createdAt);

        let eventMonth = eventDate.getMonth();
        eventMonth = months[eventMonth];
        const eventYear = eventDate.getFullYear();
        const eventDay = eventDate.getDate();
        console.log(eventMonth, eventDay, eventYear);

        return `
            <article class="blog">
          <div class="blog-img">
            <img
              src="${image}"
              class="main-img img"
              alt="blog-img"
            />

            <span class="tag">${category.toUpperCase()}</span>
            <a href="/single-article?id=${id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-article?id=${id}"
              ><h3>
                ${title}
              </h3></a
            >

            <div class="info">
              <p>${name}</p>
              <p>${eventMonth} ${eventDay}, ${eventYear}</p>
            </div>
          </div>
        </article>
            `;
      })
      .join();
  } catch (error) {
    console.log(error);
  }
});
