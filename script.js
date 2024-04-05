const btnConnect = document.getElementById('btn-connect')
const btnConnect2 = document.getElementById('btn-connect2')
const btnConnect3 = document.getElementById('btn-connect3')
const btnConnect4 = document.getElementById('btn-connect4')
const sliderLeftBtn = document.querySelector('.slider-btn.btn-left')
const sliderRightBtn = document.querySelector('.slider-btn.btn-right')
const slides = document.querySelectorAll('.slide')
const openMenuBtn = document.querySelector('.open-btn')
const closeMenuBtn = document.querySelector('.close-btn')
const mobileMenu = document.querySelector('.mobile-menu')
const navMobile = document.querySelector('.nav-mobile')

/* Fonctions pour modifier le texte des boutons pour "Register now" en passant la souris dessus */
btnConnect.addEventListener('mouseover', (e)=> {
    btnConnect.innerText = 'REGISTER NOW'
})
btnConnect.addEventListener('mouseleave', (e)=> {
    btnConnect.innerText = 'LOREM IPSUM'
})

btnConnect2.addEventListener('mouseover', (e)=> {
    btnConnect2.innerText = 'REGISTER NOW'
})
btnConnect2.addEventListener('mouseleave', (e)=> {
    btnConnect2.innerText = 'LOREM IPSUM'
})

btnConnect3.addEventListener('mouseover', (e)=> {
    btnConnect3.innerText = 'REGISTER NOW'
})
btnConnect3.addEventListener('mouseleave', (e)=> {
    btnConnect3.innerText = 'LOREM IPSUM'
})

btnConnect4.addEventListener('mouseover', (e)=> {
    btnConnect4.innerText = 'REGISTER NOW'
})
btnConnect4.addEventListener('mouseleave', (e)=> {
    btnConnect4.innerText = 'LOREM IPSUM'
})

/* Fonctions pour bouger les images dans le slider */

sliderLeftBtn.addEventListener('click', ()=>{
    if(window.screen.width <= 1700) {
        slides.forEach(slide => {
            slide.classList.remove('active')
        }) 
    } else {
        slides.forEach(slide => {
            slide.classList.add('active')
        }) 
    }
})

sliderRightBtn.addEventListener('click', ()=>{
    if(window.screen.width <= 1700) {
        slides.forEach(slide => {
            slide.classList.add('active')
        }) 
    } else {
        slides.forEach(slide => {
            slide.classList.remove('active')
        }) 
    }
})

/* Fonctions pour ouvrir & fermer le menu en navigation mobile */

openMenuBtn.addEventListener('click', ()=>{
    navMobile.classList.add('open')
})

closeMenuBtn.addEventListener('click', ()=>{
    navMobile.classList.remove('open')
})

/* Fonctions pour ajuster les plages des recherches dans les filtres de recherche */

function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#EA516F', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}
    
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#EA516F', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
    }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#EA516F', toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#EA516F', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}


const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#C6C6C6', '#EA516F', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);




const fromSlider2 = document.querySelector('#fromSlider2');
const toSlider2 = document.querySelector('#toSlider2');
const fromInput2 = document.querySelector('#fromInput2');
const toInput2 = document.querySelector('#toInput2');
fillSlider(fromSlider2, toSlider2, '#C6C6C6', '#EA516F', toSlider2);
setToggleAccessible(toSlider2);

fromSlider2.oninput = () => controlFromSlider(fromSlider2, toSlider2, fromInput2);
toSlider2.oninput = () => controlToSlider(fromSlider2, toSlider2, toInput2);
fromInput2.oninput = () => controlFromInput(fromSlider2, fromInput2, toInput2, toSlider2);
toInput2.oninput = () => controlToInput(toSlider2, fromInput2, toInput2, toSlider2);


fromInput2.addEventListener('input', function() {
    this.style.width = this.value.length + 'ch'
})
toInput2.addEventListener('input', function() {
    this.style.width = this.value.length + 'ch'
})



const fromSlider3 = document.querySelector('#fromSlider3');
const toSlider3 = document.querySelector('#toSlider3');
const fromInput3 = document.querySelector('#fromInput3');
const toInput3 = document.querySelector('#toInput3');
fillSlider(fromSlider3, toSlider3, '#C6C6C6', '#EA516F', toSlider3);
setToggleAccessible(toSlider3);

fromSlider3.oninput = () => controlFromSlider(fromSlider3, toSlider3, fromInput3);
toSlider3.oninput = () => controlToSlider(fromSlider3, toSlider3, toInput3);
fromInput3.oninput = () => controlFromInput(fromSlider3, fromInput3, toInput3, toSlider3);
toInput3.oninput = () => controlToInput(toSlider3, fromInput3, toInput3, toSlider3);


/* Fonctions pour le compteur des chiffres des statistiques */

const counters = document.querySelectorAll('.counter');

let counted = false;
window.addEventListener('scroll', (e) => {
    if ((document.documentElement.scrollTop + window.innerHeight) > counters[0].offsetTop) {
        countingStats()
    }
})

function countingStats() {

    if(counted == false ) {
        console.log(document.documentElement.scrollTop, counters[0].offsetTop)
        counted = true
        counters.forEach(counter => {

                counter.innerText = '0'
        
                const updateCounter = () => {
                    const target = +counter.getAttribute('data-target');
                    const c = +counter.innerText;
            
                    const increment = target / 200;
            
                    if(c < target) {
                        counter.innerText = `${Math.ceil(c + increment)}`
                        setTimeout(updateCounter, 1)
                    } else {
                        counter.innerText = target;
                    }
            
                }
                updateCounter();
            }

        )
    }

}
