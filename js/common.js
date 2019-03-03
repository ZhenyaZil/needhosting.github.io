$(document).ready(function(){
  $(".logo").animated("slideInLeft");
  $('.menu').animated('slideInRight');
  $(".offer").animated("slideInUp");
  $(".man").animated("pulse");
  $('.server').animated('pulse');
  $(".offer-sale").animated("pulse");
  $('.title').animated('bounceInDown');
  $(".computer").animated("slideInRight");
  $('.static__item').animated('rollIn');
  $(".benefits__img").animated("bounceIn");
  $('.feauters__list li').animated('flipInY');
  $('.prices-plan__cena').animated('zoomIn');
  $('.subscribe__input').animated('fadeInDown');
  $('.subscribe__title').animated('rollIn');
  $('.subscribe__btn').animated('rollIn');
  $('.social-contact').animated('slideInUp');
  $('.dark-box').animated('flipInX');
  $('.women').animated('zoomIn');
  $('#footer').animated('zoomInUp');
  $('.trust__item').animated('shake');
  $('.prices-plan-x').animated('flipInY');
  $('.join__submit').animated('bounceIn');
  $('.title-white').animated('bounceInDown');
  $('.say-what__item__author').animated('fadeInDown');
 
});


$('.next').click(function(){
    var currentImage = $('.say-what__item.curry');
    var currentImageIndex = $('.say-what__item.curry').index();
    var nextImageIndex = currentImageIndex + 1;
    var nextImage = $('.say-what__item').eq(nextImageIndex);

    currentImage.animated("bounceOutDown");
    currentImage.removeClass('curry');

    if(nextImageIndex == ($('.say-what__item:last').index() + 1)){
      $('.say-what__item').eq(0).animated('fadeInDown');
      $('.say-what__item').eq(0).addClass('curry');
    }else{
      nextImage.animated('fadeInDown');
      nextImage.addClass('curry');
    }
    
  });

  $('.prev').click(function(){
    var currentImage = $('.say-what__item.curry');
    var currentImageIndex = $('.say-what__item.curry').index();
    var prevImageIndex = currentImageIndex - 1;
    var prevImage = $('.say-what__item').eq(prevImageIndex);

    currentImage.animated("bounceOutDown");
    currentImage.removeClass('curry');
    prevImage.animated('fadeInDown');
    prevImage.addClass('curry');

  });
