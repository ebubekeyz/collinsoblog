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

        console.log(article)
    }
    catch(error){
        console.log(error)
    }
})

