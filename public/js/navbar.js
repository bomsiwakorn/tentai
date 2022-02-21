function hambergerMenuOpen() {
  const bodyEl = document.querySelector("body");
  const navMoblie = document.querySelector(".nav-moblie");
  navMoblie.style.right = "0px";
  // bodyEl.style.height = "100vh";
  // bodyEl.style.removeProperty("overflow-x, hidden");
  // bodyEl.style.setProperty("overflow", "hidden", "important");
}

function hambergerMenuClose() {
  const bodyEl = document.querySelector("body");
  const navMoblie = document.querySelector(".nav-moblie");
  navMoblie.style.right = "-1000px";
}

let initialNum = -1;
function projectToggle(idx) {
  const projectBox = document.getElementById("projects-box");
  if (initialNum === -1) {
    projectBox.style.height = `${projectBox.scrollHeight}px`;
    initialNum = idx;
  } else {
    projectBox.style.height = "0px";
    initialNum = -1;
  }
}

function acitveMenu() {
  let pathName = window.location.pathname.split("/")[1].split(".")[0];
  if (pathName === undefined) {
    return;
  }
  let menuItem = document.querySelectorAll(`.menuItem-${pathName}`);
  let menuItemProject = document.querySelectorAll(`.menuItem-projects`);
  let menuItemCareer = document.querySelectorAll(`.menuItem-career`);
  let menuItemNews = document.querySelectorAll(`.menuItem-news`);
  // console.log(window.location.pathname.split("/")[2].split(".")[0]);
  console.log(pathName);
  console.log(menuItem);
  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].style.color = "#dc8983";
  }
  for (let i = 0; i < menuItemProject.length; i++) {
    if (pathName === "project") {
      menuItemProject[i].style.color = "#dc8983";
    } else if (pathName === "career-form" || pathName === "career-completed") {
      menuItemCareer[i].style.color = "#dc8983";
    } else if (pathName === "news-info") {
      menuItemNews[i].style.color = "#dc8983";
    }
  }
  // for (let i = 0; i < menuItemProject.length; i++) {
  //   if (pathName === "career-form" || pathName === "career-completed") {
  //     menuItemCareer[i].style.color = "#dc8983";
  //   }
  // }
  // for (let i = 0; i < menuItemProject.length; i++) {
  //   if (pathName === "news-info") {
  //     menuItemNews[i].style.color = "#dc8983";
  //   }
  // }
}
acitveMenu();

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
