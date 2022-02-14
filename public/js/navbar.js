function hambergerMenu() {
  const navMoblie = document.querySelector(".nav-moblie");
  navMoblie.classList.toggle("nav-moblie-toggleclass");
}

let runNumber = -1;
function projectToggle(idx) {
  const projectBox = document.getElementById("projects-box");
  if (runNumber === -1) {
    projectBox.style.height = `${projectBox.scrollHeight}px`;
    runNumber = idx;
  } else {
    projectBox.style.height = "0px";
    runNumber = -1;
  }
}

// addEventListener("scroll", () => {
//   const navBottom = document.querySelector(".nav-bottom");
//   const navTop = document.querySelector(".nav-top");
//   const pageYOffset = window.pageYOffset;

//   if (pageYOffset >= 70) {
//     navBottom.style.position = "fixed";
//     navBottom.style.top = "0";
//   } else {
//     navBottom.style.position = "static";
//   }
// });