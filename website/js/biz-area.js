$(function () {
  var isStartMotion = true
  var rafId
  var scrollMotion = function () {
    if (!isStartMotion) return
    isStartMotion = false
    rafId = requestAnimationFrame(function () {
      $('.sub_area p, .sub_area figure').each(function () {
        var t = $(this).offset().top
        if (scry > t-winH*0.8) $(this).addClass('active')
        else $(this).removeClass('active')
        })


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