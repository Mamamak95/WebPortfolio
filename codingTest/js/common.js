{
  let userInfo=JSON.parse(sessionStorage.getItem('userSession'))
  if(userInfo){
    document.querySelector('header .member').insertAdjacentHTML('beforeend',`
    <nav class="logged-after">
    <b class="user-id">아이디: ${userInfo.id} </b><br>
    <b class="user-name">이름: ${userInfo.name} </b><br>
    <a class="log-out" href='#'>로그아웃</a> 
  </nav> 
    `)
    document.querySelector('.log-out').addEventListener('click',e=>{
      sessionStorage.removeItem('userSession')
      location.href='./index.php'
    })
  }else{
    document.querySelector('header .member').insertAdjacentHTML('beforeend',`
    <nav class="logged-before">
      <a class="login-btn" href="./login.php">로그인</a>
      <a href="#">회원가입</a>
    </nav>
    `)
  }
}