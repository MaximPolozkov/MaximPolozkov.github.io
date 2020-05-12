$(function() {
var slider = $('.slider'),
sliderContent = slider.html(),
slideWidth = $('.wrapper').outerWidth(),
slideCount = $('.slider img').length,
prv_b = $('.right'),
nxt_b = $('.left'),
sliderInterval = 5000,
animateTime = 1000,
course = 1,
margin = - slideWidth;
$('.slider img:last').clone().prependTo('.slider');$('.slider img').eq(1).clone().appendTo('.slider');$('.slider').css('margin-left',-slideWidth);function nxt_bSlide(){interval=window.setInterval(animate,sliderInterval)}function animate(){if(margin==-slideCount*slideWidth-slideWidth){slider.css({'marginLeft':-slideWidth});margin=-slideWidth*2}else if(margin==0&&course==-1){slider.css({'marginLeft':-slideWidth*slideCount});margin=-slideWidth*slideCount+slideWidth}else{margin=margin-slideWidth*(course)}slider.animate({'marginLeft':margin},animateTime)}function sliderStop(){window.clearInterval(interval)}prv_b.click(function(){if(slider.is(':animated')){return false}var course2=course;course=-1;animate();course=course2});nxt_b.click(function(){if(slider.is(':animated')){return false}var course2=course;course=1;animate();course=course2});slider.add(nxt_b).add(prv_b).hover(function(){sliderStop()},nxt_bSlide);nxt_bSlide()});



