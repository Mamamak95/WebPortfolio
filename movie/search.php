<?php include "header.php" ?>
<script src="./js/search.js" type="module"></script>

<figure class="slide">

</figure>
<main class="search-content">
  <form class="search-form">
    <fieldset class="search-keyword">
      <span class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
      <input list="keyword-list" type="text" class="search-input" placeholder="영화 제목 검색" maxlength="50">
      <datalist id="keyword-list">
      <!-- <option value="1"></option> -->
      </datalist>
      <button class="delete-btn" title="검색기록삭제" type="button">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </fieldset>
    <fieldset class="genre-btns">
      
    </fieldset>
  </form>
  <section class="common-section movie-grid-section wrap-section search-result-section">
    <h2>
    <i class="fa-solid fa-square-poll-vertical"></i>
      <em>검색결과</em>
    </h2>
    <div class="grid-container"></div>
  </section>
</main>
<div class="trigger"></div>
<?php include "footer.php" ?>