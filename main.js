const header = document.querySelector('.main-header');
const sideNav = document.querySelector('#side-nav');
const menuBar = document.querySelector('#menu-bar');
const navContainer = document.querySelector('.nav-container');
const signUp = document.querySelector('.sign-up');
const modalWrapper = document.querySelector('.modal-wrapper');
const profileWrapper = document.querySelector('.profile-wrapper');
const headr = document.getElementById('header');

let scrolled = false;

window.onscroll = () => {
    if(window.pageYOffset > 100) {
        if(!scrolled) {
            headr.style.transform = 'translateY(-70px)'
        }

        setTimeout(() => {
            headr.style.transform = 'translateY(0px)';
            headr.classList.add('top')
            scrolled = true;
        }, 500)
    }else {
        headr.classList.remove('top');
        scrolled = false;
    }
}

// profileWrapper.addEventListener('click', () => {
//     profileWrapper.classList.toggle('show-back')
// })

header.addEventListener('click', () => {
    // document.body.classList.toggle('show-nav');
    sideNav.classList.add('show-nav');
    navContainer.classList.add('nav-background')
})

menuBar.addEventListener('click', () => {
    // document.body.classList.toggle('show-nav');
    sideNav.classList.toggle('show-nav');
    navContainer.classList.add('nav-background')
})

window.addEventListener('click', (e) => {
    // if(e.target == navContainer) {
    //     document.body.classList.remove('show-nav')
    // }
                  
    e.target == navContainer ? sideNav.classList.remove('show-nav') & navContainer.classList.remove('nav-background') : false;
})

signUp.addEventListener('click', () => {
    modalWrapper.style.display = 'flex';
})

window.addEventListener('click', e => e.target == modalWrapper ? modalWrapper.style.display = 'none' : false)