const mainBodyDOM = document.querySelector('.test')
const mainBDOM = document.querySelector('.main-body')
const newsBodyDOM = document.querySelector('#news-body')
const bankproductBodyDOM = document.querySelector('#bankproduct-body')
const insuranceBodyDOM = document.querySelector('#insurance-body')
const fintechBodyDOM = document.querySelector('#fintech-body')
const eventBodyDOM = document.querySelector('#event-body')
const foodbankBodyDOM = document.querySelector('#foodbank-body')
const productBodyDOM = document.querySelector('#product-body')
const makemoneyBodyDOM = document.querySelector('#makemoney-body')
const newsBtn = document.querySelector('#news-btn')
const moneyBtn = document.querySelector('#money-btn')
const foodBtn = document.querySelector('#food-btn')
const fintechBtn = document.querySelector('#fintech-btn')
const insuranceBtn = document.querySelector('#insurance-btn')
const bankBtn = document.querySelector('#bank-btn')
const productBtn = document.querySelector('#product-btn')
const eventBtn = document.querySelector('#event-btn')
const nBodyDOM = document.querySelector('#n-body')
const mBodyDOM = document.querySelector('#m-body')
const fBodyDOM = document.querySelector('#f-body')
const fiBodyDOM = document.querySelector('#fi-body')
const iBodyDOM = document.querySelector('#i-body')
const bBodyDOM = document.querySelector('#b-body')
const pBodyDOM = document.querySelector('#p-body')
const eBodyDOM = document.querySelector('#e-body')
const titleBtn = document.querySelector('.title')
const navToggle = document.querySelector('.nav-toggle')
const leftMenu = document.querySelector('.left-menu')


const width = window.innerWidth

navToggle.addEventListener('click', () => {
    leftMenu.classList.toggle('show')
    mainBDOM.classList.toggle('remove')
})





newsBtn.addEventListener('click',() => {
    mainBDOM.style.display = 'none'
    pBodyDOM.style.display = 'none'
    mBodyDOM.style.display = 'none'
    bBodyDOM.style.display = 'none'
    iBodyDOM.style.display = 'none'
    fBodyDOM.style.display = 'none'
    fiBodyDOM.style.display = 'none'
    eBodyDOM.style.display = 'none'
    nBodyDOM.style.display = 'block'



    
})

moneyBtn.addEventListener('click',() => {
    nBodyDOM.style.display = 'none'
    mainBDOM.style.display = 'none'
    pBodyDOM.style.display = 'none'
    mBodyDOM.style.display = 'block'
    bBodyDOM.style.display = 'none'
    iBodyDOM.style.display = 'none'
    fBodyDOM.style.display = 'none'
    fiBodyDOM.style.display = 'none'
    eBodyDOM.style.display = 'none'
})

foodBtn.addEventListener('click',() => {
    nBodyDOM.style.display = 'none'
    mainBDOM.style.display = 'none'
    pBodyDOM.style.display = 'none'
    mBodyDOM.style.display = 'none'
    bBodyDOM.style.display = 'none'
    iBodyDOM.style.display = 'none'
    fBodyDOM.style.display = 'block'
    fiBodyDOM.style.display = 'none'
    eBodyDOM.style.display = 'none'
})

fintechBtn.addEventListener('click',() => {
    nBodyDOM.style.display = 'none'
    mainBDOM.style.display = 'none'
    pBodyDOM.style.display = 'none'
    mBodyDOM.style.display = 'none'
    bBodyDOM.style.display = 'none'
    iBodyDOM.style.display = 'none'
    fBodyDOM.style.display = 'none'
    fiBodyDOM.style.display = 'block'
    eBodyDOM.style.display = 'none'
})

insuranceBtn.addEventListener('click',() => {
    nBodyDOM.style.display = 'none'
    mainBDOM.style.display = 'none'
    pBodyDOM.style.display = 'none'
    mBodyDOM.style.display = 'none'
    bBodyDOM.style.display = 'none'
    iBodyDOM.style.display = 'block'
    fBodyDOM.style.display = 'none'
    fiBodyDOM.style.display = 'none'
    eBodyDOM.style.display = 'none'
})

