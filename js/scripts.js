$(document).ready(function(){
  $("form#programmingTrack").submit(function(event) {
    event.preventDefault();
    var name =$("#userName").val();
    var system = $("#whichOperatingSystem").val();
    var developer = $("#userPlatform").val();
    var company = $("#whichEnviroment").val();

    $("#resultName").text(name + ", from the data you gave us we recomend you to take   ");

    if (system === "1" && company === "2") {
      $("#resultTrack").text("C# because it seems to fit you best!!");
    } else if (system === "1" && developer === "1") {
      $("#resultTrack").text("C# because it seems to fit you best");
    }  else if (company === "1" && system === "3") {
      $("#resultTrack").text("C# because it seems to fit you best");

    } else if (system === "2" && developer === "2") {
      $("#resultTrack").text("Java because it seems to fit you best");
    } else if (system === "2" && company === "3") {
      $("#resultTrack").text("Java because it seems to fit you best");
    } else if (system === "2" && developer === "3") {
      $("#resultTrack").text("Java because it seems to fit you best");


    } else if (system === "3" && company === "3") {
      $("#resultTrack").text("PhP because it seems to fit you best");
    } else if (system === "3" && company === "2") {
      $("#resultTrack").text("PhP because it seems to fit you best");
    } else if (system === "3" && developer === "1") {
      $("#resultTrack").text("PhP because it seems to fit you best");

    } else if (system === "4" && developer === "2") {
      $("#resultTrack").text("Ruby because it seems to fit you best");
    } else if (system === "4" && developer === "3") {
      $("#resultTrack").text("Ruby because it seems to fit you best");
    }else if (system === "4" && company === "4") {
      $("#resultTrack").text("Ruby because it seems to fit you best");
    }






    $(".well").toggle();
  });
});
