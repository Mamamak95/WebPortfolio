$(function () {
  var isStartMotion = true
  var rafId
  var scrollMotion = function () {
    if (!isStartMotion) return
    isStartMotion = false
    rafId=requestAnimationFrame(function () {
	//code strart
      $('section.gallery ul li').each(function(){
        var t=$(this).offset().top
        var h=$(this).innerHeight()
        if(scry>t-winH) $(this).addClass('active')
        else $(this).removeClass('active')
      })
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
});