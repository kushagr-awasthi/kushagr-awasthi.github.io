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

function myFunction(x) {
    if (x.matches) {
      
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
  


  var x = window.matchMedia("(max-width: 800px)")
  
  myFunction(x)
  x.addListener(myFunction)