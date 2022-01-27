let positionOpened = -1

function togglePosition(index) {
  const positionExpand = document.querySelector(
    `.career-position-info-wrapper-${index + 1}`
  )
  const positionExpanded = document.querySelector(
    `.career-position-info-wrapper-${positionOpened + 1}`
  )

  if (positionOpened === -1) {
    positionExpand.style.height = positionExpand.scrollHeight + 'px'
    positionOpened = index
  } else {
    if (positionOpened === index) {
      positionExpand.style.height = '0'
      positionOpened = -1
    } else {
      positionExpanded.style.height = '0'
      positionExpand.style.height = positionExpand.scrollHeight + 'px'
      positionOpened = index
    }
  }
}
