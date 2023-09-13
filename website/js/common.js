$(function () {
  var fnGetWindowInfo = function () {
    window.scry = $(window).scrollTop()//전역변수로 만들기
    window.scrx = $(window).scrollLeft()
    window.winH = $(window).height()
    window.winW = $(window).width()
  }//fnGetWindowInfo
  fnGetWindowInfo()
  $(window).scroll(function () {
    fnGetWindowInfo()
  }).resize(function () {
    fnGetWindowInfo()
  })

});//ready
