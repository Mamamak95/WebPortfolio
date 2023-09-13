$(function () {
  //웹브라우저 주소를 가져오거나 바꾸는 바닐라문법
  //location.href='https://www.naver.com' 현재주소를 해당주소로 바꿈

  var url = location.href
  var menu
  var page
  

  if (url.includes('greet.php')) {
    menu = 1
    page = 1
  } else if (url.includes('location.php')) {
    menu = 1
    page = 2
  }
  else if (url.includes('biz-intro.php')) {
    menu = 2
    page = 1
  }
  else if (url.includes('biz-area.php')) {
    menu = 2
    page = 2
  }
  else if (url.includes('gallery.php')) {
    menu = 3
    page = 1
  }
  else if (url.includes('online.php')) {
    menu = 4
    page = 1
  }
  else if (url.includes('notice.php')) {
    menu = 5
    page = 1
  }
  else if (url.includes('board.php')) {
    menu = 5
    page = 2
  }
  else if (url.includes('faq.php')) {
    menu = 5
    page = 3
  }

  $(`.snb .menu${menu}`).show()
  $('main.sub_content ul.breadcrumb li:nth-child(2)').text($(`.gnb .menu${menu} h6`).text())
  $('main.sub_content ul.breadcrumb li:last-child').text($(`.gnb .menu${menu}_${page}`).text())
  $(`section.sub_visual figure.sub_visual${menu}`).css({'display':'flex'})
  /* display none에서 바로 나타자마자 크기가 변하면 나타나지 않는다 */
  setTimeout(() => {
    $(`section.sub_visual figure.sub_visual${menu}`).addClass('active')
  }, 1);
  $(`.snb .menu${menu}_${page}`).addClass('active')
});//ready