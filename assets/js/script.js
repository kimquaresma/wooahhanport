
$(function(){
  let lastScroll = 0;
  $(window).scroll(function(){
    current = $(this).scrollTop()
    
    if(current > lastScroll){
      $('#header').addClass('hide')
    } else {
      $('#header').removeClass('hide')
    }
    lastScroll = current;
  })
})



$('#gnb .gnb-item').hover(function(){
  
  $('#gnb .sub-list li:first-child').addClass('on').siblings().removeClass('on');

  $('#header').css("--barHeight","64px")
  $(this).find('.sub-list').addClass('on')
},function(){
  $('#header').css("--barHeight",0)
  $(this).find('.sub-list').removeClass('on')
})

$('#gnb .sub-list li:first-child').addClass('on');

$('#gnb .sub-list li').hover(function(){
  $(this).addClass('on').siblings().removeClass('on')
})

$('.btn-menu').click(function(){
  $('.header .side-nav').addClass('on')
  $('body').addClass('side-nav-open');
})
$('.side-nav .close').click(function(){
  $('.header .side-nav').removeClass('on')
  $('body').removeClass('side-nav-open');
})

$('.side-main .title').click(function(e){
  e.preventDefault();
    if($(this).hasClass('on')){
      $(this).removeClass('on').siblings('.sub').stop().slideUp()
    } else {
      $('.title').removeClass('on').siblings('.sub').stop().slideUp()
      $(this).addClass('on').siblings('.sub').stop().slideDown();
    } 

})


const topSwiper = new Swiper('.sc-visual .swiper',{
  loop:true,
  pagination: {
    el: ".pagination",
  },
})

// var animation1 = bodymovin.loadAnimation({
//   container: $('#lottie1')[0], // Required
//   path: 'https://woowahan-cdn.woowahan.com/new_resources/image/banner/20a5b7cb12e6459eb4dc2290bbc8423a.json', // URL 직접 입력
//   //path: 'data.json', // 실제 사용 폴더 지정 ex) data.json
//   renderer: 'svg', // Required
//   // loop: true, // Optional
//   autoplay: false // Optional
// });
// animation1.play()

const talkSwiper = new Swiper('.talk-swiper .swiper',{
  speed:4000,
  loop:true,
  slidesPerView:"auto",
  freeMode:true,
  // autoplay:{
  //   delay:0,
  //   disableOnInteraction:false
  // }
})
// $('.talk-swiper').hover(function(){
//   talkSwiper.autoplay.stop();

// },function(){
//   talkSwiper.autoplay.start();

// })



$('.sc-vision .player-btn').click(function(){
  videoEl = $('.sc-vision video')[0];
  $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
    videoEl.pause();
  } else {
    videoEl.currentTime=0;
    videoEl.play();
  }
  // 만약에 클레스가 active 있다면
  // 비디오정지

  // 그렇지않다면
  // 비디오재생
})


// $('.footer-family .footer-sitemap').click(function(){
//   // if($(this).hasClass('on')){
//   //   $(this).siblings('.footer-content').stop().slideUp();
//   // } else {
//   //   $(this).siblings('.footer-content').stop().slideDown();
//   // }
// })
$('.footer-family .footer-sitemap').click(function(){
    $('.footer-family .footer-content').toggleClass('on');
})

$(document).click(function(e){
  // console.log(e.target);
  if ($('.footer-family').has(e.target).length === 0) {
    $('.footer-family .footer-content').removeClass('on');
  }

})