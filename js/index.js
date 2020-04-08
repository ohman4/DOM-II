// Your code goes here
const get = (selector) => {
    return document.querySelector(selector);
}

//Variables
const signUp1 = get('body > div > section.content-pick > div:nth-child(1) > div')
const signUp2 = get('body > div > section.content-pick > div:nth-child(2) > div')
const signUp3 = get('body > div > section.content-pick > div:nth-child(3) > div')
const logoTop = get('body > header > div > h1')
const welcomeH1 = get('body > div > header > h2')
const heroImg = get('body > div > header > img')
const firstP = get('body > div > header > p')
const footerText = get('body > footer > p')
const btmPic = get('body > div > section.content-destination > img')




//TopLogo Alert
function topLogoAlert(event){
    return alert('This is the top heading');
}
logoTop.addEventListener('click', topLogoAlert)

//Mouse over H1 Welcome
function welcomeColor(event){
    welcomeH1.style.color = 'blue'
}
welcomeH1.addEventListener('mouseover', welcomeColor)

//Button 1 color change on click
function btn1(event){
    signUp1.style.color = 'green'
}
signUp1.addEventListener('click', btn1)

// remove hero img
function removeHero(event){
    heroImg.remove()
}
heroImg.addEventListener('click', removeHero)

//Keydown
function escKey(event) {
    if (event.key === 'Escape') {
        logoTop.remove()
    }
  }
  document.addEventListener('keydown', escKey)

//Double Click on the 2nd button
function btn2(event){
    signUp2.style.color = 'red';
}
signUp2.addEventListener('dblclick', btn2)

//Remove 3rd Sign up
function btn3(event){
    signUp3.remove()
}
signUp3.addEventListener('click', btn3)

//Change background color of first paragraph
function pFirst(event){
    firstP.style.backgroundColor = 'red'
}
firstP.addEventListener('mouseover', pFirst)

//Change background color footer
function footerP(event){
    footerText.style.backgroundColor = 'grey'
}
footerText.addEventListener('click', footerP)

// // loaded 
// function load(event){
//     alert('you loaded')
// }
// window.addEventListener('load', load)


//Alert on last picture
function pic(event){
    alert('Do Not Fall In!!!!')
}
btmPic.addEventListener('click', pic)

// stop propagation
function clickHandler(event) {
    console.log('just clicking!!!!!!!')
    console.log('event target:')
    console.dir(event.target)
  
    console.log('current target:')
    console.dir(event.currentTarget)
    
    event.stopPropagation()// stops the bubblings
    
    event.preventDefault()// on a link to prevent it from navigation or a form to prevent it from reloading the page
  }
  document.addEventListener('click', clickHandler)
  document.body.addEventListener('click', clickHandler)
  window.addEventListener('click', clickHandler)



