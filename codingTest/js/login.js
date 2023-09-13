{
  document.querySelector('.login-form').addEventListener('submit', async e => {
    e.preventDefault()
    document.querySelector('.login-form button').disabled=true
    
    let result = await fetch('./js/member.json')
    let members = await result.json()
    console.log(members);

    let userid = document.querySelector('.id').value
    let userpw = document.querySelector('.pw').value

    let user = members.filter(v => (v.id == userid) && (v.pw == userpw))[0]
    if (!user) {
      alert('잘못된 회원정보입니다.')
      document.querySelector('.login-form button').disabled=false
      return
    }
    let { id, name } = user
    let obj = { id, name }
    sessionStorage.setItem('userSession', JSON.stringify(obj))
    location.href='./product.php'
    
  })
}