import { genreList } from "./api-data.js"
import { controller, displayMovies, searchByGenres, searchByKeyword } from "./api-functions.js"
import { qs, qsAll, setSlide } from "./functions.js"

setSlide([])
let page
let timeout
let genreNums = []
let totalPages
let isPending = true
/////////////////////////

const setDatalist = () => {
  if (!JSON.parse(localStorage.getItem('keywordsStorage'))) return false
  let keywords = JSON.parse(localStorage.getItem('keywordsStorage'))
  keywords.forEach(keyword => {
    qs('#keyword-list').insertAdjacentHTML('beforeend', `
    <option value="${keyword}">${keyword}</option>
  `)
  });
}
setDatalist()
//////////////////////////

qs('.search-input').addEventListener('input', e => {
  page = 1
  isPending = true
  qsAll('.genre-btn').forEach(btn => {
    btn.classList.remove('active')
  })
  clearTimeout(timeout)
  if (e.target.value == '') {
    qs('.grid-container').innerHTML = ''
    return
  }
  timeout = setTimeout(async () => {
    controller.abort()
    let movieData = await searchByKeyword(e.target.value)
    let data = movieData.results
    qs('.search-result-section .grid-container').innerHTML = ''
    displayMovies(data, '.search-result-section .grid-container')
    let keywords = localStorage.getItem('keywordsStorage') ? JSON.parse(localStorage.getItem('keywordsStorage')) : []

    if (data.length === 0 || keywords.includes(e.target.value)) return
    keywords.unshift(e.target.value)
    keywords = keywords.slice(0, 10)
    qs('#keyword-list').innerHTML = ''
    keywords.forEach(keyword => {
      qs('#keyword-list').insertAdjacentHTML('beforeend', `
      <option value="${keyword}">${keyword}</option>
    `)
    });
    localStorage.setItem('keywordsStorage', JSON.stringify(keywords))

  }, 1000);
})
qs('.search-form').addEventListener('submit', e => {
  e.preventDefault()
})
qs('.delete-btn').addEventListener('click', e => {
  var check = confirm('검색기록을 지우겠습니까?')
  if (!check) return
  localStorage.removeItem('keywordsStorage')
  qs('#keyword-list').innerHTML = ''
})

//////////////////////////////////////////////
const setGenreBtns = () => {
  for (let genreNum in genreList) {
    qs('.genre-btns').insertAdjacentHTML('beforeend', `
    <button class="genre-btn" value='${genreNum}'>
      ${genreList[genreNum]}
    </button>
    `)
  }
}

const genreBtnsHandler = () => {
  qsAll('.genre-btn').forEach(btn => {
    btn.addEventListener('click', async e => {
      isPending = true
      page = 1
      qs('.search-input').value = ''
      e.target.classList.toggle('active')

      let n = genreNums.indexOf(e.target.value)
      if (n == -1) genreNums.push(e.target.value)
      else { genreNums.splice(n, n + 1) }
      clearTimeout(timeout)
      if (genreNums.length == 0) {
        qs('.grid-container').innerHTML = ''
        return
      }
      timeout = setTimeout(async () => {
        qs('.grid-container').innerHTML = ''
        controller.abort()

        let moviedata = await searchByGenres(genreNums.join(','))
        totalPages = moviedata.total_pages
        let movies = moviedata.results
        displayMovies(movies, '.grid-container')
        isPending = false
      }, 500);
    })
  })
}

window.addEventListener('scroll', e => {

})

setGenreBtns()
genreBtnsHandler()

let observer = new IntersectionObserver(async ([entry]) => {
  if (entry.intersectionRatio > .1 && isPending == false) {
    isPending = true
    page++
    if (totalPages < page || page > 10) return
    let moviedata = await searchByGenres(genreNums.join(','), page)
    let movies = moviedata.results
    displayMovies(movies, '.grid-container')
    isPending = false
  }
})
observer.observe(qs('.trigger'))