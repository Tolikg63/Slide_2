(function() {
   const btnLeft = document.querySelector('.btn-left');
   const btnRight = document.querySelector('.btn-right');
   const slider = document.querySelectorAll('.slider');
   const dot = document.querySelectorAll('.dot');
   let index = 0;


   function next() {
      if(index === slider.length - 1) {
         index = 0;
         addActive(index);
         activeDots(index);
      } else {
         index++;
         addActive(index);
         activeDots(index);
      }
   }

   function prev() {
      if(index === 0) {
         index = slider.length - 1;
         addActive(index);
         activeDots(index);
      } else {
         index--;
         addActive(index);
         activeDots(index);
      }
   }

   function addActive(n) {
      for(let item of slider) {
         item.classList.remove('active');
      }
   slider[n].classList.add('active');
   }

   function activeDots(n) {
      for(let value of dot) {
         value.classList.remove('active');
      }
   dot[n].classList.add('active');   
   }

   dot.forEach((dotIndex, indexDot) => {
      dotIndex.addEventListener('click', () => {
         index = indexDot;
         addActive(index);
         activeDots(index);
      });
   }); 

   btnRight.addEventListener('click', next);
   btnLeft.addEventListener('click', prev);
})();