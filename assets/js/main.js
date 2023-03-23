document.addEventListener('DOMContentLoaded', () => {
  var hamburger = document.querySelector('.hamburger');
  var mobileNavbar = document.querySelector('.mobile-navbar');
  var nav = document.querySelector('nav');
  var body = document.querySelector('body');
  hamburger ? hamburger.addEventListener('click', () => {
    mobileNavbar.classList.toggle('active')
    nav.classList.toggle('active')
    body.classList.toggle('active')
  }) : null
})