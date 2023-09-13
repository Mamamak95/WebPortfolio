$(function () {
  var isStartMotion = true
  var rafId
  var scrollMotion = function () {
    if (!isStartMotion) return
    isStartMotion = false
    rafId = requestAnimationFrame(function () {
      $('.greet_section>*').each(function () {

        scry > $(this).offset().top - winH + $(this).height() * 0.5 ? $(this).addClass('active') : 0
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
});//ready