bankBtn.addEventListener('click',() => {
    nBodyDOM.style.display = 'none'
    mainBDOM.style.display = 'none'
    pBodyDOM.style.display = 'none'
    mBodyDOM.style.display = 'none'
    bBodyDOM.style.display = 'block'
    iBodyDOM.style.display = 'none'
    fBodyDOM.style.display = 'none'
    fiBodyDOM.style.display = 'none'
    eBodyDOM.style.display = 'none'
})

productBtn.addEventListener('click',() => {
    nBodyDOM.style.display = 'none'
    mainBDOM.style.display = 'none'
    pBodyDOM.style.display = 'block'
    mBodyDOM.style.display = 'none'
    bBodyDOM.style.display = 'none'
    iBodyDOM.style.display = 'none'
    fBodyDOM.style.display = 'none'
    fiBodyDOM.style.display = 'none'
    eBodyDOM.style.display = 'none'
})

eventBtn.addEventListener('click',() => {
    nBodyDOM.style.display = 'none'
    mainBDOM.style.display = 'none'
    pBodyDOM.style.display = 'none'
    mBodyDOM.style.display = 'none'
    bBodyDOM.style.display = 'none'
    iBodyDOM.style.display = 'none'
    fBodyDOM.style.display = 'none'
    fiBodyDOM.style.display = 'none'
    eBodyDOM.style.display = 'block'
})




















const articleFunc = async () => {
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
      let idnum = 0;
      mainBodyDOM.innerHTML = article.map((body) => {
        body.idnum = idnum++
        const { _id:id, title, category } = body
        return `
        
        <div class="table">
             <p>${idnum}.</p>  
        <p>
        ${title.toUpperCase()}</p>
        <p class="cat">
        ${category.toUpperCase()}</p>
         <a href="/edit-post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/dashboard?id=${id}"><span><i class="fas fa-trash"></i></span></a>
     </div>
        ` }).join('')

   

  
     
    
    } catch (error) {
      console.log(error);
    }
  };
  
  articleFunc();






