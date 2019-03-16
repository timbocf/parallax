$(document).ready(function(){
$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.hero').css('top',-(scrolled*0.0315)+'rem');
  $('.hero .caption').css('top',-(scrolled*-0.005)+'rem');
  $('.hero .caption').css('opacity',1-(scrolled*.00175));
};
});