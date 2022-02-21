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

function acitveMenu(lang, index) {
  const menuItem = document.querySelectorAll("#menuItem-project");
  console.log(menuItem);
  console.log(window.location);
  // for (let i = 0; i < menuItem.length; i++) {
  //   menuItem[i].style.color = "#dc8983";
  // }
  // for (let i = 0; i < 3; i++) {
  //   if (i === index) {
  //     menuItem[index].style.color = "#dc8983";
  //   } else {
  //     menuItem[i].style.color = "#fff";
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
