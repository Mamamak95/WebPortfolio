import { closeModal, qs, videoResize } from "./functions.js";


qs('.video-modal .modal-close').addEventListener('click', e => {
  qs('.video-modal iframe').src = ''
  closeModal('.video-modal')
})

window.addEventListener('resize',e=>{
  videoResize()
})