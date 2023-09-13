import { baseUrl, api_key, ko, en, options, imgPaths, gradeColors, genreList } from "./api-data.js";
import { qs, qsAll, setPersonModal, showModal, sortArray, videoResize } from "./functions.js";

export const getMovies = (option, lang = ko , page=1) => {
  return new Promise(async resolve => {
    let result = await fetch(`${baseUrl}${option}${api_key}${lang}&page=${page}`)
    let data = await result.json()
    resolve(data)
  })//promise  
}//getMovies

export const getMovie = (movieId, lang = ko) => {
  return new Promise(async resolve => {
    let result = await fetch(`${baseUrl}/movie/${movieId}${api_key}${lang}&include_adult=false`)
    let data = await result.json()
    resolve(data)
  })//promise
}//getMovie

export const getVideos = (movieId, lang = ko) => {
  return new Promise(async resolve => {
    let result = await fetch(`${baseUrl}/movie/${movieId}/videos${api_key}${lang}&include_adult=false`)
    let data = await result.json()
    resolve(data)
  })//promise
}//getVideos

export const getImages = (movieId) => {
  return new Promise(async resolve => {
    let result = await fetch(`${baseUrl}/movie/${movieId}/images${api_key}&include_adult=false`)
    let data = await result.json()
    resolve(data)
  })//promise
}//getImages

export const getSimilarMovies = (movieId, lang = ko) => {
  return new Promise(async resolve => {
    let result = await fetch(`${baseUrl}/movie/${movieId}/similar${api_key}${lang}&include_adult=false`)
    let data = await result.json()
    resolve(data)
  })//promise
}//getSimilarMovies

export const getCredits = (movieId, lang = ko) => {
  return new Promise(async resolve => {
    const result = await fetch(`${baseUrl}/movie/${movieId}/credits${api_key}${lang}&include_adult=false`)
    const data = await result.json()
    resolve(data)
  })//Promise
}//getCredits

export const displayMovies = (data, container, gridClassName = '') => {
  if (data.length === 0) {
    qs(container).innerHTML = '<p class="no-data">관련 영화목록이 존재하지 않습니다</p>'
    return false
  }//if 

  data.forEach(movie => {
    let { id, poster_path, vote_average, title, genre_ids, release_date } = movie
    let imgPath = (poster_path) ? `${imgPaths.w500}${poster_path}` : './img/no-image.jpg'
    vote_average = vote_average.toFixed(1)
    let gradeLevel = Math.floor(vote_average - 5)
    if (gradeLevel > 4) gradeLevel = 4
    if (gradeLevel < 0) gradeLevel = 0
    let gradeColor = gradeColors[gradeLevel]
    let genres = genre_ids.map(num => genreList[num]).join(' / ')
    qs(container).insertAdjacentHTML('beforeend', `
        <figure title="${title}" class="${gridClassName}">
          <a href="./detail.php?id=${id}">
            <div class="imgbox">
              <img src="${imgPath}" alt="">
              <span style="background:${gradeColor}"></span>
              <small>${vote_average}</small>
            </div><!-- imgbox -->
            <figcaption>
              <h3>${title}</h3>
              <p>${genres}</p>
              <p>${release_date}</p>
            </figcaption>
          </a>
        </figure>
      `)//insertAdjacentHTML
  })//forEach
}//displayMovies

export const displayVideos = (data, container) => {
  if (data.length === 0) {
    qs(container).innerHTML = '<p class="no-data">관련 영상이 존재하지 않습니다</p>'
    return false
  }

  data.forEach(video => {
    let { key } = video
    qs(container).insertAdjacentHTML('beforeend', `
      <button value="${key}">  
        <img src="https://img.youtube.com/vi/${key}/mqdefault.jpg" alt>
      </button>
    `)
  })//forEach

  qsAll(`${container} button`).forEach(btn => {
    btn.addEventListener('click', e => {
      showModal('.video-modal')
      let youtubeId = e.currentTarget.value
      qs('.video-modal iframe').src = `http://www.youtube.com/embed/${youtubeId}?playlist=${youtubeId}&autoplay=1&loop=1&mute=1&playsinline=1"`
      videoResize()
    })//click
  })//forEach
}//displayVideos

export const displayImages = (data, container) => {
  if (data.length === 0) {
    qs(container).innerHTML = '<p class="no-data">관련 이미지가 존재하지 않습니다</p>'
    return
  }//if

  data.forEach(img => {
    let { file_path } = img
    let imgPathOriginal = `${imgPaths.original}${file_path}`
    let imgPathW500 = `${imgPaths.w500}${file_path}`
    qs(container).insertAdjacentHTML('beforeend', `
      <a class="viewbox-btn" href="${imgPathOriginal}">
        <img src="${imgPathW500}" alt>
      </a>
    `)//insertAdjacentHTML
  })//forEach

  $('.viewbox-btn').viewbox()
}//displayImages

