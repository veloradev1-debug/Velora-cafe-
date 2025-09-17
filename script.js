
// script.js - link this file from index.html
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navlinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});


// Close mobile nav on link click (good UX)
document.querySelectorAll('#mainNav a').forEach(a => {
  a.addEventListener('click', () => {
    if (mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      navToggle.classList.remove('open');
    }
  });
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile drawer if open
      if(mobileDrawer.classList.contains('show')){
        mobileDrawer.classList.remove('show');
        hambtn.setAttribute('aria-expanded','false');
      }
    }
  });
});
