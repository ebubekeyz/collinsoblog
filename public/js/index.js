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


// const submitBtn = document.querySelector('#submit');
// const inputControl = document.querySelector('.input-control')

// submitBtn.addEventListener('click', () => {
//     inputControl.classList.add('show')
// })





window.addEventListener('DOMContentLoaded', async() => {
    try {
        const response = await fetch(`/api/v1/article`, {
            method: 'GET',
            headers: {
                "Content-Type": "apllication/json"
            }
        })

        const data = await response.json()
        const article = data.article

        const titleDOM = document.querySelector('#title')
        const titleDescDOM = document.querySelector('#title-desc')
        const bannerCenDOM = document.querySelector('.banner-center')

        console.log(article.length)
        titleDOM.innerHTML = `<a href="/single-blog?id=${article[article.length - 1]._id}">${article[article.length - 1].title}</a>`
        titleDescDOM.innerHTML = `<p id="title-desc">${article[article.length - 1].description.slice(0, 150)}.......</p>`
        

       

        const newsFilter = article.filter((news) => {
            if(news.category === 'news'){
                return news
            }
        })

        const moneyFilter = article.filter((news) => {
            if(news.category === 'makemoney'){
                return news
            }
        })



        const newsLength = newsFilter.length - 1
        const newsLength2 = newsFilter.length - 2

        const moneyLength = moneyFilter.length - 1
        const moneyLength2 = moneyFilter.length - 2
        console.log(moneyFilter[moneyLength])

        const mainCenterDOM = document.querySelector('.main-center')
        const moneyDOM = document.querySelector('#make-money')
        

        mainCenterDOM.innerHTML = `
        <article class="blog">
          <div class="blog-img">
            <img
              src="${newsFilter[newsLength].image}"
              class="main-img img"
              alt="blog-img"
            />

            <span class="tag">${newsFilter[newsLength].category}</span>
            <a href="/single-blog?id=${newsFilter[newsLength]._id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-blog"
              ><h3>
                ${newsFilter[newsLength].title}
              </h3></a
            >

            <div class="info">
              <p>${newsFilter[newsLength].user.name}</p>
              <span><i class="fas fa-comment"></i><span>0</span></span>
              <p>Nov 16th, 2023</p>
            </div>
          </div>
        </article>

        <article class="blog">
          <div class="blog-img">
            <img
              src="${newsFilter[newsLength2].image}"
              class="main-img img"
              alt="blog-img"
            />

            <span class="tag">${newsFilter[newsLength2].category}</span>
            <a href="/single-blog?id=${newsFilter[newsLength2]._id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-blog"
              ><h3>
              ${newsFilter[newsLength2].title}
              </h3></a
            >

            <div class="info">
              <p>${newsFilter[newsLength2].user.name}</p>
              <span><i class="fas fa-comment"></i><span>0</span></span>
              <p>Nov 16th, 2023</p>
            </div>
          </div>
        </article>
        `

        // make money

        moneyDOM.innerHTML = `
        <article class="blog">
          <div class="blog-img">
            <img
              src="${moneyFilter[moneyLength].image}"
              class="main-img img"
              alt="blog-img"
            />

            <span class="tag">${moneyFilter[moneyLength].category}</span>
            <a href="/single-blog?id=${moneyFilter[moneyLength]._id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-blog"
              ><h3>
                ${moneyFilter[moneyLength].title}
              </h3></a
            >

            <div class="info">
              <p>${moneyFilter[moneyLength].user.name}</p>
              <span><i class="fas fa-comment"></i><span>0</span></span>
              <p>Nov 16th, 2023</p>
            </div>
          </div>
        </article>

        <article class="blog">
          <div class="blog-img">
            <img
              src="${moneyFilter[moneyLength2].image}"
              class="main-img img"
              alt="blog-img"
            />

            <span class="tag">${moneyFilter[moneyLength2].category}</span>
            <a href="/single-blog?id=${moneyFilter[moneyLength2]._id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-blog"
              ><h3>
              ${moneyFilter[moneyLength2].title}
              </h3></a
            >

            <div class="info">
              <p>${moneyFilter[moneyLength2].user.name}</p>
              <span><i class="fas fa-comment"></i><span>0</span></span>
              <p>Nov 16th, 2023</p>
            </div>
          </div>
        </article>
        `


       
        

    }
    catch(error){
        console.log(error)
    }
})

