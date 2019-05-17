//1 selector.  aanspreken wat je wil wijzigen.
//2 functie. wat wil je er mee doen?
//3 parameter wat wil je met de functie doen?

$("#button").click(function() {
    $("#button").css("color", "#fff");
    //$("body").fadeOut(10000);
    $("#button").animate({ "margin-right": "400px" }, 5000);
});