$(document).ready(function(){
    $("button").click(function(){
        $(".earth").addClass("earth-CC");
        $(".earth").removeClass("earth");
        $(".earthimg").addClass("earthimg-CC");
        $(".earthimg").removeClass("earthimg");
        $("body").css("background-color", "rgb(58, 7, 7)");
        $(".marqtext").text("The earth is On Fire!");
        $(".marqtext").css({"color": "red", "font-family":"ff-folk, sans-serif", "font-weight":"400", "font-style": "normal","font-size": "150px", "line-height": "0em", "white-space": "nowrap","animation": "slide 10s linear infinite alternate"});
        $("#para-wrapper>p").text("Really, did that surprise you?");
        $(".A>p").text("No Shit Sherlock.");
        $(".B>p").text("Duh.");
        $(".C>p").text("Who TF knows!");
        $("button").hide();
        $("#bookrec-wrapper").css("display", "block");
    });
});