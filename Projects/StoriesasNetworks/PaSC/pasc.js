var cardA = document.getElementById("cardA");
    cardB = document.getElementById("cardB");
    cardC = document.getElementById("cardC");
    cardD = document.getElementById("cardD");

function flip(card) {
  card.style.transform = "rotateY(0deg)";
  card.style.transform = "rotateY(180deg)";
};

function flipBack(card) {
  card.style.transform = "rotateY(180deg)";
  card.style.transform = "rotateY(0deg)";
};