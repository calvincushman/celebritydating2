$(function(){
  $(".btn").click(function(){
    $(".celebrity").hide();

    var hair = $("#hair").val()
    var zodiac = $("#zodiac").val()

    if(hair === blonde || black && zodiac === gemini || sagittarius) {
      $(".tina").show()
    }
    else if(hair <= 24 && zodiac === virgo || aries || leo) {
      $(".doc").show()
    }
    else if(hair <= 24 && zodiac === virgo || aries || leo) {
      $(".doc").show()
    }
    else if(hair <= 24 && zodiac === virgo || aries || leo) {
      $(".doc").show()
    }
    else if(hair <= 24 && zodiac === virgo || aries || leo) {
      $(".doc").show()
    }




  });
});
