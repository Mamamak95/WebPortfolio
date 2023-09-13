$(function(){

  var isStartMotion = true // 모션 실행해도 되니?
  var rafId

  var scrollMotion = function () {
    if(!isStartMotion) return
    isStartMotion = false
    
    rafId = requestAnimationFrame(function(){
      //code start
      $('.location_section > *').each(function(){
      
        var t = $(this).offset().top
        if(scry >= t - winH * .8){
          $(this).addClass('active')
        }else{
          $(this).removeClass('active')
        }
      }) //each
      //code end
      isStartMotion = true
    }) //requestAnimationFrame
  } //scrollMotion
  scrollMotion()
  $(window).scroll(function(){
    scrollMotion()
  }).resize(function(){
    scrollMotion()
  })
})