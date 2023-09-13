import { qs } from "./functions.js"

export let scrollY=window.scrollY

const setTopBtn=()=>{
  if(scrollY>300) qs('.top-btn').classList.add('active')
  else qs('.top-btn').classList.remove('active')
}

qs('.top-btn').addEventListener('click',e=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

setTopBtn()

window.addEventListener('resize',e=>{
  setTopBtn()
  scrollY=window.scrollY
})
window.addEventListener('scroll',e=>{
  setTopBtn()
  scrollY=window.scrollY
})

qs('.toggle-btn').addEventListener('click',e=>{
  qs('.menu-list ul').classList.toggle('active')
})