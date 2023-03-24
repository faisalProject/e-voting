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

  var cardWrapper = [...document.querySelectorAll('.card-wrapper')];
  var prevBtn = [...document.querySelectorAll('.prev-btn')];
  var nextBtn = [...document.querySelectorAll('.next-btn')];
  cardWrapper ? cardWrapper.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn ? nextBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
    }): null

    prevBtn ? prevBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth
    }): null
  }): null

  var pagesScroll = document.querySelectorAll('.page-scroll');
    pagesScroll ? pagesScroll.forEach(scroll => {
        scroll.addEventListener('click', (e) => {
            var hrefElement = scroll.getAttribute('href');
            var destinationElements = document.querySelector(hrefElement);
    
            var offset = destinationElements.offsetTop - 50;
            document.querySelector('html, body').scrollTop = offset;
            e.preventDefault();
        });
    }): null;
})