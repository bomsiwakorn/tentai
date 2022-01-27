function openProfileMore() {
  const modal = document.querySelector('.profile-more-modal')
  modal.style.display = 'block'
  setTimeout(() => {
    modal.style.opacity = '1'
    modal.style.top = '0'
  }, 0)
}
function closeProfileMore() {
  const modal = document.querySelector('.profile-more-modal')
  modal.style.opacity = '0'
  modal.style.top = '100px'
  setTimeout(() => {
    modal.style.display = 'none'
  }, 600)
}
