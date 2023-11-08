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


// const submitBtn = document.querySelector('#submit');
// const inputControl = document.querySelector('.input-control')

// submitBtn.addEventListener('click', () => {
//     inputControl.classList.add('show')
// })


let date3 = new Date()
const footerYearDOM = document.querySelector('.footer-year')
const footerYear = date3.getFullYear()
date3 = date3.toLocaleString()
footerYearDOM.textContent = footerYear;

const timeDOM = document.querySelector('.time')

timeDOM.innerHTML = `<li>${date3}</li>`



window.addEventListener('DOMContentLoaded', async() => {
    try {
        const response = await fetch(`/api/v1/article`, {
            method: 'GET',
            headers: {
                "Content-Type": "apllication/json"
            }
        })

        const data = await response.json()
        let article = data.article

        const titleDOM = document.querySelector('#title')
        const titleDescDOM = document.querySelector('#title-desc')
        const bannerCenDOM = document.querySelector('.banner-center')

      
        titleDOM.innerHTML = `<a href="/single-blog?id=${article[article.length - 1]._id}">${article[article.length - 1].title}</a>`
        titleDescDOM.innerHTML = `<p id="title-desc">${article[article.length - 1].description.slice(0, 150)}.......</p>`
        

       

        let newsFilter = article.filter((news) => {
            if(news.category === 'news'){
                return news
            }
        })

        // const newsFilterStore = localStorage.setItem("newsFilter", newsFilter)
        // console.log(newsFilterStore)

        // newsFilter = localStorage.getItem('newsFilter')
        // console.log(newsFilter)

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

        const eventDate = eventsFilter[eventsLength].createdAt

        const newsDate = newsFilter[newsLength].createdAt

        const insuranceDate = insuranceFilter[eventsLength].createdAt

        const foodbankDate = foodbankFilter[foodbankLength].createdAt

        const moneyDate = moneyFilter[moneyLength].createdAt


        const eventDate2 = eventsFilter[eventsLength2].createdAt

        const newsDate2 = newsFilter[newsLength2].createdAt

        const insuranceDate2 = insuranceFilter[eventsLength2].createdAt

        const foodbankDate2 = foodbankFilter[foodbankLength2].createdAt

        const moneyDate2 = moneyFilter[moneyLength2].createdAt

        const fintechDate = fintechFilter[fintechLength].createdAt

        const fintechDate2 = fintechFilter[fintechLength2].createdAt



        let eventD = new Date(eventDate)
        let eMonth = eventD.getMonth()
        eMonth = months[eMonth]
        const eYear = eventD.getFullYear()
        const eDate = eventD.getDate()
      

        let eventD2 = new Date(eventDate2)
        let eMonth2 = eventD2.getMonth()
        eMonth2 = months[eMonth2]
        const eYear2 = eventD2.getFullYear()
        const eDate2 = eventD2.getDate()
        
        
        let insuranceD = new Date(insuranceDate)
        let iMonth = insuranceD.getMonth()
        iMonth = months[iMonth]
        const iYear = insuranceD.getFullYear()
        const iDate = insuranceD.getDate()
        

        let insuranceD2 = new Date(insuranceDate2)
        let iMonth2 = insuranceD2.getMonth()
        iMonth2 = months[iMonth2]
        const iYear2 = insuranceD2.getFullYear()
        const iDate2 = insuranceD2.getDate()
       

        let foodbankD = new Date(foodbankDate)
        let fMonth = foodbankD.getMonth()
        fMonth = months[fMonth]
        
        const fYear = foodbankD.getFullYear()
        const fDate = foodbankD.getDate()
       

        let foodbankD2 = new Date(foodbankDate2)
        let fMonth2 = foodbankD2.getMonth()
        fMonth2 = months[fMonth2]
       
        const fYear2 = foodbankD2.getFullYear()
        const fDate2 = foodbankD2.getDate()
        
        

        let fintechD = new Date(fintechDate)
        let fintechMonth = fintechD.getMonth()
        fintechMonth = months[fintechMonth]
        const fintechYear = fintechD.getFullYear()
        const fintechDat = fintechD.getDate()
        

        let fintechD2 = new Date(fintechDate2)
        let fintechMonth2 = fintechD2.getMonth()
        fintechMonth2 = months[fintechMonth2]
        const fintechYear2 = fintechD2.getFullYear()
        const fintechDat2 = fintechD2.getDate()
        

        let moneyD = new Date(moneyDate)
        let mMonth = moneyD.getMonth()
        mMonth = months[mMonth]
        const mYear = moneyD.getFullYear()
        const mDate = moneyD.getDate()
       

        let moneyD2 = new Date(moneyDate2)
        let mMonth2 = moneyD2.getMonth()
        mMonth2 = months[mMonth2]
        const mYear2 = moneyD2.getFullYear()
        const mDate2 = moneyD2.getDate()
        

        let newsD = new Date(newsDate)
        let nMonth = newsD.getMonth()
        nMonth = months[nMonth]
      
        const nYear = newsD.getFullYear()
        const nDate = newsD.getDate()
        

        let newsD2 = new Date(newsDate2)
        let nMonth2 = newsD2.getMonth()
        nMonth2 = months[nMonth2]
       
        const nYear2 = newsD2.getFullYear()
        const nDate2 = newsD2.getDate()
        
        

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

            <span class="tag">${newsFilter[newsLength].category.toUpperCase()}</span>
            <a href="/single-blog?id=${newsFilter[newsLength]._id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-blog?id=${newsFilter[newsLength]._id}"
              ><h3>
                ${newsFilter[newsLength].title}
              </h3></a
            >

            <div class="info">
              <p>${newsFilter[newsLength].user.name}</p>
             
              <p>${nMonth} ${nDate}, ${nYear}</p>
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

            <span class="tag">${newsFilter[newsLength2].category.toUpperCase()}</span>
            <a href="/single-blog?id=${newsFilter[newsLength2]._id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-blog?id=${newsFilter[newsLength2]._id}"
              ><h3>
              ${newsFilter[newsLength2].title}
              </h3></a
            >

            <div class="info">
              <p>${newsFilter[newsLength2].user.name}</p>
              
              <p>${nMonth2} ${nDate2}, ${nYear2}</p>
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

            <span class="tag">${moneyFilter[moneyLength].category.toUpperCase()}</span>
            <a href="/single-blog?id=${moneyFilter[moneyLength]._id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-blog?id=${moneyFilter[moneyLength]._id}"
              ><h3>
                ${moneyFilter[moneyLength].title}
              </h3></a
            >

            <div class="info">
              <p>${moneyFilter[moneyLength].user.name}</p>
              
              <p>${mMonth} ${mDate}, ${mYear}</p>
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

            <span class="tag">${moneyFilter[moneyLength2].category.toUpperCase()}</span>
            <a href="/single-blog?id=${moneyFilter[moneyLength2]._id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-blog?id=${moneyFilter[moneyLength2]._id}"
              ><h3>
              ${moneyFilter[moneyLength2].title}
              </h3></a
            >

            <div class="info">
              <p>${moneyFilter[moneyLength2].user.name}</p>
              
              <p>${mMonth2} ${mDate2}, ${mYear2}</p>
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

            <span class="tag">${insuranceFilter[insuranceLength].category.toUpperCase()}</span>
            <a href="/single-blog?id=${insuranceFilter[insuranceLength]._id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-blog?id=${insuranceFilter[insuranceLength]._id}"
              ><h3>
                ${insuranceFilter[insuranceLength].title}
              </h3></a
            >

            <div class="info">
              <p>${insuranceFilter[insuranceLength].user.name}</p>
              
              <p>${iMonth} ${iDate}, ${iYear}</p>
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

            <span class="tag">${insuranceFilter[insuranceLength2].category.toUpperCase()}</span>
            <a href="/single-blog?id=${insuranceFilter[insuranceLength2]._id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-blog?id=${insuranceFilter[insuranceLength2]._id}"
              ><h3>
              ${insuranceFilter[insuranceLength2].title}
              </h3></a
            >

            <div class="info">
              <p>${insuranceFilter[insuranceLength2].user.name}</p>
              
              <p>${iMonth2} ${iDate2}, ${iYear2}</p>
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
 
             <span class="tag">${foodbankFilter[foodbankLength].category.toUpperCase()}</span>
             <a href="/single-blog?id=${foodbankFilter[foodbankLength]._id}" class="tag2 main-btn btn">Read More</a>
           </div>
 
           <div class="inner">
             <a href="/single-blog?id=${foodbankFilter[foodbankLength]._id}"
               ><h3>
                 ${foodbankFilter[foodbankLength].title}
               </h3></a
             >
 
             <div class="info">
               <p>${foodbankFilter[foodbankLength].user.name}</p>
               
               <p>${fMonth} ${fDate}, ${fYear}</p>
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
 
             <span class="tag">${foodbankFilter[foodbankLength2].category.toUpperCase()}</span>
             <a href="/single-blog?id=${foodbankFilter[foodbankLength2]._id}" class="tag2 main-btn btn">Read More</a>
           </div>
 
           <div class="inner">
             <a href="/single-blog?id=${foodbankFilter[foodbankLength2]._id}"
               ><h3>
               ${foodbankFilter[foodbankLength2].title}
               </h3></a
             >
 
             <div class="info">
               <p>${foodbankFilter[foodbankLength2].user.name}</p>
               
               <p>${fMonth2} ${fDate2}, ${fYear2}</p>
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
 
             <span class="tag">${foodbankFilter[foodbankLength].category.toUpperCase()}</span>
             <a href="/single-blog?id=${fintechFilter[fintechLength]._id}" class="tag2 main-btn btn">Read More</a>
           </div>
 
           <div class="inner">
             <a href="/single-blog?id=${fintechFilter[fintechLength]._id}"
               ><h3>
                 ${fintechFilter[fintechLength].title}
               </h3></a
             >
 
             <div class="info">
               <p>${fintechFilter[fintechLength].user.name}</p>
               
               <p>${fintechMonth} ${fintechDat}, ${fintechYear}</p>
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
 
             <span class="tag">${fintechFilter[fintechLength2].category.toUpperCase()}</span>
             <a href="/single-blog?id=${fintechFilter[fintechLength2]._id}" class="tag2 main-btn btn">Read More</a>
           </div>
 
           <div class="inner">
             <a href="/single-blog?id=${fintechFilter[fintechLength2]._id}"
               ><h3>
               ${fintechFilter[fintechLength2].title}
               </h3></a
             >
 
             <div class="info">
               <p>${fintechFilter[fintechLength2].user.name}</p>
               
               <p>${fintechMonth2} ${fintechDat2}, ${fintechYear2}</p>
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
 
             <span class="tag">${eventsFilter[eventsLength].category.toUpperCase()}</span>
             <a href="/single-blog?id=${eventsFilter[eventsLength]._id}" class="tag2 main-btn btn">Read More</a>
           </div>
 
           <div class="inner">
             <a href="/single-blog?id=${eventsFilter[eventsLength]._id}"
               ><h3>
                 ${eventsFilter[eventsLength].title}
               </h3></a
             >
 
             <div class="info">
               <p>${eventsFilter[eventsLength].user.name}</p>
              
               <p>${eMonth} ${eDate}, ${eYear}</p>
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
 
             <span class="tag">${eventsFilter[eventsLength2].category.toUpperCase()}</span>
             <a href="/single-blog?id=${eventsFilter[eventsLength2]._id}" class="tag2 main-btn btn">Read More</a>
           </div>
 
           <div class="inner">
             <a href="/single-blog?id=${eventsFilter[eventsLength2]._id}"
               ><h3>
               ${eventsFilter[eventsLength2].title}
               </h3></a
             >
 
             <div class="info">
               <p>${eventsFilter[eventsLength2].user.name}</p>
              
               <p>${eMonth2} ${eDate2}, ${eYear2}</p>
             </div>
           </div>
         </article>
         `



 
       
        

    }
    catch(error){
        console.log(error)
    }
})



const subInput = document.querySelector('#sub-input2')
const form = document.querySelector('.form-group2')
const subBtn = document.querySelector('#sub-btn2')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const message = subInput.value
  try {
    subBtn.innerHTML = `<div class="loading"></div>`
    const response = await fetch(`/api/v1/subscribe`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({message}),
    })

    const data = await response.json()
    console.log(data)
    if(response.status === 201){
        subInput.value = '';
       
        subBtn.textContent = 'Subscription Successful'
    }
    else {
        subBtn.textContent = data.msg
        subBtn.textContent = 'Subscribe'
    }

    
}
catch(error){
    console.log(error)
}
})