$(document).ready(function(){
    $("svg").click(function(){
      $("#door").animate ({
        transform: 'perspective(1200px)',
        translateZ: '(0px)',
        translateX: '(0px)',
        translateY: '(0px)',
        rotateY: '(-102.5deg)'
      });
  });