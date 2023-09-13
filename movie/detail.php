<?php include "header.php" ?>
<script src="./js/detail.js" type="module"></script>
<figure class="slide">

</figure>
<main class="detail-content">
  <section class="detail-section">


    <img src="" alt="" class="poster">
    <div class="detail-info">
      <h2 class="movie-title">

      </h2>
      <ul class="meta">
        <li>
          <div class="vote-average">
            <img class="logo-small" src="./img/logo-square.png" alt="">
            <svg viewbox="0 0 100 100">
              <circle cx="50" cy="50" r="40" class="stroke" />
              <circle cx="50" cy="50" pathlength="10" r="40" class="progress" />
            </svg>
            <b class="average"></b>
          </div>
          <small class="vote-cnt"></small>
        </li>
        <li><i class="fa-regular fa-clock"></i>
          <em class="hour"></em>
          <small>hour</small>
          <em class="min"></em>
          <small>min</small>
        </li>
        <li>
          <i class="fa-regular fa-calendar-check"></i>
          <small class="release_date"></small>
        </li>
        <li class="genres">
          <i class="fa-solid fa-tags"></i>
          <small></small>
        </li>
      </ul>

      <p class="overview"></p>
      <ul class="info">
        <li>
          <i class="fa-solid fa-clapperboard"></i>
          <small>원제</small>
          <em class="original_title"></em>
        </li>
        <li>
          <i class="fa-solid fa-building"></i>
          <small>제작사</small>
          <em class="company"></em>
        </li>
        <li>
          <i class="fa-solid fa-user-tie"></i>
          <small>제작자</small>
          <em class="producer"></em>
        </li>
        <li>
          <i class="fa-solid fa-user-gear"></i>
          <small>감독</small>
          <em class="director"></em>
        </li>
      </ul>

    </div>
  </section>

  <section class="common-section scroll-section people-section">
    <h2>
      <i class="fa-solid fa-users"></i>
      출연진
    </h2>
    <div class="grid-container"></div>
  </section>
  <section class="common-section scroll-section img-section">
    <h2>
      <i class="fa-solid fa-image"></i>
      <em>관련 이미지</em>
    </h2>
    <div class="grid-container"></div>
  </section>

  <section class="common-section scroll-section video-section">
    <h2>
      <i class="fa-solid fa-video"></i>
      <em>관련 영상</em>
    </h2>
    <div class="grid-container"></div>
  </section>



  <section class="common-section movie-grid-section similar-section wrap-section">
    <h2>
      <i class="fa-solid fa-photo-film"></i>
      <em>유사한 영화</em>
    </h2>
    <div class="grid-container">

    </div>
  </section>
</main>
<?php include "video-modal.php" ?>
<?php include "person-modal.php" ?>
<?php include "footer.php" ?>