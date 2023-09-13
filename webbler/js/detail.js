$(function () {
  //scroll motion
  var isStartMotion = true
  var rafId
  var scrollMotion = function () {
    if (!isStartMotion) return
    isStartMotion = false
    rafId = requestAnimationFrame(function () {
      //code strart
      var t = $('.detail .textbox').offset().top
      if (scry > t - winh * .9) $('.detail .textbox').addClass('active')
      else $('.detail .textbox').removeClass('active')
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
})
$(function () {

  var url = new URL(location.href)
  var params = new URLSearchParams(url.search)
  var paramId = params.get('id')
  //var dataobj=prjArr.find(v =>{ return v.id==parseInt(paramId)})
  var dataObj = prjArr.find(v => v.id == parseInt(paramId))
  var { id, title, desc, slogun, definition, client, type, scope } = dataObj
  $('.mockup_img').attr('src', `./img/details${id}/mockup.jpg`)
  $('.detail_img').attr('src', `./img/details${id}/detail.jpg`)
  $('.screen_img').attr('src', `./img/details${id}/screen.jpg`)
  $('section.detail .slogun').html(`${slogun}`)
  title.forEach(v => {
    $('.detail_content .section_summary .title').append(`<b><i>${v}</i></b><br>`);
  });
  $('main.detail_content .desc').html(`${desc}`)
  $('section.detail .definition').html(`${definition}`)
  $('section.detail .meta .client').html(`${client}`)
  $('section.detail .meta .type').html(`${type}`)
  $('section.detail .meta .scope').html(`${scope}`)

})