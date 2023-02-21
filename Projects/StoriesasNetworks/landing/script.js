let beginning = document.querySelector("#beginning");
let ending = document.querySelector("#ending");
let sesame = document.querySelector("#sesame ");
var x = window.matchMedia("(max-width: 800px)")
myFunction(x)
x.addListener(myFunction)




function myFunction(x) {
    if (x.matches) {

      sesame.onclick = function() {
        beginning.classList.toggle('animate-beg-mob');
        ending.classList.toggle("animate-end-mob");
        sesame.style.display = 'none';
      };
    
    beginning.onclick = function() {
        beginning.classList.toggle('animate-beg-mob');
        ending.classList.toggle("animate-end-mob");
        sesame.style.display = 'none';
      };
    
      ending.onclick = function() {
        beginning.classList.toggle('animate-beg-mob');
        ending.classList.toggle("animate-end-mob");
        sesame.style.display = 'none';
      };
    
      
    } else {
      sesame.onclick = function() {
        beginning.classList.toggle('animate-beg');
        ending.classList.toggle("animate-end");
        sesame.style.display = 'none';
      };
    
    beginning.onclick = function() {
        beginning.classList.toggle('animate-beg');
        ending.classList.toggle("animate-end");
        sesame.style.display = 'none';
      };
    
      ending.onclick = function() {
        beginning.classList.toggle('animate-beg');
        ending.classList.toggle("animate-end");
        sesame.style.display = 'none';
      };
    }
  }
  



  
