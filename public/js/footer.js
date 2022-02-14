function lineOnHover(index) {
  let positionIdx = document.querySelector(`.pos-${index}`);
  if (positionIdx) {
    positionIdx.style.display = "block";
  }
}

function lineOutHover(index) {
  let positionIdx = document.querySelector(`.pos-${index}`);
  if (positionIdx) {
    positionIdx.style.display = "none";
  }
}
