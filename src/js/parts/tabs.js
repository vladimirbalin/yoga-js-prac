function tabs(){
  let tab = document.querySelectorAll('.info-header-tab'),           //каждый хедер-таб
      info = document.querySelector('.info-header'),                 //родитель хедера        
      tabContent = document.querySelectorAll('.info-tabcontent');    //содерж каждого таба

  hideTabContent();
  showTabContent();
  function hideTabContent() {                                       //скрывающая табы
    tabContent.forEach((element)=> {
      element.classList.remove('show');
      element.classList.add('hide');
   });
  }

  function showTabContent(i = 0) { //показывающая табы
    if (tabContent[i].classList.contains('hide')) {
      tabContent[i].classList.remove('hide');
      tabContent[i].classList.add('show');
    }
  }

  info.addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.contains('info-header-tab') ||
        target.parentNode.classList.contains('info-header-tab')) {
      //if (target.classList.contains(tabSelector.replace(/\./, "")))
      // for (let i = 0; i < tab.length; i++) {
      //   if (target == tab[i]) {
      //     hideTabContent(0);
      //     showTabContent(i);
      //     break;
      //   }
      // }
      tab.forEach((element, index)=>{
        if (target == element || target.parentNode == element) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });

    //tabs data attr realisation

  // let tabHead = document.querySelectorAll('.info-header-tab');
  // let tabContent = document.querySelectorAll('.info-tabcontent');

  // function hideAllTabs(numOfTabShowed) {
  //     for (let i = numOfTabShowed; i < tabContent.length; i++) {
  //         tabContent[i].style.display = 'none';
  //     }
  // }

  // function showTabs() {
  //     hideAllTabs(0);
  //     let data = this.getAttribute('data');
  //     console.log(data);
  //     document.querySelector(`.info-tabcontent[data="${data}"]`).style.display = 'flex';
  // }
  // hideAllTabs(1);
  // tabHead.forEach(function (element) {
  //     element.onclick = showTabs;
  // });
}

module.exports = tabs;