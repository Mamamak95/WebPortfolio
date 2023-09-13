$(function () {
  var isStartMotion = true
  var rafId
  var scrollMotion = function () {
    if (!isStartMotion) return
    isStartMotion = false
    rafId=requestAnimationFrame(function () {

      $('section.biz_intro>p').each(function(){
        var t=$(this).offset().top
        if(scry>t-winH*0.9) $(this).addClass('active')
        else $(this).removeClass('active')
      })
      isStartMotion = true
    })//requestAnimationFrame
    $('.biz_intro figure').each(function(){
      var t=$(this).offset().top
      var h=$(this).innerHeight()
      var meta=1+Math.abs(scry-(t-winH*0.5+h*0.5))*-0.0002
      if(meta<0) meta=0
      $(this).css({
        'transform':`scale(${meta})`,
        'opacity':meta
      })

    })



  }//scrollMotion
  scrollMotion()
  $(window).scroll(function () {
    scrollMotion()

  }).resize(function () {
    scrollMotion()

  })
});