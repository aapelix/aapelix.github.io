let menutoggle = document.querySelector('.toggle');
let main = document.querySelector('.main');
let mobilenavbartop = document.querySelector('.mobilenavbartop');
let mobilemenu = document.querySelector('.mobilemenu');

let searchbox = document.querySelector('.search-box');

function toggleMenu() {
    menutoggle.classList.toggle('active');
    document.body.classList.toggle('active');
    main.classList.toggle('active');
    mobilemenu.classList.toggle('active');
}