$(document).ready(function(){
  $("form#programmingTrack").submit(function(event) {
    event.preventDefault();
    var name =$("#userName").val();
    var system = $("#whichOperatingSystem").val();
    var developer = $("#userPlatform").val();
    var company = $("#whichEnviroment").val();

    $("#resultName").text(name + ", from the data you gave us we recomend you to take   ");

    if (system === "1" ) {
      if (company === "1" && developer === "1") {
      $("#resultTrack").text("C# because it seems to fit you best!!");
      }
      else if (company === "2" && developer === "3") {
        $("#resultTrack").text("Php# because it seems to fit you best!!");
       } {

       }
    }





    $(".well").toggle();
  });
});
