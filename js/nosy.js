// CONST DECLARATION
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const sidepanel = document.querySelector('.sidepanel');
const navbarButton = document.querySelector('.navbar #sidepanel');
const alertClose = document.querySelectorAll('.alert #close');

var alertCloseBtn;

for(alertCloseBtn = 0; alertCloseBtn < alertClose.length; alertCloseBtn++){
    alertClose[alertCloseBtn].addEventListener('click', function(){
        this.parentElement.classList.add('close');
    });
}

let navStat = false;
navbarButton.addEventListener('click', () => {
    if(!navStat){
        sidepanel.classList.add('open');
        navbarButton.classList.add('open');
        navStat = true;
    } else {
        sidepanel.classList.remove('open');
        navbarButton.classList.remove('open');
        navStat = false;
    }
});

// ONSCROLL FUNCTION
window.onscroll = function() {navbarScroll()};

function navbarScroll(){
    if(document.body.scrollTop > 75 || document.documentElement.scrollTop > 75){
        navbar.classList.add('scroll');
    }else{
        navbar.classList.remove('scroll');
    }
}




// NAVBAR
// const navBar = document.querySelector('.navbar #button');
// const leftPan = document.querySelector('.leftpan');
// const leftBlank = document.querySelector('.leftpan #blank_spot');
// const mainLeftPan = document.querySelector('.leftpan .main');
// const navBarPane = document.querySelector('.navbar');
// const article = document.querySelector('.article-header');

// let navStat = false;
// navBar.addEventListener('click', () => {
//     if(!navStat){
//         leftPan.classList.add('active','show');
//         navStat = true;
//     } else {
//         leftPan.classList.remove('active','show');
//         navStat = false;
//     }
// });

// leftBlank.addEventListener('click', () => {
//     if(navStat) {
//         leftPan.classList.remove('active');
//         setTimeout(function(){
//             leftPan.classList.remove('show');
//         }, 300);
//         navStat = false;
//     }
// });

// window.onscroll = function() {navbarScroll(), articleScroll()};
// function navbarScroll(){
//     if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
//         navBarPane.classList.add('scroll');
//     }else{
//         navBarPane.classList.remove('scroll');
//     }
// }
// function articleScroll(){
//     if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
//         article.classList.add('mini');
//     }else{
//         article.classList.remove('mini');
//     }
// }
