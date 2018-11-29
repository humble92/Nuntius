var showMenu = true;

$(document).ready(function() {

  var menuAnimationSlideIn = {"left": "0px", "easing": "swing"};
  var menuAnimationSlideOut = {"left": "-13%", "easing": "swing"};

  // when user clicks on the menu
  $("#menu-icon").click(function(event){
    console.log("Event target: "  + event.target);
    if(showMenu) {
      showMenu = false;
      $("#menu").animate(menuAnimationSlideIn, 300);

    } else {
      showMenu = true;
      $("#menu").animate(menuAnimationSlideOut, 500);
    }
  });
});

$(document).ready(function() {
  $("#userpic").click(function() {
    $("#dropdown").toggle("blind");
  });
});