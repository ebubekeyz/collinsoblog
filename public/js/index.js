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

        const insuranceFilter = article.filter((news) => {
            if(news.category === 'insurance'){
                return news
            }
        })

        const productFilter = article.filter((news) => {
            if(news.category === 'products'){
                return news
            }
        })

        const fintechFilter = article.filter((news) => {
            if(news.category === 'fintech'){
                return news
            }
        })

        const eventsFilter = article.filter((news) => {
            if(news.category === 'events'){
                return news
            }
        })

        const foodbankFilter = article.filter((news) => {
            if(news.category === 'foodbank'){
                return news
            }
        })


        const newsLength = newsFilter.length - 1
        const newsLength2 = newsFilter.length - 2

        const moneyLength = moneyFilter.length - 1
        const moneyLength2 = moneyFilter.length - 2

        const insuranceLength = insuranceFilter.length - 1
        const insuranceLength2 = insuranceFilter.length - 2

        const foodbankLength = foodbankFilter.length - 1
        const foodbankLength2 = foodbankFilter.length - 2

        const fintechLength = fintechFilter.length - 1
        const fintechLength2 = fintechFilter.length - 2

        const eventsLength = eventsFilter.length - 1
        const eventsLength2 = eventsFilter.length - 2

        const mainCenterDOM = document.querySelector('.main-center')
        const moneyDOM = document.querySelector('#make-money')
        const insuranceDOM = document.querySelector('#insurance')
        const fintechDOM = document.querySelector('#fintech')
        const foodbankDOM = document.querySelector('#foodbank')
        const eventsDOM = document.querySelector('#events')
        

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


        // insurance

        insuranceDOM.innerHTML = `
        <article class="blog">
          <div class="blog-img">
            <img
              src="${insuranceFilter[insuranceLength].image}"
              class="main-img img"
              alt="blog-img"
            />

            <span class="tag">${insuranceFilter[insuranceLength].category}</span>
            <a href="/single-blog?id=${insuranceFilter[insuranceLength]._id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-blog"
              ><h3>
                ${insuranceFilter[insuranceLength].title}
              </h3></a
            >

            <div class="info">
              <p>${insuranceFilter[insuranceLength].user.name}</p>
              <span><i class="fas fa-comment"></i><span>0</span></span>
              <p>Nov 16th, 2023</p>
            </div>
          </div>
        </article>

        <article class="blog">
          <div class="blog-img">
            <img
              src="${insuranceFilter[insuranceLength2].image}"
              class="main-img img"
              alt="blog-img"
            />

            <span class="tag">${insuranceFilter[insuranceLength2].category}</span>
            <a href="/single-blog?id=${insuranceFilter[insuranceLength2]._id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-blog"
              ><h3>
              ${insuranceFilter[insuranceLength2].title}
              </h3></a
            >

            <div class="info">
              <p>${insuranceFilter[insuranceLength2].user.name}</p>
              <span><i class="fas fa-comment"></i><span>0</span></span>
              <p>Nov 16th, 2023</p>
            </div>
          </div>
        </article>
        `

        // foodbank

         foodbankDOM.innerHTML = `
         <article class="blog">
           <div class="blog-img">
             <img
               src="${foodbankFilter[foodbankLength].image}"
               class="main-img img"
               alt="blog-img"
             />
 
             <span class="tag">${foodbankFilter[foodbankLength].category}</span>
             <a href="/single-blog?id=${foodbankFilter[foodbankLength]._id}" class="tag2 main-btn btn">Read More</a>
           </div>
 
           <div class="inner">
             <a href="/single-blog"
               ><h3>
                 ${foodbankFilter[foodbankLength].title}
               </h3></a
             >
 
             <div class="info">
               <p>${foodbankFilter[foodbankLength].user.name}</p>
               <span><i class="fas fa-comment"></i><span>0</span></span>
               <p>Nov 16th, 2023</p>
             </div>
           </div>
         </article>
 
         <article class="blog">
           <div class="blog-img">
             <img
               src="${foodbankFilter[foodbankLength2].image}"
               class="main-img img"
               alt="blog-img"
             />
 
             <span class="tag">${foodbankFilter[foodbankLength2].category}</span>
             <a href="/single-blog?id=${foodbankFilter[foodbankLength2]._id}" class="tag2 main-btn btn">Read More</a>
           </div>
 
           <div class="inner">
             <a href="/single-blog"
               ><h3>
               ${foodbankFilter[foodbankLength2].title}
               </h3></a
             >
 
             <div class="info">
               <p>${foodbankFilter[foodbankLength2].user.name}</p>
               <span><i class="fas fa-comment"></i><span>0</span></span>
               <p>Nov 16th, 2023</p>
             </div>
           </div>
         </article>
         `


         // fintech

         fintechDOM.innerHTML = `
         <article class="blog">
           <div class="blog-img">
             <img
               src="${fintechFilter[fintechLength].image}"
               class="main-img img"
               alt="blog-img"
             />
 
             <span class="tag">${foodbankFilter[foodbankLength].category}</span>
             <a href="/single-blog?id=${fintechFilter[fintechLength]._id}" class="tag2 main-btn btn">Read More</a>
           </div>
 
           <div class="inner">
             <a href="/single-blog"
               ><h3>
                 ${fintechFilter[fintechLength].title}
               </h3></a
             >
 
             <div class="info">
               <p>${fintechFilter[fintechLength].user.name}</p>
               <span><i class="fas fa-comment"></i><span>0</span></span>
               <p>Nov 16th, 2023</p>
             </div>
           </div>
         </article>
 
         <article class="blog">
           <div class="blog-img">
             <img
               src="${fintechFilter[fintechLength2].image}"
               class="main-img img"
               alt="blog-img"
             />
 
             <span class="tag">${fintechFilter[fintechLength2].category}</span>
             <a href="/single-blog?id=${fintechFilter[fintechLength2]._id}" class="tag2 main-btn btn">Read More</a>
           </div>
 
           <div class="inner">
             <a href="/single-blog"
               ><h3>
               ${fintechFilter[fintechLength2].title}
               </h3></a
             >
 
             <div class="info">
               <p>${fintechFilter[fintechLength2].user.name}</p>
               <span><i class="fas fa-comment"></i><span>0</span></span>
               <p>Nov 16th, 2023</p>
             </div>
           </div>
         </article>
         `



         // events

         eventsDOM.innerHTML = `
         <article class="blog">
           <div class="blog-img">
             <img
               src="${eventsFilter[eventsLength].image}"
               class="main-img img"
               alt="blog-img"
             />
 
             <span class="tag">${foodbankFilter[foodbankLength].category}</span>
             <a href="/single-blog?id=${eventsFilter[eventsLength]._id}" class="tag2 main-btn btn">Read More</a>
           </div>
 
           <div class="inner">
             <a href="/single-blog"
               ><h3>
                 ${eventsFilter[eventsLength].title}
               </h3></a
             >
 
             <div class="info">
               <p>${eventsFilter[eventsLength].user.name}</p>
               <span><i class="fas fa-comment"></i><span>0</span></span>
               <p>Nov 16th, 2023</p>
             </div>
           </div>
         </article>
 
         <article class="blog">
           <div class="blog-img">
             <img
               src="${eventsFilter[eventsLength2].image}"
               class="main-img img"
               alt="blog-img"
             />
 
             <span class="tag">${eventsFilter[eventsLength2].category}</span>
             <a href="/single-blog?id=${eventsFilter[eventsLength2]._id}" class="tag2 main-btn btn">Read More</a>
           </div>
 
           <div class="inner">
             <a href="/single-blog"
               ><h3>
               ${eventsFilter[eventsLength2].title}
               </h3></a
             >
 
             <div class="info">
               <p>${eventsFilter[eventsLength2].user.name}</p>
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

