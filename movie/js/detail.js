import { en, gradeColors, imgPaths } from "./api-data.js";
import { displayImages, displayMovies, displayPeople, displayVideos, getCredits, getImages, getMovie, getSimilarMovies, getVideos } from "./api-functions.js";
import { qs, setSlide, sortArray } from "./functions.js";


let url = new URL(location.href)
let params = new URLSearchParams(url.search)
let movieid = params.get('id')

let imageData = await getImages(movieid)
let { backdrops, posters } = imageData
let images = backdrops.slice(0, 15)
let posterPath = (posters.length) ? `${imgPaths.w500}${posters[0].file_path}` : `./img/no-image.jpg`
let movieData = await getMovie(movieid)

let { title, vote_average, vote_count, runtime, release_date, overview, original_title, genres, production_companies } = movieData
let hour = parseInt(runtime / 60)
let min = runtime % 60

release_date = (release_date) ? release_date : '출시일 정보 없음'

let genreString = (genres.length) ? genres.map(genre => genre.name).join(' / ') : '장르 정보 없음'

if (!overview) {
  let movieData = await getMovie(movieid, en)
  overview = (movieData.overview) ? movieData.overview : '개요 정보 없음'

}

vote_average = vote_average.toFixed(1)
let gradeLevel = Math.floor(vote_average - 5)
if (gradeLevel > 4) gradeLevel = 4
if (gradeLevel < 0) gradeLevel = 0
let gradeColor = gradeColors[gradeLevel]

let companies = (production_companies.length) ? production_companies.map(company => company.name).join(', ') : '제작사 정보 없음'



let credits = await getCredits(movieid)
let { cast, crew } = credits
cast = cast.slice(0, 10)
let directors = crew.filter(v => v.job == 'Director').map(v => v.name).join(', ')
directors = (directors) ? directors : '감독 정보 없음'
let producers = crew.filter(v => v.job == 'Producer').map(v => v.name).join(', ')
producers = producers ? producers : '제작자 정보 없음'
let videoData = await getVideos(movieid)
let videos = videoData.results
if (videos.length == 0) {
  videoData = await getVideos(movieid, en)
  videos = videoData.results
}



///////////////////////////////////////////////
setSlide(images.slice(0, 4))

///////////////////////////////////////////////

qs('.detail-content .poster').src = posterPath
qs('.detail-content .movie-title').innerText = title
qs('.detail-content .vote-average .average').innerText = vote_average
qs('.detail-content .vote-average .average').style.color = gradeColor
qs('.detail-content .vote-average .progress').style.strokeDashoffset=10-vote_average
qs('.detail-content .vote-average .progress').style.stroke=gradeColor

// qs('.detail-content .vote-average').style.backgroundColor = gradeColor
qs('.detail-content .vote-cnt').innerText = '(' + vote_count + ')'
qs('.detail-content .hour').innerText = hour
qs('.detail-content .min').innerText = min
qs('.detail-content .release_date').innerText = release_date
qs('.detail-content .genres small').innerText = genreString
qs('.detail-content .overview').innerText = overview

qs('.detail-content .original_title').innerText = original_title
qs('.detail-content .company').innerText = companies
qs('.detail-content .producer').innerText = producers
qs('.detail-content .director').innerText = directors
//////////////////////////////////////////////
const setSimilarSection = () => {
  return new Promise(async resolve => {
    let movieData = await getSimilarMovies(movieid)
    let movies = await movieData.results
    sortArray(movies, 'release_date',false)
    movies=movies.slice(0,10)
    await displayMovies(movies,'.similar-section .grid-container')
    resolve()
  })
}

 displayPeople(cast,'.people-section .grid-container')
 displayImages(images,'.img-section .grid-container')
 displayVideos(videos,'.video-section .grid-container')
await setSimilarSection()