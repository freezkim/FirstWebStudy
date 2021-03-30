const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //Logic...
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});


searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEL = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function ()
{
  console.log(window.scrollY);
  if(window.scrollY > 500)
  {
    //todo: hidden badge
    //gsap.to(element, duration, option);
    gsap.to(badgeEL, .3, {
      opacity: 0, 
      display: 'none'
    });
  }
  else
  {
    //todo: show badge.
    gsap.to(badgeEL, .3, {
      opacity: 1,     
      display: 'block' 
    });
  }
}, 300));

