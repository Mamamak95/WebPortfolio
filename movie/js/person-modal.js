import { closeModal, qs, qsAll, videoResize } from "./functions.js";


qs('.person-modal .modal-close').addEventListener('click', e => {
  qsAll('.person-modal ul').forEach(ul => {
    ul.style.height = '200px'
  })
  closeModal('.person-modal')

})

window.addEventListener('resize', e => {
  videoResize()
})

qsAll('.moreBtn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.currentTarget.classList.toggle('active')
    let ul = qs(e.currentTarget.value)
    
    if (e.currentTarget.className.includes('active')) {
      ul.style.height = ul.scrollHeight + 'px'
    } else {
      ul.style.height = '200px'
    }
  })
})