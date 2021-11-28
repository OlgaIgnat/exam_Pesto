/*---ГАЛЕРЕЯ---*/
var galleryUp = ["../img/img2.jpg","../img/img8.jpg","../img/img51.jpg","../img/img11.jpg","../img/img48.jpg","../img/img50.jpg"];
var galleryMiddle = ["../img/img1.jpg", "../img/img3.jpg","../img/img5.jpg","../img/img6.jpg","../img/img7.jpg","../img/img52.jpg","../img/img53.jpg","../img/img9.jpg","../img/img12.jpg","../img/img14.jpg","../img/img15.jpg","../img/img16.jpg","../img/img17.jpg","../img/img18.jpg","../img/img19.jpg","../img/img20.jpg","../img/img21.jpg","../img/img22.jpg","../img/img23.jpg","../img/img24.jpg","../img/img25.jpg","../img/img27.jpg","../img/img30.jpg","../img/img31.jpg","../img/img32.jpg","../img/img33.jpg","../img/img34.jpg","../img/img35.jpg","../img/img36.jpg","../img/img38.jpg","../img/img39.jpg","../img/img40.jpg","../img/img41.jpg","../img/img43.jpg", "../img/img45.jpg", "../img/img46.jpg"];
var galleryEnd = ["../img/img13.jpg","../img/img26.jpg","../img/img28.jpg","../img/img29.jpg","../img/img37.jpg","../img/img44.jpg"];
for (let i = 0; i< galleryUp.length; i++){
  var newDiv = document.createElement("div"); 
  var image = document.createElement("img");
  image.setAttribute("class","img_gallery"); 
  image.src = galleryUp[i];
  newDiv.setAttribute("class","memory_gallery");  
  newDiv.appendChild(image);       
  document.querySelector("#gallery_up").appendChild(newDiv);      
  var newDivModal = document.createElement("div");
  newDivModal.setAttribute("class","modal_gallery");
  document.querySelector("#gallery_up").appendChild(newDivModal);
  var closeModal = document.createElement("div");
  closeModal.setAttribute("class", "close_modal_window_gallery");
  closeModal.innerHTML = "X";
  document.querySelector(".modal_gallery").appendChild(closeModal);  
  } 

  for (let i = 0; i< galleryMiddle.length; i++){
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class","memory_gallery");  
    var image = document.createElement("img");
    image.setAttribute("class","img_gallery");    
    image.src = galleryMiddle[i];     
    newDiv.appendChild(image);       
    document.querySelector("#gallery_middle").appendChild(newDiv);      
    var newDivModal = document.createElement("div");
    newDivModal.setAttribute("class","modal_gallery");
    document.querySelector("#gallery_middle").appendChild(newDivModal);
    var closeModal = document.createElement("div");
    closeModal.setAttribute("class", "close_modal_window_gallery");
    closeModal.innerHTML = "X";
    document.querySelector(".modal_gallery").appendChild(closeModal);      
  } 

  for (let i = 0; i< galleryEnd.length; i++){
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class","memory_gallery");  
    var image = document.createElement("img");
    image.setAttribute("class","img_gallery");    
    image.src = galleryEnd[i];     
    newDiv.appendChild(image);       
    document.querySelector("#gallery_end").appendChild(newDiv);      
    var newDivModal = document.createElement("div");
    newDivModal.setAttribute("class","modal_gallery");
    document.querySelector("#gallery_end").appendChild(newDivModal);
    var closeModal = document.createElement("div");
    closeModal.setAttribute("class", "close_modal_window_gallery");
    closeModal.innerHTML = "X";
    document.querySelector(".modal_gallery").appendChild(closeModal);      
  } 
  

let imageAll = document.querySelectorAll(".img_gallery"); 
imageAll.forEach(function(item){
 item.addEventListener('click', function(){  
    const popupName =item.getAttribute('src');        
    let imageModal = document.createElement("img");      
    imageModal.setAttribute("class","modal_content_img");   
    imageModal.src = popupName ;         
    document.querySelector(".modal_gallery").classList.add("visible");
    document.querySelector(".modal_gallery").appendChild(imageModal); 
 });  
}) 

let popupClose = document.querySelectorAll(".close_modal_window_gallery");
popupClose.forEach(function(item){   
  item.addEventListener('click', function(e){ 
    let parent= item.closest(".modal_gallery");         
    parent.classList.remove("visible"); 
    document.querySelector(".modal_content_img").remove()
    
  });  
})

let modal = document.querySelectorAll(".modal_gallery")
window.onclick = function (event) {  
  modal.forEach(function(elem){
    if (event.target == elem) {   
    elem.classList.remove("visible");
    document.querySelector(".modal_content_img").remove()  
    };
  });
} 
