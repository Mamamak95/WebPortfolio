<?php include "header.php" ?>
<script src="./js/home.js"></script>

<section class="home_visual">
  <div class="swiper-wrapper"><!-- 넓이 건들지 않기 -->
    <figure class="swiper-slide">
      <img src="./img/home/main01.jpg" alt="">
      <figcaption>
        <h6>slide1</h6> <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, nobis!</p>
      </figcaption>
    </figure>
    <figure class="swiper-slide">
      <img src="./img/home/main02.jpg" alt="">
      <figcaption>
        <h6>slide2</h6> <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, nobis!</p>
      </figcaption>
    </figure>
    <figure class="swiper-slide">
      <img src="./img/home/main03.jpg" alt="">
      <figcaption>
        <h6>slide3</h6> <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, nobis!</p>
      </figcaption>
    </figure>
    <figure class="swiper-slide">
      <img src="./img/home/main04.jpg" alt="">
      <figcaption>
        <h6>slide4</h6> <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, nobis!</p>
      </figcaption>
    </figure>
  </div>

  <div class="prev"><i class="fa-solid fa-circle-chevron-left"></i></div>
  <div class="next"><i class="fa-solid fa-circle-chevron-right"></i></div>
  <div class="indicator"></div>








</section>
<main>
  <section class="feature">
    <figure>
      <a href="./biz-intro.php">
        <div><img src="./img/home/banner01.jpg" alt=""></div>
        <figcaption>
          <h3>BUSINESS INFO</h3>
          <p>회사만의 특화되고 세분화된 사업영역을 바탕으로 최고의 비즈니스를 제안합니다.</p>
        </figcaption>
      </a>
    </figure>
    <figure>
      <a href="./online.php">
        <div><img src="./img/home/banner02.jpg" alt=""></div>
        <figcaption>
          <h3>ONLINE INQUIRY</h3>
          <p>온라인 무료상담 및 견적받기로 빠르고 효율적인 상담을 받으세요.</p>
        </figcaption>
      </a>
    </figure>
    <figure>
      <a href="./gallery.php">
        <div><img src="./img/home/banner03.jpg" alt=""></div>
        <figcaption>
          <h3>PRODUCT INFO</h3>
          <p>최고의 기술력과 최상의 품질, 착한 가격으로 보답하여 드리겠습니다.</p>
        </figcaption>
      </a>
    </figure>
    <figure>
      <a href="./location.php">
        <div><img src="./img/home/banner04.jpg" alt=""></div>
        <figcaption>
          <h3>LOCATION INFO</h3>
          <p>당사로 찾아오시는 길을 상세하게 안내해 드리겠습니다.</p>
        </figcaption>
      </a>
    </figure>
  </section>
  <section class="latest">
    <article class="news">
      <div class="center">
        <h3><i class="fa-solid fa-newspaper"></i> latest news</h3>
        <div class="rolling_container">
          <div class="rolling">
            <p>1. inline-flex white-spce:nowrap inline-flex white-spce:nowrap</p>
            <p>2. inline-flex white-spce:nowrap inline-flex white-spce:nowrap</p>
          </div>
        </div>
      </div>
    </article>
    <div class="bottom">
      <article class="latest_notice">
        <h3>
          <i class="fa-solid fa-volume-high"></i> NOTICE
        </h3>
        <ul>
          <li>
            <a href="#">1 Lorem ipsum dolor sit ametdasfasfadsfads.</a>
            <time>2023-08-10</time>
          </li>
          <li>
            <a href="#">2 Lorem ipsum dolor sit amet.</a>
            <time>2023-08-10</time>
          </li>
          <li>
            <a href="#">3 Lorem ipsum dolor sit amet.</a>
            <time>2023-08-10</time>
          </li>
          <li>
            <a href="#">4 Lorem ipsum dolor sit amet.</a>
            <time>2023-08-10</time>
          </li>
          <li>
            <a href="#">5 Lorem ipsum dolor sit amet.</a>
            <time>2023-08-10</time>
          </li>
        </ul>
        <a href="./notice.php" class="more">MORE +</a>
      </article>
      <article class="latest_gallery">
        <h3>
          <i class="fa-regular fa-images"></i>GALLERY
        </h3>
        <ul>
          <li>
            <a href="#">
              <img src="./img/sub3/1.jpg" alt="">
              <h4>img title1</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./img/sub3/2.jpg" alt="">
              <h4>img title2</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./img/sub3/3.jpg" alt="">
              <h4>img title3</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./img/sub3/4.jpg" alt="">
              <h4>img title4</h4>
            </a>
          </li>
        </ul>
      </article>
      <article class="banner">
        <a href="tel:000000000"><img src="./img/sub/customer.gif" alt=""></a>
      </article>
    </div>
  </section>
</main>








<?php include "footer.php" ?>