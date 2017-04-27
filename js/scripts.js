$(function(){
  $(".btn").click(function(){ 
    $(".celebrity").hide();

    var hair = $("#hair").val()
    var zodiac = $("#zodiac").val()

    if(hair === "Blonde" || hair === "Black") {
      if(zodiac === "Aquarius" || zodiac === "Pisces" || zodiac === "Aries" || zodiac === "Taurus" || zodiac === "Gemini" || zodiac === "Cancer") {
        $(".tina").show()
      }
    }

    if(hair === "Blonde" || hair === "Black") {
      if(zodiac === "Leo" || zodiac === "Virgo" || zodiac === "Libra" || zodiac === "Scorpio" || zodiac === "Sagittarius" || zodiac === "Capricorn") {
        $(".denise").show()
      }
    }

    if(hair === "Brown" || hair === "Red") {
      if(zodiac === "Aquarius" || zodiac === "Pisces" || zodiac === "Aries" || zodiac === "Taurus" || zodiac === "Gemini" || zodiac === "Cancer") {
        $(".chris").show()
      }
    }

    if(hair === "Brown" || hair === "Red") {
      if(zodiac === "Leo" || zodiac === "Virgo" || zodiac === "Libra" || zodiac === "Scorpio" || zodiac === "Sagittarius" || zodiac === "Capricorn") {
        $(".xena").show()
      }
    }

    if (hair === "Blue") {
      $(".doc").show()
    }

  });
  });
// });
