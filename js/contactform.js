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
$("#contact").submit(function (e) {
  e.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var subject = $("#subject").val();
  var dataString =
    "name=" +
    name +
    "&email=" +
    email +
    "&phone=" +
    phone +
    "&subject=" +
    subject;

  function isValidEmail(emailAddress) {
    var pattern = new RegExp(
      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
    );
    return pattern.test(emailAddress);
  }

  if (
    (isValidEmail(email) && name.length > 1,
    phone.length > 1 && subject.length > 1)
  ) {
    $.ajax({
      type: "POST",
      url: "contactsendmail.php",
      data: dataString,
      beforeSend: function () {
        $("#submit").hide();
        $(".ing").show();
      },
      success: function () {
        $(".ing").hide();
        $("#submit").show();
        console.log("succses");
        $(".success").fadeIn(1000);
        $(".error").fadeOut(500);
        $("#name").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#subject").val("");
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
