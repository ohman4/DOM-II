// Your code goes here
const get = (selector) => {
    return document.querySelector(selector);
}

//Variables
const signUp1 = get('body > div > section.content-pick > div:nth-child(1) > div')
const signUp2 = get('body > div > section.content-pick > div:nth-child(1) > div')
const signUp3 = get('body > div > section.content-pick > div:nth-child(3) > div')
const logoTop = get('body > header > div > h1')
const welcomeH1 = get('body > div > header > h2')
const heroImg = get('body > div > header > img')




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




