console.log('Hello World,\nI am Frank Lembemu, the owner of this website(LefTech).');


var block = document.getElementsByClassName('block');
var packages = document.getElementsByClassName('package');

var i;
for (var i = 0; i < block.length; i++) {
  block[i].onclick = function(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('show');
  }
}

var nav = $('nav');
var backTop = $(".btn-back_to_top");

$(window).scroll(function() {
  if ($(document).scrollTop() > 400) {
    backTop.css('visibility', 'visible');
    nav.css('background-color','#52565c');
  }
  else if ($(document).scrollTop() < 400) {
    backTop.css('visibility', 'hidden');
    nav.css('background-color','rgba(14, 14, 13, 0.774)');
  }
});

backTop.click(function() {
  $('html').animate({
    scrollTop: 0
  }, 1000);
  return false;
});