function closeCookie() {
  const cookieInfo = document.getElementById("cookie-info");
  cookieInfo.style.display = "none";
}

function initialCookie() {
  const cookieBtn = document.querySelector(".cookieBtn");
  const cookieInfo = document.getElementById("cookie-info");
  const isAccept = document.cookie.split("; ").includes("isAccept=true");

  if (isAccept) {
    cookieInfo.style.display = "none";
  }
}
initialCookie();

function acceptCookie() {
  document.cookie = "isAccept=true";
  initialCookie();
}
