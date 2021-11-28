/*----СМЕНА БЛОКОВ МЕНЮ-----*/
  
function openbox(id) {
    var navLink= document.querySelectorAll(".nav-link");
    navLink.forEach((elem)=>{
      elem.classList.remove("active");
    });
    var menuBlock = document.querySelectorAll(".menu_block");
    var menuActive = document.getElementsByClassName(id);    
    menuActive[0].classList.add("active");   

    for (let i = 0; i < menuBlock.length; i++) {
      if (menuBlock[i].id == id) {
        menuBlock[i].style.display = (menuBlock[i].style.display == 'none')? 'block' : 'block'; 
          
      } else {
        menuBlock[i].style.display = 'none';
      }
    }
  }

  
/*-------ОТКРЫТИЕ МОДАЛЬНОГО ОКНА------*/
const modalLinks = document.querySelectorAll(".modal_link");
const modal = document.querySelectorAll(".modal");
const popupClose = document.querySelectorAll(".popup_close");

modalLinks.forEach(function(item){
  item.addEventListener('click', function(){
      const popupName = item.getAttribute('href').replace('#','');
      document.getElementById(popupName).classList.add("visible");      
  });    
})

popupClose.forEach(function(item){   
  item.addEventListener('click', function(e){ 
    let parent= item.closest(".modal");         
    parent.classList.remove("visible");    
  });  
})

window.onclick = function (event) {  
  modal.forEach(function(elem){
    if (event.target == elem) {     
    elem.classList.remove("visible");
    };
  });
}   
