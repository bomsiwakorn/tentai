function imageOutsideContainer() {
  const windowWidth = window.innerWidth;
  let containerWidth = -24;
  if (windowWidth < 576) {
    containerWidth += windowWidth;
  } else if (windowWidth >= 576 && windowWidth < 768) {
    containerWidth += 540;
  } else if (windowWidth >= 768 && windowWidth < 992) {
    containerWidth += 720;
  } else if (windowWidth >= 992 && windowWidth < 1200) {
    containerWidth += 960;
  } else if (windowWidth >= 1200 && windowWidth < 1400) {
    containerWidth += 1140;
  } else if (windowWidth >= 1400) {
    containerWidth += 1320;
  }

  let imageContainerLeft = document.querySelectorAll(".imgOutsideLeft");
  let imageContainerRight = document.querySelectorAll(".imgOutsideRight");
  let imageContainer = document.querySelectorAll(".imgContainer");

  if (windowWidth >= 768 && imageContainerLeft.length > 0) {
    for (let i = 0; i < imageContainerLeft.length; i++) {
      imageContainerLeft[i].style.marginLeft = `-${
        (windowWidth - containerWidth) / 2
      }px`;
      imageContainerLeft[i].style.marginRight = "0";
    }
  } else {
    for (let i = 0; i < imageContainerLeft.length; i++) {
      imageContainerLeft[i].style.marginRight = `-${
        (windowWidth - containerWidth) / 2
      }px`;
      imageContainerLeft[i].style.marginLeft = `-${
        (windowWidth - containerWidth) / 2
      }px`;
    }
  }

  if (windowWidth >= 768 && imageContainerRight.length > 0) {
    for (let i = 0; i < imageContainerRight.length; i++) {
      imageContainerRight[i].style.marginRight = `-${
        (windowWidth - containerWidth) / 2
      }px`;
      imageContainerRight[i].style.marginLeft = "0";
    }
  } else {
    for (let i = 0; i < imageContainerRight.length; i++) {
      imageContainerRight[i].style.marginRight = `-${
        (windowWidth - containerWidth) / 2
      }px`;
      imageContainerRight[i].style.marginLeft = `-${
        (windowWidth - containerWidth) / 2
      }px`;
    }
  }

  if (windowWidth < 768 && imageContainer.length > 0) {
    for (let i = 0; i < imageContainer.length; i++) {
      imageContainer[i].style.marginRight = `-${
        (windowWidth - containerWidth) / 2
      }px`;
      imageContainer[i].style.marginLeft = `-${
        (windowWidth - containerWidth) / 2
      }px`;
    }
  } else {
    for (let i = 0; i < imageContainer.length; i++) {
      imageContainer[i].style.marginRight = "0";
      imageContainer[i].style.marginLeft = "0";
    }
  }
}
imageOutsideContainer();
window.onresize = imageOutsideContainer;
