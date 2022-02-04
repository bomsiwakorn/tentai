function changeLanguage(index) {
  const languages = document.getElementById('change-language')
  console.log(languages)
  // languages.value = 'en'
  const kuyElem = document.querySelector('kuy')
  kuyElem.innerText = languages.value
  // console.log(languages[1].attributes)
  // console.log(languages)
  // let finded = -1
  // for (let i = 0; i < languages.length; i++) {
  //   console.log(languages[i])
  //   if (languages[i].selected) {
  //     finded = i
  //   }
  // }
  // const setLanguage = {
  //   0: 'en',
  //   1: 'th',
  //   2: 'ch',
  // }
  // languages.value = setLanguage[index]
  // languages[index].selected = true
  // languages[finded].selected = false
  // console.log(finded)
  // languages.value = 'th'
  // languages[0].selected = true
  // languages[1].selected = false
}
// changeLanguage()
