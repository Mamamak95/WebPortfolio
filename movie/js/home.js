import { en, imgPaths, ko, options } from "./api-data.js";
import {
  displayMovies,
  getMovie,
  getMovies,
  getVideos,
} from "./api-functions.js";
import { scrollY } from "./common.js";
import {
  closeModal,
  qs,
  qsAll,
  setSwiper,
  showModal,
  videoResize,
} from "./functions.js";

const setVisual = () => {
  return new Promise(async (resolve) => {
    let movieData = await getMovies(options.playing, ko);
    let movies = movieData.results;
    movies = movies.slice(0, 5);
    //foreach안에서는 await가 무시됌
    //영화데이터 뽑아서 각각 적용
    for (let movie of movies) {
      //in은 객체 of는 배열에 사용
      let {
        id,
        title,
        backdrop_path,
        overview,
        original_language,
        original_title,
      } = movie;

      if (!overview) {
        let movieEn = await getMovie(id, en);
        overview = movieEn.overview;
      }
      if (overview.length > 200) overview = overview.slice(0, 200) + "...";
      let imgPath = `${imgPaths.original}${backdrop_path}`;
      let videoData = await getVideos(id);
      if (videoData.results.length == 0) {
        videoData = await getVideos(id, en);
      }
      let videoKey = videoData.results[0].key;

      qs(".home-visual .swiper-wrapper").insertAdjacentHTML(
        "beforeend",
        `
      <figure class="swiper-slide">
        <img src="${imgPath}" alt="">
        <figcaption>
          <small class="original-title">${original_title}</small>
          <h6 class="title">
            ${title}
          </h6>
          <p class="overview">
            ${overview}
          </p>
            <button class="play-btn" value="${videoKey}"><i class="fa-brands fa-google-play"></i> 재생 </button>
            <button class="detail-btn" value="${id}"><i class="fa-solid fa-circle-info"></i> 상세정보 </button>
          </figcaption>
      </figure>
      `
      );

      qs(".home-visual").insertAdjacentHTML(
        "beforeend",
        `
      <img src="https://img.youtube.com/vi/${videoKey}/mqdefault.jpg" alt>
      <iframe src="http://www.youtube.com/embed/${videoKey}?playlist=${videoKey}&autoplay=1&loop=1&mute=1&playsinline=1" allowfullscreen></iframe>
      `
      );
    }
    //재생버튼
    qsAll(".home-visual .swiper-wrapper .swiper-slide .play-btn").forEach(
      (v) => {
        v.addEventListener("click", (e) => {
          qs(
            ".video-modal iframe"
          ).src = `http://www.youtube.com/embed/${e.target.value}?playlist=${e.target.value}&autoplay=1&loop=1&mute=1&playsinline=1`;
          showModal(".video-modal");
          videoResize();
        });
      }
    );
    //상세보기버튼
    qsAll(".home-visual .swiper-wrapper .swiper-slide .detail-btn").forEach(
      (v) => {
        v.addEventListener("click", (e) => {
          location.href = `./detail.php?id=${e.target.value}`;
        });
      }
    );

    setSwiper(".home-visual", 5000);

    resolve();
  });
};

const setHomeSection = (option, section) => {
  return new Promise(async (resolve) => {
    const moviesData = await getMovies(option, ko);
    let movies = moviesData.results.slice(0, 10);
    await displayMovies(
      movies,
      `${section} .carousel .swiper-wrapper`,
      "swiper-slide"
    );
    setSwiper(`${section} .carousel`, false, true);
    resolve();
  });
};

await setVisual(); //module type js에서는 함수 밖에서 await 사용가능
await setHomeSection(options.popular, ".popular-section");
await setHomeSection(options.upcoming, ".upcoming-section");
await setHomeSection(options.rated, ".rated-section");
await setHomeSection(options.trend, ".trend-section");

const scrollToSection = (delta) => {
  if (delta == -1) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    let offsetTop = qs(".popular-section").getBoundingClientRect().y + scrollY;
    let headerHeight = matchMedia("screen and (min-width:1000px)").matches
      ? 80
      : 60;
    let scrollTargetY = offsetTop - headerHeight;

    window.scrollTo({
      top: scrollTargetY,
      behavior: "smooth",
    });
  }
};

qs(".home-visual").addEventListener("mousewheel", (e) => {
  e.preventDefault();
  let delta = e.wheelDelta < 0 ? 1 : -1;
  scrollToSection(delta);
});

qs("button.wheel-btn").addEventListener("click", (e) => {
  scrollToSection(1);
});

