// // Toogle 

// console.log("222")

const headerElement = document.querySelector('header');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
        headerElement.classList.add('scrolled'); 
    } else {
        headerElement.classList.remove('scrolled'); 
    }
});

let toogle = document.querySelector('.toogle');
const cancel = document.querySelector('#cancel');
const mobileHeader = document.querySelector('.mobileShow');
toogle.addEventListener('click', (e) => {
    mobileHeader.classList.toggle('show'); 
})
cancel.addEventListener('click', (e) => {
    mobileHeader.classList.toggle('show'); 
})

