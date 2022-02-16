const allProject = document.querySelector("#allProject");
const allTheOne = document.querySelector("#allTheOne");
const allTenTai = document.querySelector("#allTenTai");

function allProjectBtnActive() {
  allProject.classList.add("active");
  allTheOne.classList.remove("active");
  allTenTai.classList.remove("active");
}

function allTheoneBtnActive() {
  allProject.classList.remove("active");
  allTheOne.classList.add("active");
  allTenTai.classList.remove("active");
}

function allTentaiBtnActive() {
  allProject.classList.remove("active");
  allTheOne.classList.remove("active");
  allTenTai.classList.add("active");
}

const pastProject = document.querySelectorAll("#pastProject");
const pastTenone = document.querySelector("#pastTenone");
const pastTentai = document.querySelector("#pastTentai");

function pastProjectBtnActive(lang) {
  pastProject.classList.add("active");
  pastTenone.classList.remove("active");
  pastTentai.classList.remove("active");
}

function pastTenoneBtnActive() {
  pastProject.classList.remove("active");
  pastTenone.classList.add("active");
  pastTentai.classList.remove("active");
}

function pastTentaiBtnActive() {
  pastProject.classList.remove("active");
  pastTenone.classList.remove("active");
  pastTentai.classList.add("active");
}
