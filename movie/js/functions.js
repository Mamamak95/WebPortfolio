import { imgPaths } from "./api-data.js";

export const qs = (el) => document.querySelector(el)
export const qsAll = (el) => document.querySelectorAll(el)

export const setSwiper = (el, sec = false, breakpoint = false) => {
  const swiper = new Swiper(el, {


    autoplay: (sec) ? { delay: sec, disableOnInteraction: false } : false,

    loop: true,

    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    pagination: {
      el: '.pagination',
      type: 'bullets',
      clickable: true,
    },

    slidesPerView: 1,
    slidesPerGroup: 1,

    //화면 넓이에 따라 표시 갯수 변환
    breakpoints: (breakpoint) && {
      300: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      900: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
      1500: {
        slidesPerView: 6,
        slidesPerGroup: 6,
      },
    },

  });
}

export let videoResize = () => {
  let ratioW = qs('.video-modal .youtube-ratio').clientWidth
  let ratioH = qs('.video-modal .youtube-ratio').clientHeight
  let videoYoutube = qs('.video-modal iframe')
  videoYoutube.style.width = `${ratioW}px`
  videoYoutube.style.height = `${ratioH}px`
}

export const setSlide = (images) => {
  if (images.length < 2) {
    for(let i=1; i<=4;i++){
      qs('.slide').insertAdjacentHTML('beforeend',`
        <img class="slide-img${i}" src='./img/film${i}.jpg' alt>
      `)
    }
  }
  else {
    images.forEach((imgInfo,i )=> {
      let {file_path}=imgInfo
      let imgPath=`${imgPaths.original}${file_path}`
      qs('.slide').insertAdjacentHTML('beforeend',`
        <img class="slide-img${i+1}" src="${imgPath}" alt>
      `)
    });
  }

  let n=1
setTimeout(() => {
  qs('.slide-img1').classList.add('active')
}, 10);
  setInterval(() => {
    qs(`.slide-img${n}`).classList.remove('active')
    n++
    if(n>qsAll('.slide img').length) n=1
    qs(`.slide-img${n}`).classList.add('active')
  }, 5000);
}

export const sortArray=(arr,sortby,up=true)=>{
 let n= up?1:-1
  arr.sort((a,b)=>{
    if(a[sortby]>b[sortby]) return 1*n
    if(a[sortby]<b[sortby]) return -1*n
    return 0
  })
}

export const showModal=(modal)=>{
  qs(modal).style.display='block'
  document.body.style.overflow='hidden'
}
export const closeModal=(modal=>{
  qs(modal).style.display = 'none'
  document.body.style.overflow='auto'
})

export const setPersonModal=()=>{

  qsAll('.person-modal ul').forEach(ul=>{
    console.log(ul.clientHeight, ul.scrollHeight);
    if(ul.clientHeight<=ul.scrollHeight){
      ul.nextElementSibling.style.display='inline-block'
    }
    else ul.nextElementSibling.style.display='none'
  })
  qsAll('.person-modal .moreBtn').forEach(button=>{
    button.classList.remove('active')
  })
}