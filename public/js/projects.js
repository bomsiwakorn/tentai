let isInitedAllProject = false;
function filterAllProject(lang, index) {
  if (!isInitedAllProject) {
    const itemsAllEn = document.querySelectorAll("#filterItemAll-en");
    const itemsAllTh = document.querySelectorAll("#filterItemAll-th");
    const itemsAllCh = document.querySelectorAll("#filterItemAll-ch");
    itemsAllEn[0].style.color = "#dc8983";
    itemsAllTh[0].style.color = "#dc8983";
    itemsAllCh[0].style.color = "#dc8983";

    isInitedAllProject = true;
  } else {
    const itemsAllLang = document.querySelectorAll(`#filterItemAll-${lang}`);
    for (let i = 0; i < 3; i++) {
      if (i === index) {
        itemsAllLang[index].style.color = "#dc8983";
      } else {
        itemsAllLang[i].style.color = "#fff";
      }
    }
  }
}
filterAllProject();

let isInitedPastProject = false;
function filterPastProject(lang, index) {
  if (!isInitedPastProject) {
    const itemsPastEn = document.querySelectorAll("#filterItemPast-en");
    const itemsPastTh = document.querySelectorAll("#filterItemPast-th");
    const itemsPastCh = document.querySelectorAll("#filterItemPast-ch");
    itemsPastEn[0].style.color = "#dc8983";
    itemsPastTh[0].style.color = "#dc8983";
    itemsPastCh[0].style.color = "#dc8983";

    isInitedPastProject = true;
  } else {
    const itemsPastLang = document.querySelectorAll(`#filterItemPast-${lang}`);
    for (let i = 0; i < 3; i++) {
      if (i === index) {
        itemsPastLang[index].style.color = "#dc8983";
      } else {
        itemsPastLang[i].style.color = "#fff";
      }
    }
  }
}
filterPastProject();