// news


  const newsFunc = async () => {
    try {
      const response = await fetch(`/api/v1/article`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      const article = data.article;

      const newsFilter = article.filter((news) => {
        if(news.category === 'news'){
            return news
        }
      })
      // console.log(article)
      let idnum = 0;
      newsBodyDOM.innerHTML = newsFilter.map((body) => {
        body.idnum = idnum++
        const { _id:id, title, category } = body
        return `
        
        <div class="table">
             <p>${idnum}.</p>  
        <p>
        ${title.toUpperCase()}</p>
       
         <a href="/edit-post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/dashboard?id=${id}"><span><i class="fas fa-trash"></i></span></a>
     </div>
        ` }).join('')

   

  
     
    
    } catch (error) {
      console.log(error);
    }
  };
  
  newsFunc();



  
// makemoney
  const makemoneyFunc = async () => {
    try {
      const response = await fetch(`/api/v1/article`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      const article = data.article;

      const newsFilter = article.filter((news) => {
        if(news.category === 'makemoney'){
            return news
        }
      })
      // console.log(article)
      let idnum = 0;
      makemoneyBodyDOM.innerHTML = newsFilter.map((body) => {
        body.idnum = idnum++
        const { _id:id, title, category } = body
        return `
        
        <div class="table">
             <p>${idnum}.</p>  
        <p>
        ${title.toUpperCase()}</p>
       
         <a href="/edit-post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/dashboard?id=${id}"><span><i class="fas fa-trash"></i></span></a>
     </div>
        ` }).join('')

   

  
     
    
    } catch (error) {
      console.log(error);
    }
  };
  
  makemoneyFunc();


//   event

  const eventFunc = async () => {
    try {
      const response = await fetch(`/api/v1/article`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      const article = data.article;

      const newsFilter = article.filter((news) => {
        if(news.category === 'events'){
            return news
        }
      })
      // console.log(article)
      let idnum = 0;
      eventBodyDOM.innerHTML = newsFilter.map((body) => {
        body.idnum = idnum++
        const { _id:id, title, category } = body
        return `
        
        <div class="table">
             <p>${idnum}.</p>  
        <p>
        ${title.toUpperCase()}</p>
       
         <a href="/edit-post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/dashboard?id=${id}"><span><i class="fas fa-trash"></i></span></a>
     </div>
        ` }).join('')

   

  
     
    
    } catch (error) {
      console.log(error);
    }
  };
  
 eventFunc();




// products
 const productFunc = async () => {
    try {
      const response = await fetch(`/api/v1/article`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      const article = data.article;

      const newsFilter = article.filter((news) => {
        if(news.category === 'products'){
            return news
        }
      })
      // console.log(article)
      let idnum = 0;
      productBodyDOM.innerHTML = newsFilter.map((body) => {
        body.idnum = idnum++
        const { _id:id, title, category } = body
        return `
        
        <div class="table">
             <p>${idnum}.</p>  
        <p>
        ${title.toUpperCase()}</p>
       
         <a href="/edit-post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/dashboard?id=${id}"><span><i class="fas fa-trash"></i></span></a>
     </div>
        ` }).join('')

   

  
     
    
    } catch (error) {
      console.log(error);
    }
  };
  
 productFunc();
  


// insurance
 const insuranceFunc = async () => {
    try {
      const response = await fetch(`/api/v1/article`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      const article = data.article;

      const newsFilter = article.filter((news) => {
        if(news.category === 'insurance'){
            return news
        }
      })
      // console.log(article)
      let idnum = 0;
      insuranceBodyDOM.innerHTML = newsFilter.map((body) => {
        body.idnum = idnum++
        const { _id:id, title, category } = body
        return `
        
        <div class="table">
             <p>${idnum}.</p>  
        <p>
        ${title.toUpperCase()}</p>
       
         <a href="/edit-post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/dashboard?id=${id}"><span><i class="fas fa-trash"></i></span></a>
     </div>
        ` }).join('')

   

  
     
    
    } catch (error) {
      console.log(error);
    }
  };
  
 insuranceFunc();



//  bankproducts

 const bankproductFunc = async () => {
    try {
      const response = await fetch(`/api/v1/article`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      const article = data.article;

      const newsFilter = article.filter((news) => {
        if(news.category === 'bankproducts'){
            return news
        }
      })
      // console.log(article)
      let idnum = 0;
      bankproductBodyDOM.innerHTML = newsFilter.map((body) => {
        body.idnum = idnum++
        const { _id:id, title, category } = body
        return `
        
        <div class="table">
             <p>${idnum}.</p>  
        <p>
        ${title.toUpperCase()}</p>
        
         <a href="/edit-post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/dashboard?id=${id}"><span><i class="fas fa-trash"></i></span></a>
     </div>
        ` }).join('')

   

  
     
    
    } catch (error) {
      console.log(error);
    }
  };
  
bankproductFunc();


// fintech
const fintechFunc = async () => {
    try {
      const response = await fetch(`/api/v1/article`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      const article = data.article;

      const newsFilter = article.filter((news) => {
        if(news.category === 'fintech'){
            return news
        }
      })
      // console.log(article)
      let idnum = 0;
      fintechBodyDOM.innerHTML = newsFilter.map((body) => {
        body.idnum = idnum++
        const { _id:id, title, category } = body
        return `
        
        <div class="table">
             <p>${idnum}.</p>  
        <p>
        ${title.toUpperCase()}</p>
       
         <a href="/edit-post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/dashboard?id=${id}"><span><i class="fas fa-trash"></i></span></a>
     </div>
        ` }).join('')

   

  
     
    
    } catch (error) {
      console.log(error);
    }
  };
  
fintechFunc();




const foodbankFunc = async () => {
    try {
      const response = await fetch(`/api/v1/article`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      const article = data.article;

      const newsFilter = article.filter((news) => {
        if(news.category === 'foodbank'){
            return news
        }
      })
      // console.log(article)
      let idnum = 0;
      foodbankBodyDOM.innerHTML = newsFilter.map((body) => {
        body.idnum = idnum++
        const { _id:id, title, category } = body
        return `
        
        <div class="table">
             <p>${idnum}.</p>  
        <p>
        ${title.toUpperCase()}</p>
       
         <a href="/edit-post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/dashboard?id=${id}"><span><i class="fas fa-trash"></i></span></a>
     </div>
        ` }).join('')

   

  
     
    
    } catch (error) {
      console.log(error);
    }
  };
  
 foodbankFunc();