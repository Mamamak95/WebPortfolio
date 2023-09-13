getBookDatas=()=>{
  return new Promise(async(resolve,reject)=>{
    let data=await fetch('https://www.nl.go.kr/NL/search/openApi/search.do?key=244d2a6142b13430db6e1b4e1b29dbcf27c7638fab7ac4e3e26a288588d27320&kwd=%ED%86%A0%EC%A7%80&apiType=json')
    let result= data.json()
    resolve(result)
  })
}

window.addEventListener('load',async e=>{
  let data=getBookDatas()
  console.log(data)
})