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


const submitBtn = document.querySelector('#submit');
const inputControl = document.querySelector('.input-control')



let date3 = new Date()
const footerYearDOM = document.querySelector('.footer-year')
const footerYear = date3.getFullYear()
date3 = date3.toLocaleString()
footerYearDOM.textContent = footerYear;

const timeDOM = document.querySelector('.time')

timeDOM.innerHTML = `<li>${date3}</li>`


const params2 = window.location.search
const urlID = new URLSearchParams(params2).get('id')



window.addEventListener('DOMContentLoaded', async() => {
    try {
        const response = await fetch(`/api/v1/article/${urlID}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        let article = data.article

        const {_id:id, title, category, description, image} = article

        // let singleFilter = article.filter((single) => {
        //     if(single.category === 'news'){
        //         return single
        //     }
        // })

        const descDOM = document.querySelector('.desc')
        const bannerImgDOM = document.querySelector('.banner-img')
        const titleDOM = document.querySelector('.title')

        bannerImgDOM.innerHTML = `<img src="${image}"class="banner-image img" alt=""> `

        titleDOM.textContent = title
        descDOM.textContent = description

        
        
        

    }
    catch(error){
        console.log(error)
    }
})

