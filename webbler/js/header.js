$(function () {
  $('.mbtn').click(function () {
    $(this).toggleClass('active')
    $('.gnb-sm').stop().fadeToggle()
    $('.gnb-video')[0].play()
  })
  $('.top_btn').click(function () {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    })


  var isStartMotion = true
  var rafId
  var scrollMotion = function () {
    if (!isStartMotion) return
    isStartMotion = false
    rafId = requestAnimationFrame(function () {
      //code strart
      $('.section_summary h2').each(function () {
        var t = $(this).offset().top
        if (scry >= t - winh * .8) $(this).addClass('active')
        else $(this).removeClass('active')
      })
      if(scry>=200) $('.top_btn').addClass('active')
      else $('.top_btn').removeClass('active')
      //code end
      isStartMotion = true
    })//requestAnimationFrame

  }//scrollMotion
  scrollMotion()
  $(window).scroll(function () {
    scrollMotion()
  }).resize(function () {
    scrollMotion()
  })
}) //ready