<?php include "sub-header.php" ?>
    <h2 class="sub_title">
      자유게시판
    </h2>
    <section class="board">
      <div class="sub_summary">
        <p class="emphasis">
        고객님의 소중한 의견을 주셔서 감사합니다.
        </p>
        <p>언제나 고객님의 눈높이에 맞추어 최상의 서비스가 되기 위해 노력하겠습니다.</p>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="column">번호</th>
            <th scope="column">제목</th>
            <th scope="column">작성자</th>
            <th scope="column">작성일자</th>
            <th scope="column">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5</td>
            <td>공지사항 테스트글 5번</td>
            <td>관리자</td>
            <td>2023-08-08</td>
            <td>1328</td>
          </tr>
          <tr>
            <td>4</td>
            <td>공지사항 테스트글 4번</td>
            <td>관리자</td>
            <td>2023-08-08</td>
            <td>426</td>
          </tr>
          <tr>
            <td>3</td>
            <td>공지사항 테스트글 3번</td>
            <td>관리자</td>
            <td>2023-08-08</td>
            <td>31</td>
          </tr>
          <tr>
            <td>2</td>
            <td>공지사항 테스트글 2번</td>
            <td>관리자</td>
            <td>2023-08-08</td>
            <td>13</td>
          </tr>
          <tr>
            <td>1</td>
            <td>공지사항 테스트글 1번</td>
            <td>관리자</td>
            <td>2023-08-08</td>
            <td>11</td>
          </tr>
        </tbody>
      </table>
      <form>
        <select>
          <option label='제목' value="title"></option>
          <option label='내용' value="content"></option>
          <option label='작성자' value="writer"></option>
        </select>
        <input type="text" title="검색어를 입력">
        <button>검색</button>

      </form>
    </section>
    
<?php include "sub-footer.php" ?>
