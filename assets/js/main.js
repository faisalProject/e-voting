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

  var coreVissionText = document.querySelector('.core-vision-text');
  var coreVissionDescription = document.querySelector('.core-vision-description')
  var coreMissionText = document.querySelector('.core-mission-text')
  var coreMissionDescription = document.querySelector('.core-mission-description')

  var visionText = document.getElementsByClassName('vision-text');
  var visionDescription = document.getElementsByClassName('vision-description')
  var missionText = document.getElementsByClassName('mission-text')
  var missionDescription = document.getElementsByClassName('mission-description')
  var cards = document.querySelectorAll('.card');
  cards ? cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      coreVissionText.innerHTML = visionText[i].innerHTML
      coreVissionDescription.innerHTML = visionDescription[i].innerHTML
      coreMissionText.innerHTML = missionText[i].innerHTML
      coreMissionDescription.innerHTML = missionDescription[i].innerHTML
    })
  }): null

  var more = document.querySelector('.more')
  more ? more.addEventListener('click', () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      html: '<p class="paragraf-text">You must login first!</p>',
      footer: '<a class="footer-text" href="signin.html">Sign in</a>'
    })
  }): null

  var show = document.querySelectorAll('.show')
  var inputType = document.querySelectorAll('.input-type')
  show ? show.forEach((s, i) => {
    s.addEventListener('click', () => {
      s.classList.toggle('active')
      inputType[i].type === 'password' ? inputType[i].type = 'text' : inputType[i].type = 'password'
    })
  }): null
})