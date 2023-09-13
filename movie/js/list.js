import { imgPaths, ko, options } from "./api-data.js";
import { displayMovies, getMovies } from "./api-functions.js";
import { qs, qsAll } from "./functions.js";

let url = new URL(location.href)
let params = new URLSearchParams(url.search)
let list = params.get('list')
let page = parseInt(params.get('page'))
let option = options[list]
if (list == 'playing') {
  qs('.list-title').innerText = '현재 상영작'
} else if (list == 'popular') {
  qs('.list-title').innerText = '인기 영화'
} else if (list == 'upcoming') {
  qs('.list-title').innerText = '최신/개봉 예정작'
}
let movieData = await getMovies(option, ko, page)
let movies = movieData.results
let totalpages = parseInt(movieData.total_pages)
console.log(movies);

let images=movies.slice(0,5).map(v=>{
  return `${imgPaths.original}${v.backdrop_path}`
})

const setListSlide=(images)=>{
  images.forEach((imgInfo,i )=> {
    let imgPath=imgInfo
    qs('.slide').insertAdjacentHTML('beforeend',`
      <img class="slide-img${i+1}" src="${imgPath}" alt>
    `)
  });
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
setListSlide(images)

if (totalpages > 500) totalpages = 500
let startPage = parseInt((page - 1) / 5) * 5 + 1
let endPage = startPage + 4
endPage = endPage >= totalpages ? totalpages : endPage
console.log(totalpages);
for (let i = startPage; i <= endPage; i++) {
  let now=''
  if(page==i) now='active' 
  qs('nav.paging').insertAdjacentHTML('beforeend', `
    <a class="${now}" href='./list.php?list=${list}&page=${i}'>
  ${i}
    </a>
  `)
}

if (startPage !== 1) {
  qs('.paging').insertAdjacentHTML('afterbegin', `
  <a href="./list.php?list=${list}&page=${endPage-5}">
  <i class="fa-solid fa-caret-left"></i>
    </a>
  `)
}
if (endPage != totalpages) {
  qs('.paging').insertAdjacentHTML('beforeend', `
  <a href="./list.php?list=${list}&page=${startPage+5}">
  <i class="fa-solid fa-caret-right"></i>
    </a>
  `)
}

displayMovies(movies, '.grid-container')