export const displayPeople = (data, container) => {
  if (data.length === 0) {
    qs(container).innerHTML = '<p class="no-data">관련 이미지가 존재하지 않습니다</p>'
    return
  }//if

  data.forEach(person => {
    let { id, profile_path, name, character } = person
    let photo = (profile_path) ? `${imgPaths.w500}${profile_path}` : './img/no-image.jpg'
    qs(container).insertAdjacentHTML('beforeend', `
      <figure>
        <a href="${id}">
          <img src="${photo}" alt>
          <figcaption>
            <em>${name}</em>
            <b>'${character}'역</b>
          </figcaption>
        </a>
      </figure>
    `)//insertAdjacentHTML
  })//forEach

  qsAll(`${container} a`).forEach(anchor => {
    anchor.addEventListener('click', async e => {
      e.preventDefault()
      let id = e.currentTarget.getAttribute('href')
      let profile = await getProfile(id, en)
      let filmography = await getFilmography(id)
      displayProfile(profile)
      displayFilmography(filmography)
      showModal('.person-modal')
      setPersonModal()
    })//click
  })//forEach
}//displayPeople

export const displayFilmography = (filmographyData) => {
  let { cast, crew } = filmographyData

  let filmography = [...cast, ...crew]
  sortArray(filmography, 'popularity', -1)
  filmography = filmography.slice(0, 30)
  sortArray(filmography, 'release_date', -1)


  qs('ul.filmography').innerHTML = ''
  filmography.forEach(movie => {
    let { id, release_date, title, job } = movie
    job = (job) ? job : 'acting'
    qs('ul.filmography').insertAdjacentHTML('beforeend', `
      <li>
        <time>${release_date}</time>
        <a href="./detail.php?id=${id}">
          <em>${title}</em>
          <small>(${job})</small>
        </a>
      </li>
    `)//insertAdjacentHTML
  })//forEach

}//displayFilmography

export const getFilmography = (personId, lang = ko) => {
  return new Promise(async resolve => {
    const result = await fetch(`${baseUrl}/person/${personId}/movie_credits${api_key}${lang}`)
    const data = result.json()
    resolve(data)
  })//Promise
}//getFilmography

export const getProfile = (personId, lang = ko) => {
  return new Promise(async resolve => {
    let result = await fetch(`${baseUrl}/person/${personId}${api_key}${lang}`)
    let data = await result.json()
    resolve(data)
  })//Promise
}//getProfie

export const displayProfile = (profileData) => {
  let { profile_path, name, birthday, deathday, known_for_department, place_of_birth, biography } = profileData

  let photoPath = (profile_path) ? `${imgPaths.w500}${profile_path}` : './img/no-image.jpg'
  name = (name) ? name : '관련 정보가 없습니다'
  known_for_department = (known_for_department) ? known_for_department : '관련 정보가 없습니다'
  place_of_birth = (place_of_birth) ? place_of_birth : '관련 정보가 없습니다'
  biography = (biography) ? biography : '관련 정보가 없습니다'
  deathday = (deathday) ? deathday : 'now'
  birthday = (birthday) ? `${birthday} ~ ${deathday}` : '관련 정보가 없습니다'

  qs('.person-photo').src = photoPath
  qs('.person-name').innerText = name
  qs('.person-job').innerText = known_for_department
  qs('.person-life').innerText = birthday
  qs('.person-place').innerText = place_of_birth
  qs('.person-biography').innerText = biography

}//displayPerson
export let controller = new AbortController()
let signal = controller.signal

export const searchByKeyword = (keyword, lang = ko) => {
  return new Promise(async resolve => {
    controller = new AbortController()
    signal = controller.signal
    try {
      const result = await fetch(`${baseUrl}/search/movie${api_key}${lang}&query=${keyword}`, { signal: signal })
      const data = await result.json()
      resolve(data)
    } catch {
      console.log('중단')
    }
  })//강제로 중단시키면 웹은 에러로 판단하기 때문에 try catch 사용
}

export const searchByGenres=(genreNums,page=1)=>{
  return new Promise(async resolve=>{
    controller = new AbortController()
    signal = controller.signal
    let result=await fetch(`${baseUrl}/discover/movie${api_key}&with_genres=${genreNums}&page=${page}`, { signal: signal })
    let data = await result.json()
    resolve(data)
  })
}
