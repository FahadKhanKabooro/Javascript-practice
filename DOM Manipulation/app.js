// Get ELement By Id
// let head = document.getElementById("heading")
// GEt Element By TAg NAme 
// let heading = document.getElementsByTagName('h1')
//  Get elements by class name 
// let heading = document.getElementsByClassName('heading')
// Query Selecter 
// let heading = document.querySelector('#heading')
// Query Selector all
// let heading = document.querySelectorAll('.heading')
// console.log(heading)

// TRAVERS DOM
// PARENT NODE 

// let heading = document.querySelector('.heading')
// let parent = heading.parentNode
// console.log(parent)

// children Node 

// let parent = document.querySelector('.parent')
// console.log(parent.childNodes)


// nextElementSibling

// let heading = document.querySelector('.heading')
// console.log(heading.nextElementSibling)

// previousElementSibling

// let heading = document.querySelector('h3')
// console.log(heading.previousElementSibling)

// MAnipulation

// let heading = document.querySelector('.heading')
// heading.innerHTML = 'HEllo JS This is Awesome'
// heading.style.color = 'blue'
// heading.style.fontSize = '15px'
// heading.classList.add('title');
// heading.classList.remove('title')

// create Elements

// let heading = document.createElement('h1')
// heading.innerHTML = 'JS DOM INNERHTML'
// heading.classList.add('title')
// let parent = document.querySelector('.parent')
// parent.appendChild(heading)
// let subheading = document.createElement('h3')
// subheading.innerHTML = 'This is Sub Heading'
// heading.insertAdjacentElement('beforeBegin',subheading)

// DOM EVENTS

// let btn = document.querySelector('#btn')
// let heading = document.querySelector('#heading')

// btn.addEventListener('click',function(){
// // console.log('buttin CLicked')
// heading.style.color = 'red'
// heading.style.fontSize = '100px'
// heading.style.backgroundColor = 'yellow'
// })


// DOM MANIPLUTION FUNCTION BULB ON AND OFF
// let btn = document.querySelector("#btn")
// let bulb = document.querySelector("#bulb")

// btn.addEventListener('click',function(){
//     console.log(bulb.src)
//     if(bulb.src.match('off')){
//         bulb.src = './bulf on.png'
//         btn.innerHTML = 'Turn Off'
//     }
//     else{
//         bulb.src = './bulb-off.png'
//         btn.innerHTML = 'Turn On'
//     }
    

// })

// let root = document.querySelector('#root')
// let btn = document.querySelector('button')

// // CArd
// function createitem(item){
//     let card = document.createElement('div')
//     card.classList.add('card');
//     // photo
//     let photo = document.createElement('img')
//     photo.src = item.thumbnailUrl;

//     // TITLE
//     let title = document.createElement('h4')
//     title.innerHTML = item.title;
//     card.appendChild(photo);
//     card.appendChild(title);
//     root.appendChild(card);
// }

// function displayImages(items){
//     items.forEach(function(item){

//         createitem(item)
//     })
//     // console.log(item)
   

//     }
    

// btn.addEventListener('click',function(){
//     fetch('https://jsonplaceholder.typicode.com/photos')

// .then((res) => res.json())
// .then((items) =>{
//     displayImages(items);
// })

// })


// const root = document.querySelector('#root')
// const btn = document.querySelector('button')

// // function banaya for CReating items 
// function createitem(item){
//      // div banaya and usko Class add kara
//      const card = document.createElement('div')
//      card.classList.add('card')


//      // images
//      let photo = document.createElement('img')
//      photo.src = item.thumbnailUrl;

//      // title
//      const title = document.createElement('h4')
//      title.innerHTML = item.title
//      card.appendChild(photo);
//      card.appendChild(title)
//      root.appendChild(card);

// }



// function displayImages(items){
//     // console.log(items)
//     items.forEach(function(item){
//         createitem(item)
//     })
   



// }

// btn.addEventListener('click',function(){
//     fetch('https://jsonplaceholder.typicode.com/photos')
// .then((res) => res.json())
// .then((items) =>{
//     displayImages(items)
// })

// })


const root = document.querySelector('#root')
const btn = document.querySelector("button")

function createitem(item){
    let card = document.createElement('div')
    card.classList.add('card')
    let photo = document.createElement('img')
    photo.src = item.thumbnailUrl
    let title = document.createElement('h4')
    title.innerHTML = item.title
    card.appendChild(photo)
    card.appendChild(title)
    root.appendChild(card)


}

function displayImages(items){
    // console.log(items)
    items.forEach(function(item){
        createitem(item)
    })
}

btn.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>res.json())
    .then((items)=>{
        displayImages(items)
    })
})











