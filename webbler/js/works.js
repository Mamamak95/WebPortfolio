$(function () {
  prjArr.forEach(function (v) {
    let { id, title, slogun } = v;
    title = title.join(" "); //배열을 문자열로 바꿈 <->split
    $(".works_content").append(`
      <figure>

        <a href="./detail.php?id=${id}">
          <div>
            <img src="./img/works/site${id}.jpg" alt>
          </div>
          <figcaption>
            <h2>${title}</h2>
            <p>
            <span>${slogun}</span>
            <span>${slogun}</span>
            <span>${slogun}</span>
            </p>
          </figcaption>
        </a>

      </figure>
    `);
  });

  var isStartMotion = true
  var rafId
  var scrollMotion = function () {
    if (!isStartMotion) return
    isStartMotion = false
    rafId = requestAnimationFrame(function () {
      //code strart
      $('.works_content figure').each(function(){
        var t=$(this).offset().top
        var h=$(this).innerHeight()
        var meta=0+(scry-(t-winh*.5+h*.5))*0.01
        if(meta>17) meta=17
        if(meta<-17) meta=-17
        $(this).find('img').css({'transform':`scale(1.2) translateY(${meta}%)`})//자손까지 검색
      })
      var scrRange=$(document).innerHeight()-winh
      var moveRange=winw-$('.works_bg p').innerWidth()
      var x=(scry/scrRange)*moveRange
      $('.works_bg p').css({'transform':`translateX(${x}px)`})

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


  var cx=0
  var cy=0
  var tx=0
  var ty=0
  
  $(window).mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    tx=e.clientX
    ty=e.clientY
  });
  setInterval(function(){
    cx+=(tx-cx)*.5
    cy+=(ty-cy)*.5
    $('.cursor').css({'top':cy-35,'left':cx-35})
  }, 30);

  $('.works_content figure').mouseenter(function () { 
    $('.cursor').css(({'transform':'scale(1)'}))
  }).mouseleave(function(){
    $('.cursor').css(({'transform':'scale(0) '}))

  })



});
