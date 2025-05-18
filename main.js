console.log('Hello World,\nI am Frank Lembemu, the owner of this website(LefTech).');


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button
const backToTop = document.querySelector('.btn-back_to_top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

var block = document.getElementsByClassName('block');
var packages = document.getElementsByClassName('package');

for (let i = 0; i < block.length; i++) {
  block[i].onclick = function(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('show');
  }
}


var backTop = $(".btn-back_to_top");

$(window).scroll(function() {
  if ($(document).scrollTop() > 400) {
    backTop.css('visibility', 'visible');
  }
  else if ($(document).scrollTop() < 400) {
    backTop.css('visibility', 'hidden');
  }
});

backTop.click(function() {
  $('html').animate({
    scrollTop: 0
  }, 1000);
  return false;
});
