$(function () {
    
    var header = $(".headerNotScrolled");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 60 ) {
            header.removeClass("headerNotScrolled").addClass("headerScrolled");
        } else {
            header.removeClass("headerScrolled").addClass('headerNotScrolled');
        }
    });

    var headerTab= $(".colorForHeaderUnscrolled");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 60 ) {
            headerTab.removeClass("colorForHeaderUnscrolled").addClass("colorForHeaderScrolled");
        } else {
            headerTab.removeClass("colorForHeaderScrolled").addClass('colorForHeaderUnscrolled');
        }
    });






    $('#chooseFile').bind('change', function () {
        var filename = $("#chooseFile").val();
        if (/^\s*$/.test(filename)) {
          $(".file-upload").removeClass('active');
          $("#noFile").text("No file chosen...");
        } else {
          $(".file-upload").addClass('active');
          $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
        }
      });
});
