/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
// jQuery(window).load(function() {
//         // will first fade out the loading animation
// 	jQuery(".status").fadeOut();
//         // will fade out the whole DIV that covers the website.
// 	jQuery(".preloader").delay(1000).fadeOut("slow");
// })

/* =================================
===  CONTACT FORM          ====
=================================== */
$("#contact2").submit(function (e) {
    e.preventDefault();
    var name = $("#name2").val();
    var email = $("#email2").val();
    var subject = $("#subject2").val();
    var dataString = "name=" + name + "&email=" + email + "&subject=" + subject;
  
    function isValidEmail(emailAddress) {
      var pattern = new RegExp(
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
      );
      return pattern.test(emailAddress);
    }
  
    if ((isValidEmail(email) && name.length > 1, subject.length > 1)) {
      $.ajax({
        type: "POST",
        url: "sendmail.php",
        data: dataString,
        beforeSend: function () {
          $("#submit2").hide();
          $(".ing").show();
        },
        success: function () {
          $(".ing").hide();
          $("#submit2").show();
          console.log("succses");
          $(".success").fadeIn(1000);
          $(".error").fadeOut(500);
          $("#name2").val("");
          $("#email2").val("");
          $("#subject2").val("");
          setInterval(function () {
            $(".success").fadeOut(500);
          }, 3000);
        },
      });
    } else {
      $(".error").fadeIn(1000);
      $(".success").fadeOut(500);
      setInterval(function () {
        $(".error").fadeOut(500);
      }, 3000);
    }
  
    // return false;
  });
  