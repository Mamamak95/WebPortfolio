$(function () {

  $('.rolling').clone().appendTo('.rolling_container')//컨테이너 안 뒤쪽에 껴넣음/preappendto는 앞쪽  
  //  var clone=document.querySelector('.rolling').cloneNode(true)
  // document.querySelector('.rolling_container').append(clone)
  //clonNode(!!) !!=>자손까지 카피할것인지

//swiper-------------------------------------
  const swiper = new Swiper('.home_visual', {
    //autoplay:false,
    autoplay: { delay: 5000,},//5초마다 넘어감
    loop: true, //반복
    navigation: { //양쪽 화살표버튼
      nextEl: '.next',
      prevEl: '.prev',
    },
    pagination: { //
      el: '.indicator',
      type: 'bullets',
      clickable: true,
    }, 

    slidesPerView: 1, //
    slidesPerGroup : 1,

  });



  //scrollmotion------------------------------
  var isStartMotion = true
  var rafId
  var scrollMotion = function () {
    if (!isStartMotion) return
    isStartMotion = false
    rafId = requestAnimationFrame(function () {
      $('.feature figure').each(function () {
        var objT = $(this).offset().top
        var objChildT = $('.feature figure div').offset().top
        var objChildH = $('.feature figure div').innerHeight()
        var meta = 0 + (scry - (objChildT - winH * 0.5 + objChildH * .5)) * .1
        if (meta > 10) meta = 10
        if (meta < -10) meta = -10
        $('.feature figure div img').css({ 'transform': `scale(1.3) translateY(${meta}%)` })
        if (scry > objT - winH * .8) {
          $(this).addClass('active')
        }
        else {
          $(this).removeClass('active')
        }
      });

      var t=$('.latest .bottom').offset().top
      if(scry>=t-winH*.8) $('.latest .bottom').addClass('active')
      else $('.latest .bottom').removeClass('active')

      isStartMotion = true
    })//requestAnimationFrame
  }//scrollMotion
  scrollMotion()
  $(window).scroll(function () {
    scrollMotion()
  }).resize(function () {
    scrollMotion()
  })









});