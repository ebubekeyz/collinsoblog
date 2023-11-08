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
        const article = data.article

        const eventFilter = article.filter((products) => {
            if(products.category === 'products'){
                return products
            }
        })
        console.log(eventFilter)

        const eventDOM = document.querySelector('#products')
        eventDOM.innerHTML = eventFilter.map((events) => {
            let {_id:id, title, description, image, category, user:{name: name}, createdAt} = events

           let eventDate = new Date(createdAt)
           
        let eventMonth = eventDate.getMonth()
        eventMonth = months[eventMonth]
        const eventYear = eventDate.getFullYear()
        const eventDay = eventDate.getDate()
        console.log(eventMonth, eventDay, eventYear)
      
            return `
            <article class="blog">
          <div class="blog-img">
            <img
              src="${image}"
              class="main-img img"
              alt="blog-img"
            />

            <span class="tag">${category.toUpperCase()}</span>
            <a href="/single-blog?id=${id}" class="tag2 main-btn btn">Read More</a>
          </div>

          <div class="inner">
            <a href="/single-blog?id=${id}"
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
            `
        } ).join()
        

    }
    catch(error){
        console.log(error)
    }
})



