function lineOutsideContainer() {
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
  const headingUnderlines = document.querySelectorAll(
    ".heading-underline .line"
  );

  if (headingUnderlines.length > 0) {
    for (let i = 0; i < headingUnderlines.length; i++) {
      headingUnderlines[i].style.left = `-${
        (windowWidth - containerWidth) / 2
      }px`;
    }
  }

  const headingUnderlinesRight = document.querySelectorAll(
    ".heading-underline-right .line"
  );
  if (headingUnderlinesRight.length > 0) {
    for (let i = 0; i < headingUnderlinesRight.length; i++) {
      headingUnderlinesRight[i].style.right = `-${
        (windowWidth - containerWidth) / 2
      }px`;
    }
  }

  const lineOutsideBoth = document.querySelectorAll(".line-outside");
  if (lineOutsideBoth.length > 0) {
    for (let i = 0; i < lineOutsideBoth.length; i++) {
      lineOutsideBoth[i].style.right = `-${
        (windowWidth - containerWidth) / 2
      }px`;
      lineOutsideBoth[i].style.left = `-${
        (windowWidth - containerWidth) / 2
      }px`;
    }
  }
}
lineOutsideContainer();
window.onresize = lineOutsideContainer;
