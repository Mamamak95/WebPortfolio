<?php include "sub-header.php" ?>
<script src="./js/online.js"></script>
<h2 class="sub_title">
  온라인문의
</h2>
<section class="online">
  <div class="subsummary">
    <p>궁금하신 사항이나 프로젝트 문의사항을 작성해 주세요.</p>
    <p>담당자가 확인후 빠른 회신을 약속합니다.</p>
  </div>
  <form>
    <div>
      <label for="id1">성명</label>
      <p>
        <input id="id1" type="text" required>
      </p>
    </div>
    <div>
      <label>휴대전화</label>
      <p class="tel">
        <input type="tel" title='연락처 첫번째 세자리' data-digit="3" maxlength="3" required>
        <input type="tel" title='연락처 두번째 네자리' data-digit="4" maxlength="4" required>
        <input type="tel" title='연락처 세번째 네자리' data-digit="4" maxlength="4" required>
      </p>
    </div>
    <div>
      <label for="email">이메일</label>
      <p>
        <input id="email" type="email">
      </p>
    </div>
    <div>
      <label for="id3">제목</label>
      <p>
        <input id="id3 " type="text" required>
      </p>
    </div>
    <div>
      <label for="id4">설명</label>
      <p>
        <textarea id="id4" required></textarea>
      </p>
    </div>
    <div>
      <label for="id5">첨부파일</label>
      <p>
        <input type="file" id="id5">
      </p>
    </div>
    <p>
      <button type="submit" disabled>전송</button>
      <button type="reset">취소</button>
    </p>

  </form>
</section>
<?php include "sub-footer.php" ?>