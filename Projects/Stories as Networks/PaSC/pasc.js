var P = document.getElementById("P")
    O = document.getElementById("O")
    E = document.getElementById("E")
    M = document.getElementById("M")
    card = document.getElementsByClassName("card-wrapper");

console.log(P.textContent);
console.log(O.textContent);
console.log(E.textContent);
console.log(M.textContent);


P.addEventListener("mouseover", function(){
  if (P.textContent === ";") {
   P.textContent = "P";
  } else {
    P.textContent = ";";
  }
});
P.addEventListener("mouseout", function(){
    if (P.textContent === "P") {
     P.textContent = ";";
    } else {
      P.textContent = "P";
    }
  });
O.addEventListener("mouseover", function(){
    if (O.textContent === ";") {
     O.textContent = "O";
    } else {
      O.textContent = ";";
    }
  });
O.addEventListener("mouseout", function(){
      if (O.textContent === "O") {
       O.textContent = ";";
      } else {
        O.textContent = "O";
      }
    });
E.addEventListener("mouseover", function(){
        if (E.textContent === ";") {
         E.textContent = "E";
        } else {
          E.textContent = ";";
        }
      });
E.addEventListener("mouseout", function(){
          if (E.textContent === "E") {
           E.textContent = ";";
          } else {
            E.textContent = "E";
          }
        });
M.addEventListener("mouseover", function(){
            if (M.textContent === ";") {
             M.textContent = "M";
            } else {
              M.textContent = ";";
            }
          });
M.addEventListener("mouseout", function(){
              if (M.textContent === "M") {
               M.textContent = ";";
              } else {
                M.textContent = "M";
              }
            });


