<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css//main.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/sub-layout.css">
  <link rel="stylesheet" href="./css/home.css">
  <link rel="stylesheet" href="./css/greet.css">
  <link rel="stylesheet" href="./css/location.css">
  <link rel="stylesheet" href="./css/biz-intro.css">
  <link rel="stylesheet" href="./css/biz-area.css">
  <link rel="stylesheet" href="./css/gallery.css">
  <link rel="stylesheet" href="./css/online.css">
  <link rel="stylesheet" href="./css/faq.css">
  <link rel="stylesheet" href="./css/board.css">
  <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="https://kit.fontawesome.com/b331f7fde6.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
  <script src="./js/common.js"></script>

  <title>Document</title>
</head>

<body>
  <header>
    <!-- header는 보통 높이를 줌 -->
    <nav class="member">
      <div class="center">
        <a href="#">로그인</a>
        <a href="#">회원가입</a>
        <a href="#">SNS</a>
      </div>
      <div class="bottom">
        <h1>
          <a href="./index.php">
            <img src="./img/icons/logo.png" alt="">
          </a>
        </h1>
        <script src="./js/gnb.js"></script>
        <nav class="gnb"><!-- global navigator bar -->
          <?php include 'menu.php' ?>
        </nav>
      </div>
    </nav>
  </header>

  <nav class="quick">
    <b>quick <br>menu</b>
    <a href="./biz-intro.php">
      <i class="fa-solid fa-building"></i>
      <span>사업분야</span>
    </a>
    <a href="./online.php">
      <i class="fa-solid fa-file-signature"></i>
      <span>온라인문의</span>
    </a>
    <a href="./location.php">
      <i class="fa-solid fa-map-location"></i>
      <span>오시는길</span>
    </a>
    <button class="top">
      <i class="fa-solid fa-arrow-up"></i>
      top
    </button>
  </nav>