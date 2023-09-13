$(function () {
  var rafId
  var rafId2
  var isMotionStart = true
  var isQuickStart = true

  $('nav.gnb > ul > li').mouseenter(function () {
    $(this).children('ul').stop().slideDown()
  })
  $('nav.gnb > ul > li').mouseleave(function () {
    $(this).children('ul').stop().slideUp()
  })
  var fnHeaderScrollMotion = function () {
    if (!isMotionStart) return
    isMotionStart = false
    rafId = requestAnimationFrame(function () {
    
      if (scry >= 40) $('header').addClass('active')
      else $('header').removeClass('active')
      isMotionStart = true
    })
  }//fnHeaderScrollMotion

  var fnQuick = function () {
    if (!isQuickStart) return
    isQuickStart = false
    rafId2 = requestAnimationFrame(function () {
      var objtop=$(`nav.quick`).offset().top
      var objH=$(`nav.quick`).height()
      $('nav.quick').css({'top': scry+winH*0.5-objH*0.5})
      if(scry>300) $('nav.quick').addClass('active')
      else $('nav.quick').removeClass('active')

      isQuickStart = true
    })
  }//fnQuick
  $('nav.quick button.top').click(function (e) { 
    window.scrollTo({
      top:0, behavior :'smooth'
    })
  });





  fnHeaderScrollMotion()
  fnQuick()
  $(window).scroll(function () {
    fnHeaderScrollMotion()
    fnQuick()
  }).resize(function () {
    fnHeaderScrollMotion()
    fnQuick()
  })


})//ready
