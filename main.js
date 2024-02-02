

let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');

let button = document.querySelector('button')


// fetch('https://quotable.io/random')
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch()

const getQuote = async () => {
    
   const response = await fetch('https://quotable.io/random')

   const data = await response.json()

   h1.innerText = data.content;

   h2.innerText = data.author;

   console.log(data);
}


button.addEventListener('click',getQuote)

setInterval(() => {
    getQuote()
}, 10000);
// console.log(response)