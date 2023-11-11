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
const addBodyDOM = document.querySelector('#add-body')
const editBodyDOM = document.querySelector('#edit-body')
const postBtn = document.querySelector('#post')
const eBodyDOM = document.querySelector('#e-body')
const titleBtn = document.querySelector('.title')
const navToggle = document.querySelector('.nav-toggle')
const leftMenu = document.querySelector('.left-menu')


const width = window.innerWidth

navToggle.addEventListener('click', () => {
    leftMenu.classList.toggle('show')
    mainBDOM.classList.toggle('remove')
})


postBtn.addEventListener('click',() => {
    mainBDOM.style.display = 'none'
    pBodyDOM.style.display = 'none'
    mBodyDOM.style.display = 'none'
    bBodyDOM.style.display = 'none'
    iBodyDOM.style.display = 'none'
    fBodyDOM.style.display = 'none'
    fiBodyDOM.style.display = 'none'
    eBodyDOM.style.display = 'none'
    nBodyDOM.style.display = 'none'
    editBodyDOM.style.display = 'none'
    addBodyDOM.style.display = 'block'

})



newsBtn.addEventListener('click',() => {
    editBodyDOM.style.display = 'none'
    addBodyDOM.style.display = 'none'
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
    editBodyDOM.style.display = 'none'
    addBodyDOM.style.display = 'none'
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
    editBodyDOM.style.display = 'none'
    addBodyDOM.style.display = 'none'
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
    editBodyDOM.style.display = 'none'
    addBodyDOM.style.display = 'none'
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
    editBodyDOM.style.display = 'none'
    addBodyDOM.style.display = 'none'
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
    editBodyDOM.style.display = 'none'
    addBodyDOM.style.display = 'none'
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
    editBodyDOM.style.display = 'none'
    addBodyDOM.style.display = 'none'
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
    editBodyDOM.style.display = 'none'
    addBodyDOM.style.display = 'none'
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
         <a href="/post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/blank?id=${id}"><span><i class="fas fa-trash"></i></span></a>
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
       
         <a href="/post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/blank?id=${id}"><span><i class="fas fa-trash"></i></span></a>
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
       
         <a href="/post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/blank?id=${id}"><span><i class="fas fa-trash"></i></span></a>
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
       
         <a href="/post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/blank?id=${id}"><span><i class="fas fa-trash"></i></span></a>
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
       
         <a href="/post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/blank?id=${id}"><span><i class="fas fa-trash"></i></span></a>
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
       
         <a href="/post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/blank?id=${id}"><span><i class="fas fa-trash"></i></span></a>
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
        
         <a href="/post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/blank?id=${id}"><span><i class="fas fa-trash"></i></span></a>
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
       
         <a href="/post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/blank?id=${id}"><span><i class="fas fa-trash"></i></span></a>
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
       
         <a href="/post?id=${id}"><span><i class="fas fa-pen"></i></span></a>
         <a href="/blank?id=${id}"><span><i class="fas fa-trash"></i></span></a>
     </div>
        ` }).join('')

   

  
     
    
    } catch (error) {
      console.log(error);
    }
  };
  
 foodbankFunc();


 const showImg = async () => {
    try{
        const response = await fetch('/api/v1/user/showMe', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()

        const user = data.user
       

        const {image} = user

        const navImage = document.querySelectorAll('#nav-img')

        navImage.forEach((nav) => {
            nav.innerHTML = `
            <img src="${image}"
            class="nav-img img" alt="">
            `
        })


        
    }

    catch(error){
        console.log(error)
    }
 }


 showImg()



const form = document.querySelector('.form')
const subBtn = document.querySelector('#sub-btn')
const titleInput = document.querySelector('#title')
const descInput = document.querySelector('#desc')
const categoryInput = document.querySelector('#category')
const imageInput = document.querySelector('#image')


const form2 = document.querySelector('.form2')
const subBtn2 = document.querySelector('#sub-btn2')
const titleInput2 = document.querySelector('#title2')
const descInput2 = document.querySelector('#desc2')
const categoryInput2 = document.querySelector('#category2')
const imageInput2 = document.querySelector('#image2')





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

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const description = descInput.value;
  const category = categoryInput.value;
  let image = imageInput.value;

  image = imageValue;

  try {
    const info = { title, description, category, image };
    subBtn.innerHTML = `<div class="loading"></div>`;

    const response = await fetch('/api/v1/article', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(info),
    });

    const data = await response.json();

    if (response.status === 201) {
      titleInput.value = '';
      descInput.value = '';
      categoryInput.value = '';
      imageInput.value = '';
      subBtn.textContent = 'Post Added';
    }
  } catch (error) {
    console.log(data.msg);
    subBtn.textContent = 'Add Post';
  }
});


const params2 = window.location.search;
const urlID = new URLSearchParams(params2).get('id');

imageInput2.addEventListener('change', async (e) => {
  const imageFile = e.target.files[0];

  const formData = new FormData();
 
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

form2.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = titleInput2.value;
  const description = descInput2.value;
  const category = categoryInput2.value;
  let image = imageInput2.value;

  image = imageValue;

  try {
    const info = { title, description, category, image };
    subBtn2.innerHTML = `<div class="loading"></div>`;

    const response = await fetch(`/api/v1/article/${urlID}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(info),
    });

    const data = await response.json();

    if (response.status === 200) {
      titleInput2.value = '';
      descInput2.value = '';
      categoryInput2.value = '';
      imageInput2.value = '';
      subBtn2.textContent = 'Post Edited';
    }
  } catch (error) {
    console.log(data.msg);
    subBtn2.textContent = 'Edit Post';
  }
});





window.addEventListener('DOMContentLoaded', async () => {

  try {
   

    const response = await fetch(`/api/v1/article/${urlID}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      }
    });

    const data = await response.json();
    const article = data.article
    console.log(article.title)

    const {title, description, image, category} = article

    if (response.status === 200) {
      titleInput2.value = title
      descInput2.value = description
      categoryInput2.value = category
      imageInput2.value = image
    }
  } catch (error) {
    console.log(data.msg);
  }
});



const logoutBtn = document.querySelector('#logout')

logoutBtn.addEventListener('click', async () => {
 try {
    const response = await fetch('/api/v1/auth/logout', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        }
    })

    if(response.status === 200){
        location.reload()
    }
 }
 catch(error){
    console.log(error)
 }
})