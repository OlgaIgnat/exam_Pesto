/*-----ПЛАВНЫЙ СКРОЛЛ----*/
let up = document.querySelector(".up");
if(up){
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
}

/*-----ПЛАВНОЕ ПОЯВЛЕНИЕ ЭЛЕМЕНТА-----*/
    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            change.target.classList.add('element-show');
          }
        });
      }
      let options = { threshold: [0.2] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.element-animation');
      for (let elm of elements) {
        observer.observe(elm);
      }
      let elementsLeft = document.querySelectorAll('.element-animation-left');
      for (let elm of elementsLeft) {
        observer.observe(elm);
      }

      let elementsRight = document.querySelectorAll('.element-animation-right');
      for (let elm of elementsRight) {
        observer.observe(elm);
      }

     





  
     
    
        
