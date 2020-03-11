

function clickEventhandler(event){
    event.preventDefault()
    console.log(event.type + '!!!!!!')
    console.log(event.target)
    console.log(event.currentTarget)
}
document.querySelector('header nav a').addEventListener(
    'click' , (clickEventhandler) => {
        alert("links don't work");
    }
)

const ito = document.querySelector('#remove')
ito.addEventListener('mouseover', function(){
    ito.style.width ='200px';
})

const header1 = document.querySelector('body')
header1.addEventListener("keydown", event => {
   
        header1.style.color = 'darkblue';
   
    // do something
  });

const nav = document.querySelector('.nav');
nav.addEventListener('mouseout', function() {
    nav.style.background = 'green';
})

const iro = document.querySelector('#bus')
iro.addEventListener('mouseenter', function() {
    iro.style.width = '500%';
})

window.addEventListener('offline', (event) => {
    alert("The network connection has been lost.");
});

const body = document.querySelector('body')
body.addEventListener('keyup', function() {
    body.style.color = 'black';
})

const ixt = document.querySelector('.inverse-content .text-content')
ixt.addEventListener('mousemove', function() {
    ixt.style.textAlign = 'center';
})

const header = document.querySelector('header')
header.addEventListener('wheel', function() {
    header.style.background = 'lightgreen';
})

const dxt =window //document.querySelector('.content-destination')
dxt.addEventListener('scroll', function() {
  //  dxt.style.background = 'grey';
  const scrollable =document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  if (Math.ceil(scrolled) === scrollable){
     
      body.style.background = 'grey';
  }
})

const fxt = document.querySelector('.footer p');
fxt.addEventListener('mouseup', function() {
    fxt.style.color = 'green';
})


const fer = document.querySelector('.footer');
fer.addEventListener('dblclick', function(){
    fer.style.background = 'grey';
})

// Your code goes here
/* 
function clickEventhandler(event){
    event.preventDefault()
    console.log(event.type + '!!!!!!')
    console.log(event.target)
    console.log(event.currentTarget)
}

console.log("somethffdsing")

homeLink.addEventListener(
    'click', () => {
        console.log('link got clicked')
    }
)

document.querySelector('nav').addEventListener(
    'click' , () => {
        console.log('nav got clicked')
    }
)

document.querySelector('.main-navigation').addEventListener(
    'click' , () => {
        console.log('header got clicked')
    }
)

document.body.addEventListener(
    'click' , (stuff) => {
        console.log(stuff)
        console.log('body got clicked')
    }
)
document.addEventListener(
    'click' , (event) => {
        event.stopPropagation()
        console.log('document got clicked')
    }
)
window.addEventListener(
    'click' , (clickEventhandler, true) 
    //=> {
        
   //     console.log('window got clicked')
   // }
)
*/
/*
document.querySelector('body').addEventListener('dbclick', (event)=> {
body.style.color('red')
event.stopPropagation()

}) 

bus.addEventListener('click', () => {
    bus.style.transform = 'skewY(1080deg)'
    bus.style.transition = 'transform 6s'
})



document.querySelector('header nav a').addEventListener(
    'mouseover' , (clickEventhandler) => {
        alert("links don't work");
    }
)
m
const head = document.querySelector('.logo-heading');

head.addEventListener(
    'keydown' , (event) => {
        event.target.style.color = 'red';
    }
)

const nav = document.querySelector('.nav-link');

nav.addEventListener(
    'wheel' , (event) => {
  event.style.color('red')
    }
)

const fg = document.querySelector('#homeLink');

fg.addEventListener(
    'drag / drop' , (event) => {
event.style.display('none')
    }
)

const df = document.querySelector('.img-content');

df.addEventListener(
    'load' , (event) => {
        event.style.display('none')
    }
)

const nrn = document.querySelector('.text-content');

nrn.addEventListener(
    'focus' , (event) => {
        event.style.display('none')
    }
)

const www = document.querySelector('#chch');

www.addEventListener(
    'resize' , (event) => {
        event.style.display('none')
    }
)

const tht = document.querySelector('.content-destination');

tht.addEventListener(
    'scroll' , (event) => {
        event.style.display('none')
        console.log('why no work')
    }
)

const ree = document.querySelector('.destination');

ree.addEventListener(
    'select' , (event) => {
        event.style.display('none')
    }
)

const but = document.querySelector('.btn');

but.addEventListener(
    'dblclick' , (event) => {
        event.style.display('none')
    }
)

console.log('working')

*/