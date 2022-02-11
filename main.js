const header = document.querySelector('.main-header');
const sideNav = document.querySelector('#side-nav');
const menuBar = document.querySelector('#menu-bar');
const navContainer = document.querySelector('.nav-container');
const signUp = document.querySelector('.sign-up');
const modalWrapper = document.querySelector('.modal-wrapper');
const profileWrapper = document.querySelector('.profile-wrapper');
const headr = document.getElementById('header');
const navbar = document.querySelector('.navbar');
const serviceItems = document.querySelectorAll('.services-item')
const skillItems = document.querySelectorAll('.skills-item')
const projectItems = document.querySelectorAll('.project-item')

// Sliding navbar
let scrolled = false;

window.onscroll = () => {
    if(window.pageYOffset > 100) {
        headr.classList.remove('top');
        navbar.style.box = " "
        if(!scrolled) {
            headr.style.transform = 'translateY(-70px)';
        }

        setTimeout(() => {
            headr.style.transform = 'translateY(0px)';
            scrolled = true;
        }, 500)
    } else {
            headr.classList.add('top');
            scrolled = false;
    }
}

signUp.addEventListener('click', () => {
    modalWrapper.style.display = 'flex';
})

window.addEventListener('click', e => e.target == modalWrapper ? modalWrapper.style.display = 'none' : false)

// Check if in viewport
const isInViewport = (item, offset = 90) => {
        const rectTop = item.getBoundingClientRect().top

        return (
            rectTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
        );
   
}


const scrollAnimation = () => {
    
    serviceItems.forEach((item,arr) => {
        if(isInViewport(item)) {
            item.classList.add('show')
        } 
    })
}
    
// Events
window.addEventListener('load', scrollAnimation);
window.addEventListener('resize', scrollAnimation);
window.addEventListener('scroll', scrollAnimation);


// Check if in viewport
const isInViewport2 = (item, offset = 1.30) => {
        const rectTop = item.getBoundingClientRect().top

        return (
            rectTop <= ((window.innerHeight || document.documentElement.clientHeight) / offset)
        );
   
}


const scrollAnimation2 = () => {
    
    skillItems.forEach(item => {
        if(isInViewport2(item)) {
            item.classList.add('show')
        } 
    })
}
    
// Events
window.addEventListener('load', scrollAnimation2);
window.addEventListener('resize', scrollAnimation2);
window.addEventListener('scroll', scrollAnimation2);

// Check if in viewport
const isInViewport3 = (item, offset = 1.2) => {
        const rectTop = item.getBoundingClientRect().top

        return (
            rectTop <= ((window.innerHeight || document.documentElement.clientHeight) / offset)
        );
   
}


const scrollAnimation3 = () => {
    
    projectItems.forEach(item => {
        if(isInViewport3(item)) {
            item.classList.add('show')
        } 
    })
}
    
// Events
window.addEventListener('load', scrollAnimation3);
window.addEventListener('resize', scrollAnimation3);
window.addEventListener('scroll', scrollAnimation3);
